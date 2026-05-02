import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SceneWrapper from './SceneWrapper.jsx';
import FilmGrain from '../FilmGrain.jsx';
import AnimatedCounter from '../../AnimatedCounter.jsx';
import { useT } from '../../../i18n/useT.js';

const ROTATE_MS = 3500;

export default function Scene03Numbers({ direction }) {
  const t = useT('athlete');
  const kpis = t.kpis;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % kpis.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [kpis.length]);

  const kpi = kpis[current];
  const isNumeric = /^\d+$/.test(kpi.value);

  return (
    <SceneWrapper direction={direction} className="bg-mountain-950">
      {/* Halo flame oversize qui change de position pour chaque KPI */}
      <motion.div
        key={`halo-${current}`}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-flame-700/40 blur-[180px]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      <FilmGrain opacity={0.08} blendMode="overlay" />

      {/* Méta + label */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center px-6 sm:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-flame-400 sm:text-[11px]"
          >
            Chapitre 03 — Trajectoire Élite
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/60 sm:text-sm">
                {String(current + 1).padStart(2, '0')} / {String(kpis.length).padStart(2, '0')}
                <span aria-hidden="true" className="mx-3 inline-block text-white/30">·</span>
                {kpi.eyebrow}
              </p>

              <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                {kpi.metric && (
                  <span className="font-display text-5xl font-bold uppercase leading-[0.85] tracking-[-0.02em] text-white/30 sm:text-7xl lg:text-9xl">
                    {kpi.metric}
                  </span>
                )}
                <span
                  className={`bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text font-display font-bold leading-[0.82] tracking-[-0.04em] text-transparent ${
                    kpi.metric
                      ? 'text-[36vw] sm:text-[28vw] lg:text-[22vw]'
                      : 'text-[48vw] sm:text-[36vw] lg:text-[26vw]'
                  }`}
                >
                  {isNumeric ? <AnimatedCounter to={Number(kpi.value)} duration={2.4} /> : kpi.value}
                </span>
                <span className="font-display text-3xl font-semibold uppercase tracking-[0.1em] text-white/50 sm:text-5xl lg:text-7xl">
                  {kpi.suffix}
                </span>
              </div>

              <div className="mt-6 grid max-w-3xl grid-cols-1 gap-2 lg:grid-cols-12 lg:gap-6">
                <p className="font-editorial text-xl italic leading-snug text-white/85 sm:text-2xl lg:col-span-8">
                  {kpi.context}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400 lg:col-span-4 lg:text-right">
                  {kpi.tag}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicateur de KPI courant */}
          <div className="mt-12 flex items-center gap-2">
            {kpis.map((k, i) => (
              <button
                key={k.eyebrow}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={k.eyebrow}
                className={`h-px transition-all ${
                  i === current ? 'w-16 bg-flame-500' : 'w-8 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
              auto-play
            </span>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
