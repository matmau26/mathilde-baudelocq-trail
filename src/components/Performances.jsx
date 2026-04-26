const KPIS = [
  {
    eyebrow: 'Performance de référence',
    metric: 'TOP',
    value: '9',
    suffix: 'e',
    context: '20K · Grand Raid du Ventoux',
    tag: 'Au contact du peloton Élite',
    progress: 82,
    progressLabel: 'Niveau Élite',
  },
  {
    eyebrow: 'Cote ITRA',
    metric: '',
    value: '565',
    suffix: 'pts',
    context: 'International Trail Running Association',
    tag: 'Indice global de performance',
    progress: 72,
    progressLabel: 'Référence internationale',
  },
  {
    eyebrow: 'UTMB Index',
    metric: '',
    value: '545',
    suffix: 'pts',
    context: 'UTMB World Series · Trail',
    tag: 'Indice de référence trail',
    progress: 68,
    progressLabel: 'Performances qualifiantes',
  },
];

export default function Performances() {
  return (
    <section
      id="kpi"
      className="relative scroll-mt-20 overflow-hidden bg-mountain-950 py-24 text-white sm:py-32"
    >
      {/* Trame technique de fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Halo discret */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-mountain-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Barre supérieure : style HUD */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-mountain-300">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-mountain-400" />
            <span>Performance Dashboard</span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <span>Saison 2025–26</span>
            <span>Live Data</span>
          </div>
          <span className="text-mountain-400 sm:hidden">2025–26</span>
        </div>

        {/* En-tête section */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mountain-300">
              01 — Key Metrics
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Trajectoire
              <br />
              <span className="text-mountain-300">Élite.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-200">
            Trois indicateurs majeurs qui structurent la saison. Suivi
            analytique, progression mesurée, objectifs Élite à l’horizon.
          </p>
        </div>

        {/* Grille KPI */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {KPIS.map((kpi, idx) => (
            <article
              key={kpi.eyebrow}
              className="group relative bg-mountain-950 p-8 transition-colors hover:bg-mountain-900 sm:p-10"
            >
              {/* Numéro KPI en filigrane */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-6 font-display text-2xl font-bold text-white/10"
              >
                {String(idx + 1).padStart(2, '0')}
              </span>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-mountain-300">
                {kpi.eyebrow}
              </p>

              {/* Chiffre massif */}
              <div className="mt-6 flex items-baseline gap-2">
                {kpi.metric && (
                  <span className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-mountain-300 sm:text-5xl">
                    {kpi.metric}
                  </span>
                )}
                <span className="font-display text-7xl font-bold leading-none tracking-tighter text-white sm:text-8xl">
                  {kpi.value}
                </span>
                <span className="font-display text-2xl font-semibold uppercase tracking-widest text-mountain-300 sm:text-3xl">
                  {kpi.suffix}
                </span>
              </div>

              {/* Contexte */}
              <p className="mt-5 text-sm font-semibold text-white">
                {kpi.context}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-mountain-300">
                {kpi.tag}
              </p>

              {/* Barre de progression style data-vis */}
              <div className="mt-8">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-mountain-300">
                  <span>{kpi.progressLabel}</span>
                  <span>{kpi.progress}%</span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full origin-left rounded-full bg-gradient-to-r from-mountain-400 to-white transition-all duration-700 group-hover:scale-x-105"
                    style={{ width: `${kpi.progress}%` }}
                  />
                </div>
              </div>

              {/* Ligne accent en bas qui s'étend au hover */}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-mountain-300 to-white transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        {/* Pied de section : tickers */}
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {[
            { label: 'Discipline', value: 'Trail Running' },
            { label: 'Distance phare', value: '20–84 km' },
            { label: 'Niveau actuel', value: 'National' },
            { label: 'Objectif 2026', value: 'Statut Élite' },
          ].map((item) => (
            <div key={item.label} className="bg-mountain-950 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-mountain-300">
                {item.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold uppercase tracking-wide text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
