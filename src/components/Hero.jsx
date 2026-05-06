import { motion } from 'framer-motion';
import { useT } from '../i18n/useT.js';
import Picture from './Picture.jsx';

const HERO_LOGO = '/logo/Logo_Full_Transparent.png';
const HERO_PORTRAIT = '/Mathilde.jpeg';
const HERO_RACE = '/Maxi2025-1.jpg';

export default function Hero() {
  const t = useT('hero');
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-mesh-warm pt-20 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
    >
      {/* Blobs flottants */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-flame-300/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-electric-300/30 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-12">
        {/* COLONNE GAUCHE — Marque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center lg:col-span-6 lg:text-left"
        >
          {/* Pill du media kit */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-mountain-800 shadow-sm ring-1 ring-mountain-100 backdrop-blur-md">
            {t.eyebrow}
          </span>

          {/* Logo (monogramme + wordmark MATHILDE BAUDELOCQ TRAIL ATHLETE) */}
          <Picture
            src={HERO_LOGO}
            alt={t.logoAlt}
            loading="eager"
            fetchPriority="high"
            className="mx-auto mt-6 block w-80 sm:w-[24rem] lg:mx-0 lg:mt-8 lg:w-[34rem]"
          />

          {/* Headline TRAJECTOIRE [ÉLITE] · SAISON 2026 */}
          <h1 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-mountain-950 sm:text-3xl lg:text-[2rem] lg:leading-[1.05]">
            <span>{t.traceLine1}</span>
            <span className="ml-2 bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent sm:ml-3">
              {t.traceLine2}
            </span>
            <span className="mt-1.5 block text-sm font-semibold tracking-[0.18em] text-mountain-500 sm:text-base lg:ml-3 lg:mt-0 lg:inline">
              <span className="hidden lg:inline">·{' '}</span>
              {t.season}
            </span>
          </h1>

          {/* CTAs — pleine largeur en mobile, en ligne en desktop */}
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
            <a
              href="#partenariat"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-flame-500 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-flame-500/30 transition-all hover:bg-flame-600 hover:shadow-xl hover:shadow-flame-500/40"
            >
              {t.ctaPrimary}
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#resultats"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-mountain-300 bg-transparent px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-mountain-800 transition-colors hover:border-mountain-950 hover:text-mountain-950"
            >
              {t.ctaSecondary}
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* COLONNE DROITE — composition à 2 photos */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:col-span-6 lg:mx-0 lg:max-w-none"
        >
          {/* Grande photo de course */}
          <figure className="relative ml-auto w-[80%] overflow-hidden rounded-3xl bg-mountain-100 shadow-2xl shadow-mountain-900/25 ring-1 ring-mountain-900/5">
            <div className="aspect-[3/4] w-full">
              <Picture
                src={HERO_RACE}
                alt={t.photoAlt}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>

          {/* Petite photo portrait — chevauche la grande en haut à gauche */}
          <figure className="absolute left-0 top-12 w-[40%] overflow-hidden rounded-2xl border-[6px] border-cream-50 bg-mountain-100 shadow-xl shadow-mountain-900/20 sm:top-14 sm:border-[7px] lg:top-16 lg:w-[42%]">
            <div className="aspect-[3/4] w-full">
              <Picture
                src={HERO_PORTRAIT}
                alt={t.portraitAlt}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        </motion.div>
      </div>

      {/* Indicateur scroll */}
      <a
        href="#athlete"
        aria-label={t.scrollAria}
        className="absolute left-1/2 bottom-6 hidden -translate-x-1/2 flex-col items-center gap-2 text-mountain-700 sm:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
          {t.scrollLabel}
        </span>
        <span className="block h-8 w-px bg-flame-500 animate-bounce-slow" />
      </a>
    </section>
  );
}
