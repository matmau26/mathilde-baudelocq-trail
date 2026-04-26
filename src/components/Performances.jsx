const INDEX_CARDS = [
  {
    label: 'Cote ITRA',
    value: '—',
    unit: 'pts',
    description:
      'Indice International Trail Running Association. Reflète le niveau de performance global.',
    accent: 'from-mountain-600 to-mountain-400',
  },
  {
    label: 'UTMB Index',
    value: '—',
    unit: 'pts',
    description:
      'Indice de référence de l’écosystème UTMB World Series, basé sur les performances en course.',
    accent: 'from-mountain-700 to-mountain-500',
  },
];

const KPIS = [
  { label: 'Distance phare', value: '20 km' },
  { label: 'Dénivelé', value: 'D+ 1100m' },
  { label: 'Niveau', value: 'National' },
  { label: 'Tendance', value: 'En progression' },
];

export default function Performances() {
  return (
    <section
      id="performances"
      className="relative scroll-mt-20 bg-mountain-50/40 py-24 sm:py-32"
    >
      {/* Trame de fond légère */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1f3144 1px, transparent 1px), linear-gradient(to bottom, #1f3144 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* En-tête */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-mountain-500">
              02 — Performances & Data
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-mountain-950 sm:text-5xl">
              Les chiffres,
              <br />
              <span className="text-mountain-600">la trajectoire.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            Un suivi structuré et analytique des performances. Indices
            internationaux, courses majeures et progression mesurée saison après
            saison.
          </p>
        </div>

        {/* Highlight perf récente */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-mountain-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative bg-gradient-to-br from-mountain-700 via-mountain-600 to-mountain-500 p-8 text-white lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-mountain-100">
                Performance récente
              </p>
              <p className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Top classement
              </p>
              <p className="mt-2 text-base text-mountain-100">
                20K du Grand Raid du Ventoux (GRV)
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                Au contact des Élites
              </div>

              {/* Décor */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 -right-2 h-40 w-40 text-white/10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 20l4-6 4 4 5-9 5 11" />
                <circle cx="14" cy="5" r="1.5" />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-px bg-mountain-100 lg:col-span-7">
              {KPIS.map((kpi) => (
                <div
                  key={kpi.label}
                  className="flex flex-col justify-between bg-white p-6 transition-colors hover:bg-mountain-50"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-mountain-500">
                    {kpi.label}
                  </p>
                  <p className="mt-4 text-xl font-bold text-mountain-900 sm:text-2xl">
                    {kpi.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Encarts ITRA & UTMB */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {INDEX_CARDS.map((card) => (
            <article
              key={card.label}
              className="group relative overflow-hidden rounded-3xl border border-mountain-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-mountain-300 hover:shadow-xl hover:shadow-mountain-900/5"
            >
              {/* Barre d'accent au hover */}
              <span
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${card.accent} transition-transform duration-500 group-hover:scale-x-100`}
              />

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-mountain-500">
                    Indice
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-mountain-900">
                    {card.label}
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mountain-50 text-mountain-600 transition-colors group-hover:bg-mountain-600 group-hover:text-white">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="14 7 21 7 21 14" />
                  </svg>
                </div>
              </div>

              {/* Valeur */}
              <div className="mt-8 flex items-baseline gap-2">
                <span
                  className={`bg-gradient-to-r ${card.accent} bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl`}
                >
                  {card.value}
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-mountain-500">
                  {card.unit}
                </span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-mountain-700">
                {card.description}
              </p>

              {/* Footer carte */}
              <div className="mt-8 flex items-center justify-between border-t border-mountain-100 pt-4">
                <span className="text-[10px] uppercase tracking-widest text-mountain-400">
                  Mise à jour saison 2026
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-mountain-600 transition-colors group-hover:text-mountain-800">
                  En savoir plus
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
