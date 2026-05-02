import { motion } from 'framer-motion';

const variants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? '8%' : '-8%',
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? '-6%' : '6%',
    scale: 0.99,
    transition: { duration: 0.6, ease: [0.7, 0, 0.84, 0] },
  }),
};

export default function SceneWrapper({ children, direction, className = '' }) {
  return (
    <motion.section
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className={`absolute inset-0 flex h-full w-full overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
}
