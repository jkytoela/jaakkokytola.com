import * as dotenv from 'dotenv';
import * as z from 'zod';

// Load environment variables from .env file
dotenv.config();

const configSchema = z.object({
  // Target domain - Route 53 Hosted Zone must exist (e.g. example.com)
  targetDomain: z.string(),

  // Already issued certificate for the target domain (e.g. arn:aws:acm:us-east-1:12345...)
  certificateArn: z.string().min(20),

  // e.g. index.html
  indexDocument: z.string().min(6),

  // e.g. 404.html
  errorDocument: z.string().min(6),
});

export type Config = z.infer<typeof configSchema>;

/**
 * @throws Error if the config is invalid
 */
export function validateConfig(cfg: unknown): Config {
  const _cfg = configSchema.safeParse(cfg);
  if (!_cfg.success) {
    console.error(
      '❌ Invalid environment variables:\n',
      _cfg.error.format(),
    );
    throw new Error('Invalid environment variables');
  }

  return _cfg.data;
}

// Parse and validate environment variables
export const config = validateConfig({
  targetDomain: process.env.DOMAIN,
  certificateArn: process.env.CERTIFICATE_ARN,
  indexDocument: process.env.INDEX_DOCUMENT,
  errorDocument: process.env.ERROR_DOCUMENT,
});