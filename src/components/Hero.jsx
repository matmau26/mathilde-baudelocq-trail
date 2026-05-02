import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter.jsx';
import { useT } from '../i18n/useT.js';

const HERO_VIDEO =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto:good,f_auto,w_1600,vc_h264/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.mp4';
const HERO_POSTER =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto:good,f_jpg,w_1600/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.jpg';
const FALLBACK_IMAGE = '/Maxi2025-1.jpg';

const titleContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.4 },
  },
};

const charVariant = {
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

function SplitWord({ text, className = '', accent = false }) {
  return (
    <motion.span
      variants={titleContainer}
      initial="hidden"
      animate="visible"
      aria-label={text}
      className={`inline-flex overflow-hidden ${className}`}
    >
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          variants={charVariant}
          aria-hidden="true"
          className={`inline-block ${
            accent
              ? 'bg-gradient-to-b from-flame-300 via-flame-400 to-solar-400 bg-clip-text text-transparent'
              : 'text-white'
          }`}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const t = useT('hero');
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  // Force la lecture sur iOS Safari (il ignore parfois autoPlay)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute('muted', '');
    v.play().catch(() => {});
  }, []);

  // Parallax content + zoom léger de la vidéo au scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-mountain-950 text-white"
    >
      {/* VIDÉO PLEIN ÉCRAN — Mathilde en course */}
      <motion.div
        style={{ scale: videoScale, y: videoY }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <img
          src={FALLBACK_IMAGE}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      </motion.div>

      {/* OVERLAY GRADIENT pour lisibilité du texte */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-mountain-950/70 via-mountain-950/40 to-mountain-950/95"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-mountain-950 via-transparent to-transparent"
      />
      {/* Touche flame en bas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-flame-500/30 blur-[120px]"
      />

      {/* CONTENU PRINCIPAL */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-32 sm:pt-36 lg:px-12"
      >
        {/* Top strip — meta */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-[11px]"
        >
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-flame-500" />
            {t.eyebrow}
          </span>
          <span className="hidden sm:inline">{t.snapshotPeriod}</span>
        </motion.div>

        {/* Titre central plein cadre */}
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center">
          <div className="w-full">
            <h1 className="font-display text-[18vw] font-bold uppercase leading-[0.85] tracking-[-0.02em] sm:text-[14vw] lg:text-[12vw]">
              <SplitWord text={t.titleFirst} className="block" />
              <SplitWord text={t.titleLast} className="block" accent />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mt-6 max-w-xl text-base font-light text-white/80 sm:text-lg"
            >
              {t.subtitleSport}
              <span className="mx-3 inline-block h-1 w-1 rounded-full bg-flame-500 align-middle" />
              <span className="font-medium uppercase tracking-[0.12em] text-white">
                {t.subtitleProject}
              </span>
            </motion.p>
          </div>
        </div>

        {/* Bottom HUD : CTAs + stats card flottante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto w-full max-w-7xl"
        >
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-8">
            {/* CTAs + tags */}
            <div className="space-y-5 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-electric-400" />
                  {t.tagCity}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mountain-950">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-flame-500" />
                  {t.tagProject}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#partenariat"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-flame-500 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-flame-500/40 transition-all hover:bg-flame-600"
                >
                  <span className="relative z-10">{t.ctaPrimary}</span>
                  <svg
                    className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="#athlete"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white/15"
                >
                  {t.ctaSecondary}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Card stats glassmorphism */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-2xl sm:p-5">
                <div className="mb-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                  <span>{t.snapshot}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <StatBlock label="ITRA" value={565} accent="text-flame-300" />
                  <StatBlock label="UTMB" value={568} accent="text-electric-300" />
                  <StatBlock label="GRV" raw={t.grvBadge} accent="text-solar-300" highlight />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#athlete"
        aria-label="Faire défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute right-6 bottom-6 hidden flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white sm:flex"
      >
        <span className="block h-10 w-px overflow-hidden bg-white/20">
          <span className="block h-full w-full animate-bounce-slow bg-gradient-to-b from-flame-500 to-transparent" />
        </span>
        Scroll
      </motion.a>
    </section>
  );
}

function StatBlock({ label, value, raw, accent, highlight = false }) {
  return (
    <div
      className={`rounded-xl border ${
        highlight
          ? 'border-flame-400/40 bg-flame-500/10'
          : 'border-white/10 bg-white/[0.05]'
      } px-2.5 py-2.5 backdrop-blur-md`}
    >
      <p className={`text-[9px] font-medium uppercase tracking-[0.18em] ${accent}`}>
        {label}
      </p>
      <p className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
        {raw ?? <AnimatedCounter to={value} duration={2} />}
      </p>
    </div>
  );
}
