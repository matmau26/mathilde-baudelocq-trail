import { motion } from 'framer-motion';
import SceneWrapper from './SceneWrapper.jsx';
import FilmGrain from '../FilmGrain.jsx';
import { useT } from '../../../i18n/useT.js';

const ACCENT = ['flame', 'solar', 'electric'];

export default function Scene07Goals({ direction }) {
  const t = useT('calendar');
  const A = t.objectives;
  const B = t.secondary;

  return (
    <SceneWrapper direction={direction} className="bg-black">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,77,24,0.2),transparent_55%),radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.18),transparent_55%)]" />
      <FilmGrain opacity={0.08} blendMode="overlay" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-12 sm:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-flame-400">
          Chapitre 07 — {t.eyebrow}
        </p>

        <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.85] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl">
          {t.title1}{' '}
          <span className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent">
            {t.title2}
          </span>
        </h2>

        <p className="mt-6 max-w-2xl font-editorial text-xl italic leading-snug text-white/80 sm:text-2xl">
          {t.kicker}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 lg:grid-cols-3">
          {[...A, B].map((obj, i) => (
            <motion.article
              key={obj.code}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="relative bg-black p-7 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] ${
                    i < 2
                      ? 'bg-flame-500 text-white'
                      : 'bg-electric-500 text-white'
                  }`}
                >
                  {i < 2 ? t.objectiveALabel : t.objectiveBLabel}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {obj.code}
                </span>
              </div>

              <h3 className="mt-7 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
                {obj.title}
              </h3>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold leading-none tracking-tighter text-white sm:text-6xl">
                  {obj.distance.split(' ')[0]}
                </span>
                <span className="font-display text-base font-semibold uppercase tracking-widest text-white/50">
                  {obj.distance.split(' ')[1]}
                </span>
              </div>

              <dl className="mt-6 space-y-2 text-[11px] font-mono uppercase tracking-[0.2em]">
                <div className="flex justify-between">
                  <dt className="text-white/50">{t.objectiveLieu}</dt>
                  <dd className="text-white">{obj.location}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/50">{t.objectivePeriode}</dt>
                  <dd className="text-white">{obj.period}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </SceneWrapper>
  );
}
