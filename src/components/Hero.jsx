import { motion } from 'framer-motion';
import { useT } from '../i18n/useT.js';

const HERO_IMAGE = '/Maxi2025-1.jpg';

export default function Hero() {
  const t = useT('hero');
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-mesh-warm pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      {/* Blobs flottants vifs en arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-flame-300/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-electric-300/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-solar-300/30 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        {/* Bloc texte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-flame-300/50 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-flame-700 backdrop-blur-md">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-flame-500" />
            {t.eyebrow}
          </div>

          <h1 className="mt-6 font-display text-6xl font-bold uppercase leading-[0.88] tracking-tight text-mountain-950 sm:text-7xl lg:text-[7.5rem]">
            {t.titleFirst}
            <br />
            <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
              {t.titleLast}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg font-light text-mountain-700">
            {t.subtitleSport}
            <span className="mx-3 inline-block h-1 w-1 rounded-full bg-flame-500 align-middle" />
            <span className="font-medium uppercase tracking-[0.12em] text-mountain-950">
              {t.subtitleProject}
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
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

          {/* Tags signalétiques */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
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

        {/* Panneau photo */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-[22rem] lg:col-span-5 lg:max-w-sm"
        >
          {/* Cadre orange contenant la photo */}
          <div className="rounded-3xl border-2 border-flame-500 p-2 shadow-2xl shadow-mountain-900/20">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-mountain-950">
              {/* Fallback dégradé pendant le chargement */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-mountain-700 via-mountain-900 to-flame-900"
              />

              {/* Photo */}
              <img
                src={HERO_IMAGE}
                alt={t.photoAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />

              {/* Calque glassmorphism / vignette */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-mountain-950/70 via-mountain-950/10 to-transparent"
              />

              {/* Bandeau bas avec stats */}
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
                      565
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.07] px-2.5 py-2 backdrop-blur-md">
                    <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-electric-300/90">
                      UTMB
                    </p>
                    <p className="mt-0.5 font-display text-lg font-semibold text-white">
                      568
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
          </div>
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
