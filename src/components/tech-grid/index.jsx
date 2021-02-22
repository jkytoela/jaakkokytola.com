import * as React from 'react';
import { tw } from 'twind';
import { motion, useAnimation } from 'framer-motion';
import nextjs from '../../assets/nextjs.svg';

const techIcons = [
  { isClass: true, src: 'devicon-javascript-plain colored' },
  { isClass: true, src: 'devicon-typescript-plain colored' },
  { isClass: true, src: 'devicon-react-original colored' },
  { isClass: false, src: nextjs },
  { isClass: true, src: 'devicon-laravel-plain colored' },
  { isClass: true, src: 'devicon-sass-original colored' },
  { isClass: true, src: 'devicon-git-plain-wordmark colored' },
  { isClass: true, src: 'devicon-html5-plain colored' },
  { isClass: true, src: 'devicon-css3-plain colored' },
  { isClass: true, src: 'devicon-npm-original-wordmark colored' },
  { isClass: true, src: 'devicon-visualstudio-plain colored' },
  { isClass: true, src: 'devicon-docker-plain-wordmark colored' },
  { isClass: true, src: 'devicon-php-plain colored' },
  { isClass: true, src: 'devicon-mysql-plain-wordmark colored' },
  { isClass: true, src: 'devicon-apple-original colored' },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: (delayRef) => ({
    opacity: 1,
    scale: [0.2, 0.8, 0.6],
    transition: {
      delay: delayRef.current,
    },
  }),
  idle: {
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      ease: 'easeIn',
    }
  }
};

const TechGridItem = ({ icon, index, delay, itemDelay }) => {
  const delayRef = React.useRef(0);
  const ref = React.useRef();

  React.useEffect(() => {
    delayRef.current = index * itemDelay + delay;
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      custom={delayRef}
      className={tw(`m-4`)}
      drag
    >
      {icon.isClass ? (
        <motion.i className={tw(`text-6xl lg:text-8xl cursor-pointer ${icon.src}`)} />
      ) : (
        <motion.img
          drag
          src={icon.src}
          className={tw(`h-16 w-16 lg:h-24 lg:w-24 cursor-pointer`)}
        />
      )}
    </motion.div>
  );
};

const TechGrid = ({ delay, itemDelay }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start('visible');
  }, []);

  const isComplete = () => {
    controls.start('idle');
  }

  return (
    <div className={tw(`flex flex-col`)}>
      <motion.div
        initial="hidden"
        animate={controls}
        onAnimationComplete={isComplete}
        className={tw(`md:-mr-4 mt-8 lg:mt-0 flex flex-wrap flex-1 align-center justify-evenly md:justify-end max-w-2xl`)}
      >
        {techIcons.map((icon, index) => (
          <TechGridItem
            icon={icon}
            key={`icon-${index}`}
            index={index}
            delay={delay}
            itemDelay={itemDelay}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechGrid;
