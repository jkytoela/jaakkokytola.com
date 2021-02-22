import * as React from 'react';
import { tw } from 'twind';
import { motion } from 'framer-motion';

const links = {
  notion: 'https://www.notion.so/1ee96d18613d4a73acff7f295ecd0374?v=cce9dbcb359a4222ad0b4277342c0fef',
  linkedin: 'https://www.linkedin.com/in/jkytola',
  github: 'https://github.com/jkytoela',
  email: 'mailto:kytola.jaakko@gmail.com',
};

const Link = ({ link, text }) => <a href={link} target="_blank" className={tw(`underline`)}>{text}</a>

const AboutMe = ({ titleDelay, subtitleDelay }) => (
  <div className={tw(`flex flex-col lg:flex-1`)}>
    <motion.h1
      className={tw(`font-sans text-3xl lg:text-4xl leading-snug lg:leading-relaxed font-semibold max-w-lg text-gray-800`)}
      initial={{
        scale: 0,
      }}
      animate={{
        scale: [0, 1.1, 1]
      }}
      transition={{ 
        delay: titleDelay,
        duration: 0.35,
      }}
    >
      I'm a software developer who loves to craft stuff that appear on screens.
    </motion.h1>
    <motion.h4
      className={tw(`mt-8 font-sans lg:text-2xl`)}
      initial={{
        scale: 0,
        }}
      animate={{
        scale: 1,
      }}
      transition={{
        delay: subtitleDelay,
        duration: 0.15,
        }}
    >
      <div className={tw(`text-gray-600`)}>
        <p>Check out what series <Link link={links.notion} text="I'm watching" />,</p>
        <p>find me on <Link link={links.github} text="GitHub" /> / <Link link={links.linkedin} text="LinkedIn" />,</p>
        <p>or just send me an <Link link={links.email} text="email" /> saying hello.</p>
      </div>
    </motion.h4>
  </div>
);

export default AboutMe;
