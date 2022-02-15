import * as React from 'react';

import MainTemplate from '@/templates/Main';

const lists = [
  {
    title: 'As an individual contributor and as a part of your team, I can:',
    items: [
      'Support your team by doing hands-on development work',
      'Build functional prototypes quickly',
      'Help you to define the scope',
      'Conduct code reviews and give feedback',
      'Fix non-functioning code',
      'Bring a non-stop, can-do attitude',
    ],
  },
  {
    title: 'I am currently using:',
    items: [
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'Express',
      'JavaScript',
    ],
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
    <MainTemplate title="Jaakko Kytölä" description="My personal website">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose">
          <h1 className="text-3xl font-extrabold tracking-tight leading-8 text-center text-gray-800 sm:text-4xl">
            Jaakko Kytölä
          </h1>
        </div>
        <div className="mx-auto mt-10 text-gray-600 prose prose-indigo">
          <p>
            Hello 👋🏼 I am a Software Developer living in Espoo, Finland. I have
            a strong emphasis on the front-end side of things, but I have
            experience of working with some backend technologies as well.
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
    </MainTemplate>
  );
};

export default Index;
