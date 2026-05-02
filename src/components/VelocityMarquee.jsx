import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'framer-motion';
import { useT } from '../i18n/useT.js';

// wrap(min, max, v) — boucle une valeur x dans [min, max] (Linear pattern)
function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export default function VelocityMarquee({
  baseVelocity = -2,
  className = '',
}) {
  const a = useT('athlete');
  const p = useT('palmares');

  const items = [
    a.kpis?.[0]?.metric
      ? `${a.kpis[0].metric} ${a.kpis[0].value}${a.kpis[0].suffix}`
      : 'TOP 3%',
    'GR Ventoux 2026',
    'ITRA 565',
    'UTMB 568',
    p.podiumPill || 'Podium catégorie',
    a.ticker?.[3]?.value || 'Statut Élite',
  ];

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const reduced = useReducedMotion();

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    { clamp: false }
  );

  // -100% → 0% boucle parfaite (deux copies juxtaposées)
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section
      aria-label="Stats key indicators"
      className={`relative overflow-hidden border-y border-mountain-950/10 bg-mountain-950 py-5 sm:py-6 ${className}`}
    >
      <motion.div
        style={{ x }}
        className="flex w-max flex-nowrap whitespace-nowrap will-change-transform"
      >
        {[0, 1, 2, 3].map((copyIdx) => (
          <span key={copyIdx} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span
                key={`${copyIdx}-${i}`}
                className="inline-flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10"
              >
                <span className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-3xl md:text-4xl">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-flame-500"
                />
              </span>
            ))}
          </span>
        ))}
      </motion.div>

      {/* Fade gauche / droite */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-mountain-950 to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-mountain-950 to-transparent sm:w-24"
      />
    </section>
  );
}
