import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Bandes noires cinéma 2.39:1.
 * À l'ouverture : se ferment sur la scène (effet "ouverture de film").
 * Au scroll : s'ouvrent progressivement pour laisser la place au site.
 */
export default function Letterbox({ targetRef }) {
  const fallbackRef = useRef(null);
  const ref = targetRef || fallbackRef;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const barHeight = useTransform(scrollYProgress, [0, 0.6], ['8svh', '0svh']);

  return (
    <>
      <motion.div
        aria-hidden="true"
        initial={{ height: 0 }}
        animate={{ height: '8svh' }}
        style={{ height: barHeight }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-40 bg-black"
      />
      <motion.div
        aria-hidden="true"
        initial={{ height: 0 }}
        animate={{ height: '8svh' }}
        style={{ height: barHeight }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 bg-black"
      />
    </>
  );
}
