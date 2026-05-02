import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import SceneWrapper from './SceneWrapper.jsx';
import FilmGrain from '../FilmGrain.jsx';
import { useT } from '../../../i18n/useT.js';

export default function Scene04Reference({ direction }) {
  const t = useT('palmares');

  return (
    <SceneWrapper direction={direction}>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-24 pt-24 sm:px-12 sm:pb-32 sm:pt-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[11px] uppercase tracking-[0.35em] text-flame-400"
        >
          Chapitre 04 — {t.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-6xl font-bold uppercase leading-[0.85] tracking-[-0.025em] text-white sm:text-7xl lg:text-[7rem]"
        >
          {t.raceTitle1}
          <br />
          <span className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent">
            {t.raceTitle2}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-white/70"
        >
          {t.raceSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 grid max-w-4xl grid-cols-3 gap-4 border-t border-white/15 pt-6"
        >
          {t.stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                {s.label}
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
                {s.value}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-flame-500 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white"
        >
          <Trophy className="h-3 w-3" strokeWidth={2.5} />
          {t.podiumPill}
        </motion.div>
      </div>
    </SceneWrapper>
  );
}
