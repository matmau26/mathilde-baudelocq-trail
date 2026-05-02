import { motion } from 'framer-motion';
import SceneWrapper from './SceneWrapper.jsx';
import FilmGrain from '../FilmGrain.jsx';
import { useT } from '../../../i18n/useT.js';

export default function Scene02Identity({ direction }) {
  const t = useT('athlete');

  return (
    <SceneWrapper direction={direction}>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-10 px-6 py-20 sm:px-12 lg:flex-row lg:items-end lg:justify-between">
        {/* Côté gauche — texte hero */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-flame-400">
            Chapitre 02 — {t.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-6xl font-bold uppercase leading-[0.85] tracking-[-0.02em] text-white sm:text-7xl lg:text-[7rem]">
            {t.overlayLine1}
            <br />
            <span className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent">
              {t.overlayLine2}
            </span>
          </h2>
          <p className="mt-8 font-editorial text-xl italic leading-snug text-white/85 sm:text-2xl">
            {t.kicker}
          </p>
        </motion.div>

        {/* Côté droit — stats inline */}
        <motion.dl
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-x-6 gap-y-6 lg:max-w-md lg:grid-cols-1 lg:gap-y-5"
        >
          {t.facts.map((f, i) => (
            <div key={i} className="border-l-2 border-flame-500 pl-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                {f.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                {f.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </SceneWrapper>
  );
}
