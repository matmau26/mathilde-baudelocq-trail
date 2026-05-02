import { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';

/**
 * Compteur animé : démarre à `from`, atteint `to` quand visible.
 * Respecte prefers-reduced-motion (affiche directement la valeur cible).
 */
export default function AnimatedCounter({
  from = 0,
  to,
  duration = 1.6,
  className = '',
  ariaLabel,
  format = (v) => Math.round(v).toLocaleString('fr-FR').replace(/ /g, ' '),
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30%' });
  const value = useMotionValue(from);
  const display = useTransform(value, (v) => format(v));

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduced) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, to, duration, value]);

  return (
    <motion.span
      ref={ref}
      aria-label={ariaLabel ?? String(to)}
      className={className}
    >
      {display}
    </motion.span>
  );
}
