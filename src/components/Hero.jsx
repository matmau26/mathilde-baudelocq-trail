import { motion } from 'framer-motion';

const HERO_VIDEO = '/hero.mp4';
const HERO_POSTER = '/hero-poster.jpg';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-mountain-950 pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Vidéo plein écran en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={HERO_POSTER}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Fallback : dégradé sombre sportif en cas d'absence de vidéo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-br from-mountain-900 via-mountain-950 to-black"
      />

      {/* Calque glassmorphism : assombrissement + flou pour lisibilité */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-mountain-950/55 backdrop-blur-[3px]"
      />

      {/* Vignettes haut/bas pour focus central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-mountain-950/60 via-transparent to-mountain-950/80"
      />

      {/* Trame technique fine */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        {/* Bloc texte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mountain-300" />
            Media Kit · Saison 2026
          </div>

          <h1 className="mt-6 font-display text-6xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Mathilde
            <br />
            <span className="bg-gradient-to-r from-white via-mountain-200 to-mountain-400 bg-clip-text text-transparent">
              Baudelocq
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl font-light text-mountain-100">
            Athlète Trail Running
            <span className="mx-3 inline-block h-1 w-1 rounded-full bg-mountain-300 align-middle" />
            <span className="font-semibold text-white">Trajectoire Élite</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#partenariat"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-mountain-950 shadow-lg shadow-black/20 transition-all hover:bg-mountain-100"
            >
              Découvrir le projet de partenariat
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>

            <a
              href="#kpi"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-colors hover:bg-white/10"
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mountain-300" />
              26 — Montélimar
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-mountain-950">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mountain-700" />
              Projet 2026 · Statut Élite
            </span>
          </motion.div>
        </motion.div>

        {/* Carte info "live" type HUD */}
        <motion.aside
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="hidden lg:col-span-4 lg:block"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-mountain-200">
                Snapshot
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live
              </span>
            </div>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-300">
                  Cote ITRA
                </dt>
                <dd className="mt-1 font-display text-4xl font-bold tracking-tighter text-white">
                  565
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-300">
                  UTMB Index
                </dt>
                <dd className="mt-1 font-display text-4xl font-bold tracking-tighter text-white">
                  545
                </dd>
              </div>
              <div className="border-t border-white/10 pt-4">
                <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-300">
                  Dernière référence
                </dt>
                <dd className="mt-1 text-sm font-semibold text-white">
                  Top 4 % féminin · GR Ventoux
                </dd>
              </div>
            </dl>
          </div>
        </motion.aside>
      </div>

      {/* Indicateur scroll */}
      <a
        href="#kpi"
        aria-label="Faire défiler vers les performances"
        className="absolute left-1/2 bottom-6 hidden -translate-x-1/2 flex-col items-center gap-2 text-mountain-200 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Défiler</span>
        <span className="block h-8 w-px bg-mountain-300/60 animate-bounce-slow" />
      </a>
    </section>
  );
}
