import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const KPIS = [
  {
    eyebrow: 'Performance de référence',
    metric: 'TOP',
    value: '4',
    suffix: '%',
    context: '28 km · Grand Raid du Ventoux',
    tag: '12ᵉ femme · 112ᵉ scratch',
    accent: 'flame',
  },
  {
    eyebrow: 'Cote ITRA',
    metric: '',
    value: '565',
    suffix: 'pts',
    context: 'International Trail Running Association',
    tag: 'Indice global de performance',
    accent: 'electric',
  },
  {
    eyebrow: 'UTMB Index',
    metric: '',
    value: '545',
    suffix: 'pts',
    context: 'UTMB World Series · Trail',
    tag: 'Indice de référence trail',
    accent: 'solar',
  },
];

const ACCENT_TOKENS = {
  flame: {
    eyebrow: 'text-flame-600',
    valueGradient: 'from-flame-600 via-flame-500 to-solar-400',
    metric: 'text-flame-500',
    bar: 'from-flame-500 to-solar-400',
    tag: 'bg-flame-50 text-flame-700 ring-flame-200',
    indexBg: 'bg-flame-100 text-flame-700',
  },
  electric: {
    eyebrow: 'text-electric-600',
    valueGradient: 'from-electric-700 via-electric-500 to-electric-300',
    metric: 'text-electric-500',
    bar: 'from-electric-600 to-electric-300',
    tag: 'bg-electric-50 text-electric-700 ring-electric-200',
    indexBg: 'bg-electric-100 text-electric-700',
  },
  solar: {
    eyebrow: 'text-solar-500',
    valueGradient: 'from-solar-500 via-flame-400 to-flame-600',
    metric: 'text-solar-500',
    bar: 'from-solar-400 to-flame-500',
    tag: 'bg-solar-200/50 text-mountain-900 ring-solar-300',
    indexBg: 'bg-solar-200/60 text-mountain-900',
  },
};

export default function Performances() {
  return (
    <section
      id="kpi"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-cool py-24 sm:py-32"
    >
      {/* Blobs colorés */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-flame-300/35 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-[26rem] w-[26rem] rounded-full bg-electric-300/30 blur-[110px]"
      />

      {/* Trame technique de fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0f1c29 1px, transparent 1px), linear-gradient(to bottom, #0f1c29 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Barre supérieure : style HUD */}
        <div className="flex items-center justify-between border-b-2 border-mountain-950 pb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-700">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-flame-500" />
            <span>Performance Dashboard</span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <span>Saison 2025–26</span>
            <span className="text-flame-600">Live Data</span>
          </div>
          <span className="sm:hidden">2025–26</span>
        </div>

        {/* En-tête section */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-flame-600">
              01 — Key Metrics
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-6xl lg:text-7xl">
              Trajectoire
              <br />
              <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
                Élite.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            Trois indicateurs majeurs qui structurent la saison. Suivi
            analytique, progression mesurée, objectifs Élite à l’horizon.
          </p>
        </div>

        {/* Grille KPI */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {KPIS.map((kpi, idx) => {
            const a = ACCENT_TOKENS[kpi.accent];
            return (
              <motion.article
                key={kpi.eyebrow}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border-2 border-mountain-950 bg-white p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-mountain-900/10 sm:p-9"
              >
                {/* Numéro KPI en filigrane */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute right-5 top-5 inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 font-display text-xs font-bold ${a.indexBg}`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.25em] ${a.eyebrow}`}
                >
                  {kpi.eyebrow}
                </p>

                {/* Chiffre massif */}
                <div className="mt-6 flex items-baseline gap-2">
                  {kpi.metric && (
                    <span
                      className={`font-display text-4xl font-bold uppercase leading-none tracking-tight ${a.metric} sm:text-5xl`}
                    >
                      {kpi.metric}
                    </span>
                  )}
                  <span
                    className={`bg-gradient-to-br ${a.valueGradient} bg-clip-text font-display text-7xl font-bold leading-none tracking-tighter text-transparent sm:text-8xl`}
                  >
                    {kpi.value}
                  </span>
                  <span className="font-display text-2xl font-semibold uppercase tracking-widest text-mountain-500 sm:text-3xl">
                    {kpi.suffix}
                  </span>
                </div>

                {/* Contexte */}
                <p className="mt-5 text-sm font-bold text-mountain-950">
                  {kpi.context}
                </p>
                <p
                  className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ring-1 ring-inset ${a.tag}`}
                >
                  {kpi.tag}
                </p>

                {/* Barre accent en bas */}
                <span
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${a.bar} transition-transform duration-500 group-hover:scale-x-100`}
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Pied de section : tickers */}
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 sm:grid-cols-4">
          {[
            { label: 'Discipline', value: 'Trail Running', accent: 'text-mountain-200' },
            { label: 'Distance phare', value: '20–84 km', accent: 'text-electric-300' },
            { label: 'Niveau actuel', value: 'National', accent: 'text-mountain-200' },
            { label: 'Objectif 2026', value: 'Statut Élite', accent: 'text-flame-300' },
          ].map((item) => (
            <div key={item.label} className="bg-mountain-950 px-5 py-4">
              <p className={`text-[10px] font-bold uppercase tracking-widest ${item.accent}`}>
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
