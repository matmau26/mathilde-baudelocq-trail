import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SceneWrapper from './SceneWrapper.jsx';
import FilmGrain from '../FilmGrain.jsx';
import { useT } from '../../../i18n/useT.js';

export default function Scene08Partnership({ direction }) {
  const t = useT('partnership');

  return (
    <SceneWrapper direction={direction}>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-12 sm:py-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[11px] uppercase tracking-[0.35em] text-flame-400"
        >
          Chapitre 08 — {t.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-6xl font-bold uppercase leading-[0.85] tracking-[-0.025em] text-white sm:text-7xl lg:text-[8rem]"
        >
          {t.title1}
          <br />
          <span className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent">
            {t.title2}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-8 max-w-2xl font-editorial text-2xl italic leading-snug text-white/85 sm:text-3xl"
        >
          {t.kickerIntro}{' '}
          <span className="text-white">{t.kickerMutual}</span>
          {t.kickerComma}
          <span className="text-white">{t.kickerLocal}</span>{' '}
          {t.kickerAnd}{' '}
          <span className="text-white">{t.kickerBrand}</span>
          {t.kickerEnd}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-flame-500 px-6 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-xl shadow-flame-500/40 transition-all hover:bg-flame-600"
          >
            {t.footerCta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </Link>
          <Link
            to="/communiques"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white/15"
          >
            Communiqués →
          </Link>
        </motion.div>
      </div>
    </SceneWrapper>
  );
}
