import * as React from 'react';

import Meta from '@/components/Meta';

const lists = [
  {
    title: 'As an individual contributor and as a part of your team, I can:',
    items: [
      'Fix non-functioning code',
      'Build functional prototypes quickly and help you define the scope',
      'Support your team by doing hands-on development work',
      'Conduct code reviews and give feedback',
      'Bring a non-stop, can-do attitude',
    ],
  },
  {
    title: 'I am currently using:',
    items: ['React', 'TypeScript', 'Next.js', 'Node.js', 'JavaScript'],
  },
  {
    title: 'I am interested in:',
    items: [
      'OSS',
      'Design Systems',
      'Accessibility',
      'Web Performance',
      'React Ecosystem',
      'Serverless',
    ],
  },
  {
    title: 'I would like to learn more about:',
    items: ['AWS', 'Postgres'],
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden relative py-16 bg-white">
      <Meta
        title="Jaakko Kytölä - Software Developer"
        description="My personal website"
      />
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:w-full lg:h-full">
        <div
          className="relative mx-auto max-w-prose h-full text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-x-32 -translate-y-1/2"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose">
          <h1 className="text-3xl font-extrabold tracking-tight leading-8 text-center text-gray-900 sm:text-4xl">
            Jaakko Kytölä
          </h1>
        </div>
        <div className="mx-auto mt-6 text-gray-600 prose prose-indigo">
          <p>
            Hello 👋🏼 I am a Software Developer living and working in Espoo,
            Finland. I have a strong emphasis on the front-end side of things,
            but I have experience of working with some backend technologies as
            well.
          </p>
          <p>
            What motivates me is making a positive impact on clients and helping
            out in any way possible, whether it is through creating value for
            the end-user, rethinking user flows, making web applications
            accessible or something else.
          </p>
          <div className="flex flex-col space-y-2">
            {lists.map((item) => (
              <div key={item.title}>
                <p className="font-semibold">{item.title}</p>
                <ul role="list">
                  {item.items.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
