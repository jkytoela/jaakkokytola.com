import * as aws from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';
import { config } from './env';

const certificateArn: pulumi.Input<string> = config.certificateArn;
const tenMinutes = 60 * 10;

// Bucket for the website contents
const contentBucket = new aws.s3.Bucket('contentBucket', {
  bucket: config.targetDomain,
  website: {
    indexDocument: config.indexDocument,
    errorDocument: config.errorDocument,
  },
});

// Bucket for the CDN's request logs
const logsBucket = new aws.s3.Bucket('requestLogs', {
  bucket: `${config.targetDomain}-logs`,
  acl: 'private',
});

// Generate Origin Access Identity to access the private s3 bucket.
const originAccessIdentity = new aws.cloudfront.OriginAccessIdentity(
  'originAccessIdentity',
  {
    comment: 'This is needed to setup s3 polices and make s3 not public.',
  }
);

// Configures the CloudFront distribution
// Relevant documentation:
// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html
// https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
const distributionArgs: aws.cloudfront.DistributionArgs = {
  enabled: true,
  aliases: [config.targetDomain, `www.${config.targetDomain}`],

  origins: [
    {
      originId: contentBucket.arn,
      domainName: contentBucket.bucketRegionalDomainName,
      s3OriginConfig: {
        originAccessIdentity: originAccessIdentity.cloudfrontAccessIdentityPath,
      },
    },
  ],

  defaultRootObject: config.indexDocument,

  defaultCacheBehavior: {
    targetOriginId: contentBucket.arn,
    viewerProtocolPolicy: 'redirect-to-https',
    allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
    cachedMethods: ['GET', 'HEAD', 'OPTIONS'],
    forwardedValues: {
      cookies: { forward: 'none' },
      queryString: false,
    },

    minTtl: 0,
    defaultTtl: tenMinutes,
    maxTtl: tenMinutes,
  },

  priceClass: 'PriceClass_100',

  customErrorResponses: [{
    errorCode: 404,
    responseCode: 404,
    responsePagePath: `/${config.errorDocument}`
  }],

  restrictions: {
    geoRestriction: {
      restrictionType: 'none',
    },
  },

  viewerCertificate: {
    acmCertificateArn: certificateArn, // Per AWS, ACM certificate must be in the us-east-1 region.
    sslSupportMethod: 'sni-only',
  },

  loggingConfig: {
    bucket: logsBucket.bucketDomainName,
    includeCookies: false,
    prefix: `${config.targetDomain}/`,
  },
};

const cdn = new aws.cloudfront.Distribution('cdn', distributionArgs);

// Creates a new Route 53 DNS record pointing the domain to the CloudFront distribution
function createARecord(
  targetDomain: string,
  distribution: aws.cloudfront.Distribution,
  www = false
): aws.route53.Record {
  const hostedZoneId = aws.route53
    .getZone({ name: targetDomain }, { async: true })
    .then((zone) => zone.zoneId);

  return new aws.route53.Record(www ? `${targetDomain}-www-alias` : targetDomain, {
    name: www ? `www.${targetDomain}` : targetDomain,
    zoneId: hostedZoneId,
    type: 'A',
    aliases: [
      {
        name: distribution.domainName,
        zoneId: distribution.hostedZoneId,
        evaluateTargetHealth: true,
      },
    ],
  });
}

new aws.s3.BucketPolicy('bucketPolicy', {
  bucket: contentBucket.id,
  policy: pulumi.jsonStringify({
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Principal: {
          AWS: originAccessIdentity.iamArn,
        }, // Only allow Cloudfront read access.
        Action: ['s3:GetObject'],
        Resource: [pulumi.interpolate`${contentBucket.arn}/*`], // Give Cloudfront access to the entire bucket.
      },
    ],
  }),
});

createARecord(config.targetDomain, cdn);
createARecord(config.targetDomain, cdn, true);

export const contentBucketUri = pulumi.interpolate`s3://${contentBucket.bucket}`;
export const contentBucketWebsiteEndpoint = contentBucket.bucketRegionalDomainName;
export const cloudFrontDomain = cdn.domainName;
export const targetDomainEndpoint = `https://${config.targetDomain}/`;
