export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-mountain-50 via-white to-white pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Décor : silhouette de montagnes en SVG */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full text-mountain-100"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,197.3C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L0,320Z"
        />
      </svg>

      {/* Grain léger pour effet sportif */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #1f3144 1px, transparent 1px), radial-gradient(circle at 75% 75%, #1f3144 1px, transparent 1px)',
          backgroundSize: '36px 36px, 36px 36px',
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        {/* Bloc texte */}
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-mountain-200 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-widest text-mountain-600 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mountain-500" />
            Media Kit · Saison 2026
          </div>

          <h1 className="mt-6 font-extrabold tracking-tight text-mountain-950 text-5xl sm:text-6xl lg:text-7xl">
            Mathilde
            <br />
            <span className="bg-gradient-to-r from-mountain-700 via-mountain-500 to-mountain-400 bg-clip-text text-transparent">
              Baudelocq
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl font-light text-mountain-700">
            Athlète Trail Running
            <span className="mx-3 inline-block h-1 w-1 rounded-full bg-mountain-400 align-middle" />
            <span className="font-medium text-mountain-900">
              Trajectoire Élite
            </span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#partenariat"
              className="group inline-flex items-center gap-3 rounded-full bg-mountain-700 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-mountain-700/20 hover:bg-mountain-800 hover:shadow-xl hover:shadow-mountain-700/30 transition-all"
            >
              Découvrir le projet de partenariat
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>

            <a
              href="#kpi"
              className="inline-flex items-center gap-2 text-sm font-medium text-mountain-700 hover:text-mountain-900 transition-colors"
            >
              Voir les performances
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Tags signalétiques */}
          <div className="mt-14 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-mountain-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-mountain-800">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mountain-500" />
              26 — Montélimar
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-mountain-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              Projet 2026 · Statut Élite
            </span>
          </div>
        </div>

        {/* Bloc visuel — placeholder stylisé */}
        <div className="relative lg:col-span-5 animate-fade-up [animation-delay:200ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-mountain-200 bg-gradient-to-br from-mountain-100 via-mountain-50 to-white shadow-2xl shadow-mountain-900/10">
            {/* Icône sportive centrée */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-24 w-24 text-mountain-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 20l4-6 4 4 5-9 5 11" />
                <circle cx="14" cy="5" r="1.5" />
              </svg>
            </div>

            {/* Étiquette en bas */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/80 px-4 py-3 backdrop-blur-md ring-1 ring-mountain-100">
              <p className="text-[10px] uppercase tracking-widest text-mountain-500">
                Photo officielle
              </p>
              <p className="text-sm font-semibold text-mountain-900">
                Trail · Saison 2025
              </p>
            </div>

            {/* Coin décoratif */}
            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-mountain-700/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              Live
            </div>
          </div>

          {/* Mini badge flottant */}
          <div className="absolute -left-4 bottom-10 hidden rounded-2xl border border-mountain-100 bg-white px-4 py-3 shadow-xl shadow-mountain-900/10 sm:block">
            <p className="text-[10px] uppercase tracking-widest text-mountain-500">
              Objectif
            </p>
            <p className="text-sm font-bold text-mountain-900">Statut Élite</p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <a
        href="#kpi"
        aria-label="Faire défiler vers les performances"
        className="absolute left-1/2 bottom-6 hidden -translate-x-1/2 flex-col items-center gap-2 text-mountain-500 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-widest">Défiler</span>
        <span className="block h-8 w-px bg-mountain-300 animate-bounce-slow" />
      </a>
    </section>
  );
}
