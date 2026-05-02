import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Barre fine en haut de page qui se remplit en flame à mesure du scroll.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-gradient-to-r from-flame-500 via-flame-400 to-solar-400"
    />
  );
}
