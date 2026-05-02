import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SceneWrapper from './SceneWrapper.jsx';
import FilmGrain from '../FilmGrain.jsx';
import { useT } from '../../../i18n/useT.js';

const RUN_VIDEO =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto:good,f_auto,w_1800,vc_h264/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.mp4';
const POSTER = '/Maxi2025-1.jpg';

const SUBS_FR = [
  '26 avril 2026.',
  'Massif du Ventoux. 1 100 m d+.',
  'Une trajectoire vers l’Élite.',
];
const SUBS_EN = [
  'April 26, 2026.',
  'Mont Ventoux. 1,100 m vert.',
  'A trajectory to Elite.',
];

const titleVariant = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

function Mask({ text, delay = 0, className = '' }) {
  return (
    <span aria-label={text} className={`block overflow-hidden ${className}`}>
      <motion.span
        variants={titleVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay }}
        aria-hidden="true"
        className="block"
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Scene01Cover({ direction }) {
  const t = useT('hero');
  const [ready, setReady] = useState(false);
  const lang =
    typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
  const subs = lang === 'en' ? SUBS_EN : SUBS_FR;
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute('muted', '');
    v.play().catch(() => {});
  }, []);

  return (
    <SceneWrapper direction={direction}>
      {/* Vidéo plein écran */}
      <div className="absolute inset-0 -z-10">
        <img
          src={POSTER}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ready ? 'opacity-0' : 'opacity-90'}`}
        />
        <video
          ref={videoRef}
          src={RUN_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1500 ${ready ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: 'scale(1.05)' }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/95" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        <div aria-hidden="true" className="absolute -bottom-32 left-1/2 h-[36rem] w-[44rem] -translate-x-1/2 rounded-full bg-flame-700/40 blur-[140px]" />
      </div>

      <FilmGrain opacity={0.12} blendMode="overlay" />

      {/* Contenu central */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-32 pt-32 sm:px-12 sm:pb-36 sm:pt-36">
        <div className="mx-auto w-full max-w-7xl">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 max-w-2xl space-y-1 font-mono text-xs uppercase tracking-[0.35em] text-white/85 sm:text-sm"
          >
            {subs.map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.5 }}
                className="flex items-baseline gap-3"
              >
                <span aria-hidden="true" className="text-flame-400">—</span>
                <span>{line}</span>
              </motion.li>
            ))}
          </motion.ul>

          <h1 className="font-display font-bold uppercase leading-[0.82] tracking-[-0.025em]">
            <Mask
              text={t.titleFirst}
              delay={1.8}
              className="text-[15vw] sm:text-[12vw] lg:text-[10vw]"
            />
            <Mask
              text={t.titleLast}
              delay={2.0}
              className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-[15vw] text-transparent sm:text-[12vw] lg:text-[10vw]"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="mt-6 max-w-md font-editorial text-xl italic leading-snug text-white/85 sm:text-2xl"
          >
            {t.subtitleSport}.{' '}
            <span className="text-white">{t.subtitleProject}.</span>
          </motion.p>
        </div>
      </div>
    </SceneWrapper>
  );
}
