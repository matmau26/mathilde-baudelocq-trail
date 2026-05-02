import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter.jsx';
import FilmGrain from './FilmGrain.jsx';
import Letterbox from './Letterbox.jsx';
import { useT } from '../../i18n/useT.js';

const HERO_VIDEO =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto:good,f_auto,w_1800,vc_h264/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.mp4';
const POSTER_FALLBACK = '/Maxi2025-1.jpg';

const SUBTITLES_FR = [
  '26 avril 2026.',
  'Massif du Ventoux. 1 100 m d+.',
  'Une trajectoire vers l’Élite.',
];
const SUBTITLES_EN = [
  'April 26, 2026.',
  'Mont Ventoux. 1,100 m vert.',
  'A trajectory to Elite.',
];

const titleVariants = {
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

function MaskWord({ text, delay = 0, className = '' }) {
  return (
    <span aria-label={text} className={`block overflow-hidden ${className}`}>
      <motion.span
        variants={titleVariants}
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

export default function CinemaCover() {
  const t = useT('hero');
  const { lang } = (() => {
    try {
      // useLanguage évite couplage : lecture indirecte via document.documentElement
      const l = (typeof document !== 'undefined' && document.documentElement.lang) || 'fr';
      return { lang: l };
    } catch {
      return { lang: 'fr' };
    }
  })();
  const subtitles = lang === 'en' ? SUBTITLES_EN : SUBTITLES_FR;

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute('muted', '');
    v.play().catch(() => {});
  }, []);

  // Parallax / zoom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white"
    >
      {/* Letterbox cinéma */}
      <Letterbox targetRef={containerRef} />

      {/* VIDÉO PLEIN ÉCRAN avec slow zoom Ken Burns */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <img
          src={POSTER_FALLBACK}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-0' : 'opacity-90'
          }`}
        />
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1500 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </motion.div>

      {/* Color grade : voile chaud + voile sombre du bas */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-mountain-950/40 to-black/95"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]"
      />
      {/* Touche flame chaude en bas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-[32rem] w-[44rem] -translate-x-1/2 rounded-full bg-flame-700/35 blur-[140px]"
      />

      {/* Grain de pellicule */}
      <FilmGrain opacity={0.12} blendMode="overlay" />

      {/* Scanline qui descend lentement (effet caméra/CRT discret) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"
        style={{ animation: 'scanline 9s linear infinite' }}
      />

      {/* HUD CAMÉRA — coins de la frame */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {/* Crochets de cadrage SVG */}
        <CornerBracket position="top-left" />
        <CornerBracket position="top-right" />
        <CornerBracket position="bottom-left" />
        <CornerBracket position="bottom-right" />

        {/* REC indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute left-6 top-[calc(8svh+1rem)] flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 sm:left-8"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-flame-500"
            style={{ animation: 'recBlink 1.4s ease-in-out infinite' }}
          />
          REC · 4K · {t.snapshotPeriod}
        </motion.div>

        {/* Timecode */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute right-6 top-[calc(8svh+1rem)] font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 sm:right-8"
        >
          26·04·2026 / 08:30
        </motion.div>

        {/* Scroll cue en bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="absolute bottom-[calc(8svh+1.25rem)] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-white/70"
        >
          <span>Continuer le récit</span>
          <span className="block h-8 w-px overflow-hidden bg-white/20">
            <span
              aria-hidden="true"
              className="block h-full w-full animate-bounce-slow bg-gradient-to-b from-flame-500 to-transparent"
            />
          </span>
        </motion.div>
      </div>

      {/* CONTENU CENTRAL — sous-titres séquentiels + titre */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-[calc(8svh+5rem)] pt-[calc(8svh+5rem)] sm:px-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Sous-titres en mode "film opening" */}
          <ul className="mb-12 max-w-2xl space-y-1 font-mono text-xs uppercase tracking-[0.35em] text-white/85 sm:text-sm">
            {subtitles.map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.6 }}
                className="flex items-baseline gap-3"
              >
                <span aria-hidden="true" className="text-flame-400">—</span>
                <span>{line}</span>
              </motion.li>
            ))}
          </ul>

          {/* TITRE — apparition tardive comme un fondu de générique */}
          <h1 className="font-display font-bold uppercase leading-[0.82] tracking-[-0.025em]">
            <MaskWord
              text={t.titleFirst}
              delay={2.2}
              className="text-[15vw] sm:text-[12vw] lg:text-[10.5vw]"
            />
            <MaskWord
              text={t.titleLast}
              delay={2.4}
              className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-[15vw] text-transparent sm:text-[12vw] lg:text-[10.5vw]"
            />
          </h1>

          {/* Tagline + meta + stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="max-w-md">
              <p className="font-editorial text-xl italic leading-snug text-white/85 sm:text-2xl">
                {t.subtitleSport}.{' '}
                <span className="text-white">{t.subtitleProject}.</span>
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em]">
                <a
                  href="#numbers"
                  className="border-b-2 border-white pb-1 text-white transition-colors hover:border-flame-400 hover:text-flame-300"
                >
                  {t.ctaSecondary} ↓
                </a>
                <a
                  href="#partenariat"
                  className="border-b-2 border-flame-500 pb-1 text-flame-400 transition-colors hover:text-flame-300"
                >
                  {t.ctaPrimary} →
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 sm:justify-end">
              <StatInline label="Itra" value={565} />
              <StatInline label="Utmb" value={568} />
              <StatInline label="Cat." raw="1ʳᵉ" highlight />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function CornerBracket({ position }) {
  const map = {
    'top-left': 'left-3 top-[calc(8svh+0.75rem)] sm:left-5',
    'top-right': 'right-3 top-[calc(8svh+0.75rem)] rotate-90 sm:right-5',
    'bottom-left': 'left-3 bottom-[calc(8svh+0.75rem)] -rotate-90 sm:left-5',
    'bottom-right': 'right-3 bottom-[calc(8svh+0.75rem)] rotate-180 sm:right-5',
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute h-6 w-6 text-white/50 ${map[position]}`}
    >
      <path
        d="M2 8 V2 H8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function StatInline({ label, value, raw, highlight = false }) {
  return (
    <div className="flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
      <span>{label}</span>
      <span
        className={`font-display text-2xl font-bold tracking-tight sm:text-3xl ${
          highlight ? 'text-flame-400' : 'text-white'
        }`}
      >
        {raw ?? <AnimatedCounter to={value} duration={2} />}
      </span>
    </div>
  );
}
