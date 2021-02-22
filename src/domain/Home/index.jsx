import * as React from 'react';
import { motion } from 'framer-motion';
import { tw } from 'twind';
import Header from '../../components/header';
import TechGrid from '../../components/tech-grid';
import AboutMe from '../../components/about-me';

const Home = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = '#FFFFFF';
  }, []);

  return (
    <div className={tw(`min-h-screen bg-white flex flex-col lg:overflow-hidden relative`)}>
      <Header
        delay={0.65}
        menuSpinDelay={9.75}
      />
      <div className={tw(`max-w-7xl w-full mx-auto mt-8 lg:mt-12 flex-grow`)}>
        <div className={tw(`flex flex-row flex-wrap px-10 xl:px-0`)}>
          <AboutMe
            titleDelay={1.5}
            subtitleDelay={1.8}
          />
          <TechGrid
            delay={2.2}
            itemDelay={0.25}
          />
        </div>
      </div>
      <footer className={tw(`text-center my-8 bg-white`)}>
        <motion.p
          className={tw(`text-xl md:text-2xl mx-4 font-cursive text-gray-400`)}
          initial={{
            y: 200,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 8,
          }}
        >
          That's all, folks.
        </motion.p>
      </footer>
    </div>
  );
};

export default Home;