import * as React from 'react';
import { motion } from 'framer-motion';
import { tw } from 'twind/css';
import burger from '../../assets/burger.svg';
import burgerColored from '../../assets/burger-color.svg';

const Header = ({ delay, menuSpinDelay }) => {
  const [isHover, setIsHover] = React.useState(false);
  const toggleHover = () => setIsHover(!isHover);

  return (
    <motion.div
      className={tw(`max-w-7xl w-full mx-auto px-10 xl:px-0`)}
      initial={{
        opacity: 0,
        y: -150,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: delay,
        type: "spring",
        damping: 8,
      }}
    >
      <div className={tw(`flex items-center justify-between h-28 lg:h-40`)}>
        <h1 className={tw(`font-sans text-2xl lg:text-5xl font-bold text-gray-800 pointer-events-none`)}>
          Jaakko Kytölä
        </h1>
        <motion.div
          className={tw(`h-10 w-10 lg:h-12 lg:w-12 cursor-pointer relative`)}
          animate={{
            rotate: [0, 15, -10, 0],
          }}
          transition={{
            delay: menuSpinDelay,
          }}
        >
          <motion.img
            src={isHover ? burgerColored : burger}
            onHoverStart={toggleHover}
            onHoverEnd={toggleHover}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
