import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter.jsx';
import { useT } from '../../i18n/useT.js';

const HERO_IMAGE = '/Maxi2025-1.jpg';
const HERO_VIDEO =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto:good,f_auto,w_1400,vc_h264/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.mp4';

const titleVariants = {
  hidden: { y: '120%' },
  visible: {
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

function MaskWord({ text, className = '', delay = 0 }) {
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

export default function Cover() {
  const t = useT('hero');
  const a = useT('athlete');
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-cream-50 text-mountain-950"
    >
      {/* Grain léger sur tout le hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Top meta strip — magazine masthead */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-6 pt-24 text-[10px] font-medium uppercase tracking-[0.3em] text-mountain-700 sm:pt-28 lg:px-12"
      >
        <span className="hidden sm:inline">Media Kit · Issue 01</span>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-mountain-300 sm:block" />
        <span className="font-mono tracking-[0.2em]">26 · 04 · 2026</span>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-mountain-300 sm:block" />
        <span className="hidden sm:inline">FR · Drôme</span>
      </motion.div>

      {/* ZONE PRINCIPALE — split éditorial : type à gauche, photo à droite */}
      <div className="relative grid min-h-[100svh] grid-cols-1 lg:grid-cols-12">
        {/* COLONNE GAUCHE — typographie poster */}
        <motion.div
          style={{ y: titleY, opacity: fade }}
          className="relative z-10 flex flex-col justify-center px-6 pb-20 pt-40 sm:pt-44 lg:col-span-7 lg:px-12 lg:pb-12 lg:pt-32"
        >
          {/* Eyebrow numéroté */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-flame-600"
          >
            <span className="font-mono">N°01</span>
            <span aria-hidden="true" className="block h-px w-12 bg-flame-500" />
            <span>Athlète</span>
          </motion.div>

          {/* TITRE TYPOGRAPHIQUE — Mathilde / Baudelocq comme un cover */}
          <h1 className="font-display font-bold uppercase leading-[0.82] tracking-[-0.02em] text-mountain-950">
            <MaskWord
              text={t.titleFirst}
              delay={0.35}
              className="text-[16vw] sm:text-[12vw] lg:text-[9.5vw]"
            />
            <MaskWord
              text={t.titleLast}
              delay={0.5}
              className="text-stroke-flame text-[16vw] sm:text-[12vw] lg:text-[9.5vw]"
            />
          </h1>

          {/* Sub italique éditorial */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 max-w-md font-editorial text-2xl italic leading-tight text-mountain-700 sm:text-3xl"
          >
            {t.subtitleSport}.{' '}
            <span className="text-mountain-950">{t.subtitleProject}.</span>
          </motion.p>

          {/* CTA discrets, format magazine */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
          >
            <a
              href="#numbers"
              className="group inline-flex items-center gap-2 border-b-2 border-mountain-950 pb-1 text-mountain-950 transition-colors hover:border-flame-500 hover:text-flame-600"
            >
              {t.ctaSecondary}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                ↓
              </span>
            </a>
            <a
              href="#partenariat"
              className="group inline-flex items-center gap-2 border-b-2 border-flame-500 pb-1 text-flame-600 transition-colors hover:text-flame-700"
            >
              {t.ctaPrimary}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* COLONNE DROITE — portrait éditorial avec vidéo en course par-dessus */}
        <div className="relative lg:col-span-5">
          <motion.div
            style={{ scale: photoScale, y: photoY }}
            className="absolute inset-0 will-change-transform"
          >
            {/* Photo statique (poster) */}
            <img
              src={HERO_IMAGE}
              alt={t.photoAlt}
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Voile cream sur les bords pour fondre dans la page */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream-50/80"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream-50 via-cream-50/40 to-transparent"
            />
          </motion.div>

          {/* Petit polaroid vidéo flottant — Mathilde en course */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-10 left-6 z-10 w-36 origin-bottom-left rotate-[-4deg] rounded-sm bg-white p-2 shadow-2xl shadow-mountain-900/30 sm:bottom-16 sm:left-10 sm:w-44 lg:bottom-20 lg:left-[-4rem] lg:w-52"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-mountain-900">
              <video
                ref={videoRef}
                src={HERO_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onCanPlay={() => setVideoReady(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  videoReady ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden="true"
              />
              {!videoReady && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-mountain-700 to-mountain-950"
                />
              )}
              <span className="absolute bottom-2 left-2 rounded-sm bg-white/90 px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-mountain-950">
                ● Live
              </span>
            </div>
            <p className="mt-2 px-1 font-editorial text-[10px] italic leading-tight text-mountain-700">
              GR Ventoux 2026 — en course
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bandeau bas — stats inline éditoriales */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-mountain-950/15 bg-cream-50/80 px-6 py-4 backdrop-blur-md lg:px-12"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div className="flex items-baseline gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-mountain-700">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-flame-500" />
            <span>Saison</span>
            <span className="font-display text-base font-bold text-mountain-950">2025—26</span>
          </div>
          <StatInline label="Itra" value={565} />
          <StatInline label="Utmb" value={568} />
          <StatInline label="GR Ventoux" raw={t.grvBadge} />
          <StatInline label="Catégorie" raw="1ʳᵉ" highlight />
        </div>
      </motion.div>
    </section>
  );
}

function StatInline({ label, value, raw, highlight = false }) {
  return (
    <div className="flex items-baseline gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-mountain-700">
      <span>{label}</span>
      <span
        className={`font-display text-2xl font-bold ${
          highlight ? 'text-flame-600' : 'text-mountain-950'
        } sm:text-3xl`}
      >
        {raw ?? <AnimatedCounter to={value} duration={2} />}
      </span>
    </div>
  );
}
