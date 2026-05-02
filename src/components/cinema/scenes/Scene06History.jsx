import { motion } from 'framer-motion';
import SceneWrapper from './SceneWrapper.jsx';
import FilmGrain from '../FilmGrain.jsx';
import { useT } from '../../../i18n/useT.js';

const RECENT = [
  { date: '25 / 04 / 2026', name: 'Grand Raid Ventoux by UTMB', dist: '26 km', time: '02:37:09', women: '9/381', highlight: true },
  { date: '12 / 10 / 2025', name: 'All’en Trail', dist: '12 km', time: '01:05:52', women: '2/90' },
  { date: '07 / 09 / 2025', name: 'Les Rondes Charolaises', dist: '20 km', time: '02:12:18', women: '2/28' },
  { date: '31 / 05 / 2025', name: 'adidas TERREX MaXi-Race 100K', dist: '100 km', time: '18:01:41', women: '41/124' },
  { date: '29 / 03 / 2025', name: 'Trail de Mirmande', dist: '15 km', time: '01:36:25', women: '1/58' },
];

export default function Scene06History({ direction }) {
  const t = useT('races');

  return (
    <SceneWrapper direction={direction} className="bg-black">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,77,24,0.18),transparent_60%)]" />
      <FilmGrain opacity={0.08} blendMode="overlay" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-12 sm:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-flame-400">
          Chapitre 06 — {t.eyebrow}
        </p>

        <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.85] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl">
          {t.title1}{' '}
          <span className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent">
            {t.title2}
          </span>
        </h2>

        <ul className="mt-10 max-w-5xl divide-y divide-white/10">
          {RECENT.map((r, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 ${
                r.highlight ? 'text-white' : 'text-white/70'
              }`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
                {r.date}
              </span>
              <span className="flex-1 font-display text-xl font-semibold uppercase tracking-tight sm:text-2xl">
                {r.name}
                {r.highlight && (
                  <span className="ml-2 inline-block rounded-full bg-flame-500 px-2 py-0.5 align-middle font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                    Réf
                  </span>
                )}
              </span>
              <span className="font-mono text-sm tabular-nums sm:text-base">
                {r.dist}
              </span>
              <span className="font-mono text-sm tabular-nums sm:text-base">
                {r.time}
              </span>
              <span className={`font-mono text-sm font-bold tabular-nums sm:text-base ${r.highlight ? 'text-flame-400' : 'text-white'}`}>
                ♀ {r.women}
              </span>
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
          {t.footnote}
        </p>
      </div>
    </SceneWrapper>
  );
}
