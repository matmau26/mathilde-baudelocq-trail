import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import AnimatedCounter from './AnimatedCounter.jsx';
import { useT } from '../i18n/useT.js';

const HERO_IMAGE = '/Maxi2025-1.jpg';

// Variants pour la révélation char-par-char du titre
const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const charVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function SplitText({ text, className = '' }) {
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
          className="inline-block"
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
  const photoWrapperRef = useRef(null);

  // Parallax au scroll : la photo glisse plus lentement que le texte
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Tilt 3D mouse-follow sur le panneau photo (desktop only)
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (!photoWrapperRef.current) return;
    const rect = photoWrapperRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(px);
    tiltY.set(py);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-mesh-warm pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      {/* Blobs animés en arrière-plan */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-flame-300/40 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-electric-300/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-solar-300/30 blur-[100px]"
      />

      {/* Année en filigrane */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="pointer-events-none absolute -bottom-4 right-2 select-none font-display text-[16rem] font-bold leading-none tracking-tighter text-mountain-950 sm:-bottom-8 sm:right-4 sm:text-[22rem] lg:text-[28rem]"
      >
        2026
      </motion.span>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        {/* Bloc texte */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-flame-300/50 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-flame-700 backdrop-blur-md">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-flame-500" />
            {t.eyebrow}
          </div>

          <h1 className="mt-6 font-display text-6xl font-bold uppercase leading-[0.88] tracking-tight text-mountain-950 sm:text-7xl lg:text-[7.5rem]">
            <SplitText text={t.titleFirst} className="block" />
            <SplitText
              text={t.titleLast}
              className="block bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
            className="mt-6 max-w-xl text-base sm:text-lg font-light text-mountain-700"
          >
            {t.subtitleSport}
            <span className="mx-3 inline-block h-1 w-1 rounded-full bg-flame-500 align-middle" />
            <span className="font-medium uppercase tracking-[0.12em] text-mountain-950">
              {t.subtitleProject}
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#partenariat"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-flame-500 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-white shadow-md shadow-flame-500/20 transition-all hover:bg-flame-600 hover:shadow-lg hover:shadow-flame-500/30"
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
              className="inline-flex items-center gap-2 rounded-full border border-mountain-300 bg-transparent px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-mountain-700 transition-colors hover:border-mountain-950 hover:text-mountain-950"
            >
              {t.ctaSecondary}
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.85 }}
            className="mt-14 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-mountain-200 bg-white/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-mountain-800 backdrop-blur-md">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-electric-500" />
              {t.tagCity}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-mountain-950 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-flame-400" />
              {t.tagProject}
            </span>
          </motion.div>
        </motion.div>

        {/* Panneau photo : parallax + tilt 3D */}
        <motion.div
          ref={photoWrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
          style={{ perspective: 1200 }}
          className="relative mx-auto w-full max-w-[22rem] lg:col-span-5 lg:max-w-sm"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="rounded-3xl border-2 border-flame-500 p-2 shadow-2xl shadow-mountain-900/20"
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-mountain-950">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-mountain-700 via-mountain-900 to-flame-900"
              />
              <motion.img
                src={HERO_IMAGE}
                alt={t.photoAlt}
                style={{ y: photoY, scale: photoScale }}
                className="absolute inset-0 h-[115%] w-full object-cover will-change-transform"
                loading="eager"
                decoding="async"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-mountain-950/70 via-mountain-950/10 to-transparent"
              />

              {/* Bandeau bas avec compteurs animés */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-4">
                <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                  <span>{t.snapshot}</span>
                  <span>{t.snapshotPeriod}</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="rounded-lg border border-white/10 bg-white/[0.07] px-2.5 py-2 backdrop-blur-md">
                    <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-flame-300/90">
                      ITRA
                    </p>
                    <p className="mt-0.5 font-display text-lg font-semibold text-white">
                      <AnimatedCounter to={565} duration={1.8} />
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.07] px-2.5 py-2 backdrop-blur-md">
                    <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-electric-300/90">
                      UTMB
                    </p>
                    <p className="mt-0.5 font-display text-lg font-semibold text-white">
                      <AnimatedCounter to={568} duration={1.8} />
                    </p>
                  </div>
                  <div className="rounded-lg border border-flame-400/40 bg-flame-500/15 px-2.5 py-2 backdrop-blur-md">
                    <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-flame-200">
                      GRV
                    </p>
                    <p className="mt-0.5 font-display text-lg font-semibold text-white">
                      {t.grvBadge}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur scroll */}
      <a
        href="#athlete"
        aria-label="Faire défiler vers les performances"
        className="absolute left-1/2 bottom-6 hidden -translate-x-1/2 flex-col items-center gap-2 text-mountain-700 sm:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
          Défiler
        </span>
        <span className="block h-8 w-px bg-flame-500 animate-bounce-slow" />
      </a>
    </section>
  );
}
