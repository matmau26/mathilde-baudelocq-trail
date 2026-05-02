import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SceneWrapper from './SceneWrapper.jsx';
import FilmGrain from '../FilmGrain.jsx';
import { useT } from '../../../i18n/useT.js';

const PHOTOS = [
  { src: '/Ventoux2025.jpeg', caption: 'GR Ventoux · 2025' },
  { src: '/Maxi2025-1.jpg', caption: 'MaXi-Race · 100 km' },
  { src: '/UT4M.jpeg', caption: 'Ultra Tour des 4 Massifs' },
  { src: '/TrailBourget.jpeg', caption: 'Trail du Bourget' },
  { src: '/Ventous2026.jpeg', caption: 'Ventoux · 2026' },
  { src: '/MBMaxi.jpg', caption: 'MaXi-Race' },
];

const ROTATE_MS = 4000;

export default function Scene05Gallery({ direction }) {
  const t = useT('gallery');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % PHOTOS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <SceneWrapper direction={direction}>
      {/* Photo en transition fade-cross */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={PHOTOS[current].src}
            alt={PHOTOS[current].caption}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
      </div>

      <FilmGrain opacity={0.12} blendMode="overlay" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6 pb-24 pt-24 sm:px-12 sm:pb-32 sm:pt-32">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-flame-400">
            Chapitre 05 — {t.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-6xl font-bold uppercase leading-[0.85] tracking-[-0.025em] text-white sm:text-7xl lg:text-[7rem]">
            {t.title1}{' '}
            <span className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-sm uppercase tracking-[0.25em] text-white"
            >
              <span className="text-white/60">
                {String(current + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}
              </span>
              <span aria-hidden="true" className="mx-3 inline-block text-white/30">·</span>
              {PHOTOS[current].caption}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-1.5">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Photo ${i + 1}`}
                className={`h-px transition-all ${
                  i === current ? 'w-12 bg-flame-500' : 'w-6 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
