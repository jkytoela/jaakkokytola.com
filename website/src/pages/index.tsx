import { type NextPage } from 'next';

import MainTemplate from '@/templates/Main';
import { lists } from '@/utils/constants';

const Home: NextPage = () => (
  <MainTemplate title="Jaakko Kytölä" description="My personal website">
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-prose">
        <h1 className="text-3xl font-extrabold tracking-tight leading-8 text-center text-gray-800 sm:text-4xl">
          Jaakko Kytölä
        </h1>
      </div>
      <div className="mx-auto mt-10 text-gray-600 prose prose-indigo">
        <p>
          Hello 👋🏼 I am a Software Developer living in Espoo, Finland. I am currently working 
          in Neurali Oy. I have a strong emphasis on the front-end side, but I have
          experience of working with backend technologies as well.
        </p>
        <p>
          What motivates me is making a positive impact on clients and their
          end-users. Whether it&#39;s hands on web development, improving
          communication, writing documentation or doing something else - I have
          a strong commitment to supporting my clients in reaching their goals.
          With a focus on collaboration and a dedication to staying up-to-date
          with the latest technologies and best practices, I strive to deliver
          outstanding service and create value for all stakeholders involved. My
          goal is to utilize my skills and expertise to solve challenging
          problems and contribute to the growth and success of my clients&#39;
          businesses.
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
        <h2>Contact me</h2>
        <address>
          <strong>Jaakko Kytölä</strong>
          <br />
          kytola.jaakko@gmail.com
          <br />
          +358 40 5432 030
          <br />
          Espoo, Finland
          <br />
          <a href="https://www.linkedin.com/in/jkytola/">LinkedIn</a>{' '}
          <a href="https://www.twitter.com/bjakyt/">Twitter</a>{' '}
          <a href="https://www.github.com/jkytoela/">Github</a>{' '}
        </address>
      </div>
    </div>
  </MainTemplate>
);

export default Home;
