import { motion } from 'framer-motion';

const HERO_IMAGE = '/Maxi2025-1.jpg';

export default function Hero() {
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

      {/* Trame technique fine sur le mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0f1c29 1px, transparent 1px), linear-gradient(to bottom, #0f1c29 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        {/* Bloc texte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-flame-300/60 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-flame-700 backdrop-blur-md">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-flame-500" />
            Media Kit · Saison 2026
          </div>

          <h1 className="mt-6 font-display text-6xl font-bold uppercase leading-[0.88] tracking-tight text-mountain-950 sm:text-7xl lg:text-[7.5rem]">
            Mathilde
            <br />
            <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
              Baudelocq
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl font-light text-mountain-700">
            Athlète Trail Running
            <span className="mx-3 inline-block h-1 w-1 rounded-full bg-flame-500 align-middle" />
            <span className="font-bold uppercase tracking-wide text-mountain-950">
              Trajectoire Élite
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
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-flame-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-flame-500/30 transition-all hover:bg-flame-600 hover:shadow-xl hover:shadow-flame-500/40"
            >
              <span className="relative z-10">Découvrir le partenariat</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="#kpi"
              className="inline-flex items-center gap-2 rounded-full border-2 border-mountain-950 bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-mountain-950 transition-colors hover:bg-mountain-950 hover:text-white"
            >
              Voir les performances
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
            <span className="inline-flex items-center gap-2 rounded-full border border-mountain-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-mountain-900 backdrop-blur-md">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-electric-500" />
              26 — Montélimar
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-mountain-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-flame-400" />
              Projet 2026 · Statut Élite
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
                alt="Mathilde Baudelocq, athlète trail running, en course"
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
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                <span>Snapshot</span>
                <span>2025–26</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 backdrop-blur-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-flame-300">
                    ITRA
                  </p>
                  <p className="mt-0.5 font-display text-xl font-bold text-white">
                    565
                  </p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 backdrop-blur-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-electric-300">
                    UTMB
                  </p>
                  <p className="mt-0.5 font-display text-xl font-bold text-white">
                    545
                  </p>
                </div>
                <div className="rounded-xl border border-flame-400/50 bg-flame-500/20 p-2.5 backdrop-blur-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-flame-200">
                    GRV
                  </p>
                  <p className="mt-0.5 font-display text-xl font-bold text-white">
                    Top 3%
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
        href="#kpi"
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
