import { motion } from 'framer-motion';
import { useT } from '../i18n/useT.js';

const FACT_ICONS = [
  <path d="M12 8v4l3 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />,
  (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  (
    <>
      <path d="M3 20l4-6 4 4 5-9 5 11" />
      <circle cx="14" cy="5" r="1.5" />
    </>
  ),
  (
    <>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </>
  ),
];

const KPI_META = [
  { accent: 'flame' },
  {
    accent: 'electric',
    logo: '/itra-logo.png',
    logoAlt: 'Logo officiel ITRA',
  },
  {
    accent: 'solar',
    logo: '/logo-utmb-index.png',
    logoAlt: 'Logo officiel UTMB Index',
  },
];

const TICKER_ACCENT = [
  'text-mountain-200',
  'text-electric-300',
  'text-mountain-200',
  'text-flame-300',
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

export default function Athlete() {
  const t = useT('athlete');
  const facts = t.facts.map((f, i) => ({ ...f, icon: FACT_ICONS[i] }));
  const kpis = t.kpis.map((k, i) => ({ ...k, ...KPI_META[i] }));
  return (
    <section
      id="athlete"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-cool py-24 sm:py-32"
    >
      {/* Blobs d'arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-flame-300/30 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-[26rem] w-[26rem] rounded-full bg-electric-300/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* En-tête section */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-600">
            {t.eyebrow}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            {t.kicker}
          </p>
        </div>

        {/* Grille principale 5/7 */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* COLONNE GAUCHE — Photo + description + chips */}
          <div className="order-1 lg:col-span-5">
            <figure className="overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 shadow-xl shadow-mountain-900/10">
              <div className="relative aspect-[3/4] w-full">
                <img
                  src="/Mathilde.jpeg"
                  alt={t.photoAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {/* Voiles de contraste */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-mountain-950/70 via-mountain-950/0 to-mountain-950/70"
                />

                {/* Titre superposé top-left */}
                <h2 className="absolute left-5 top-5 max-w-[85%] font-display text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-5xl">
                  {t.overlayLine1}
                  <br />
                  <span className="bg-gradient-to-r from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent drop-shadow">
                    {t.overlayLine2}
                  </span>
                </h2>

                {/* Légende bas */}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-flame-300">
                      {t.captionPortrait}
                    </p>
                    <p className="mt-1 font-display text-base font-bold uppercase tracking-wide text-white">
                      {t.captionName}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur">
                    {t.captionRegion}
                  </span>
                </figcaption>
              </div>
            </figure>

            <p className="mt-8 max-w-md text-base leading-relaxed text-mountain-700">
              {t.description.intro}{' '}
              <span className="font-semibold text-mountain-950">
                {t.description.valueSimplicite}
              </span>
              ,{' '}
              <span className="font-semibold text-mountain-950">
                {t.description.valueIntegrite}
              </span>{' '}
              {t.description.valueAnd}{' '}
              <span className="font-semibold text-mountain-950">
                {t.description.valueLoyaute}
              </span>
              {t.description.outro}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {t.values.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-mountain-200 bg-mountain-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mountain-700"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE DROITE — Faits + KPI dashboard */}
          <div className="order-2 lg:col-span-7">
            {/* Grille de faits */}
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <li
                  key={fact.label}
                  className="group relative overflow-hidden rounded-2xl border border-mountain-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-mountain-300 hover:shadow-lg hover:shadow-mountain-900/5"
                >
                  <div className="flex items-start justify-between">
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
                        {fact.icon}
                      </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-mountain-400">
                      {t.factTag}
                    </span>
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-widest text-mountain-500">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-mountain-900">
                    {fact.value}
                  </p>
                  <span className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-mountain-400 to-mountain-700 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
                </li>
              ))}
            </ul>

            {/* HUD bar Performance Dashboard */}
            <div className="mt-10 flex items-center justify-between border-b-2 border-mountain-950 pb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-700">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-flame-500" />
                <span>{t.dashboardLabel}</span>
              </div>
              <div className="hidden items-center gap-6 sm:flex">
                <span>{t.season}</span>
                <span className="text-flame-600">{t.liveData}</span>
              </div>
              <span className="sm:hidden">{t.snapshotPeriod || '2025–26'}</span>
            </div>

            {/* Titre Trajectoire Élite */}
            <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-5xl">
              {t.sectionTitle1}{' '}
              <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
                {t.sectionTitle2}
              </span>
            </h3>

            {/* Grille KPI */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={containerVariants}
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {kpis.map((kpi, idx) => {
                const a = ACCENT_TOKENS[kpi.accent];
                return (
                  <motion.article
                    key={kpi.eyebrow}
                    variants={cardVariants}
                    className="group relative overflow-hidden rounded-2xl border-2 border-mountain-950 bg-white p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-mountain-900/10"
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-3 top-3 inline-flex h-7 min-w-7 items-center justify-center rounded-md px-1.5 font-display text-[10px] font-bold ${a.indexBg}`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <p
                      className={`pr-9 text-[9px] font-bold uppercase tracking-[0.2em] ${a.eyebrow}`}
                    >
                      {kpi.eyebrow}
                    </p>

                    <div className="mt-4 flex flex-wrap items-baseline gap-x-1.5 gap-y-1 pb-1">
                      {kpi.metric && (
                        <span
                          className={`font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight ${a.metric}`}
                        >
                          {kpi.metric}
                        </span>
                      )}
                      <span
                        className={`bg-gradient-to-br ${a.valueGradient} bg-clip-text font-display text-5xl font-bold leading-[0.95] tracking-tight text-transparent`}
                      >
                        {kpi.value}
                      </span>
                      <span className="font-display text-base font-semibold uppercase tracking-widest text-mountain-500">
                        {kpi.suffix}
                      </span>
                    </div>

                    <div className="mt-4 flex h-9 items-center">
                      {kpi.logo ? (
                        <img
                          src={kpi.logo}
                          alt={kpi.logoAlt}
                          className="h-7 w-auto max-w-[10rem] object-contain object-left"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <p className="text-xs font-bold text-mountain-950">
                          {kpi.context}
                        </p>
                      )}
                    </div>
                    <p
                      className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] ring-1 ring-inset ${a.tag}`}
                    >
                      {kpi.tag}
                    </p>

                    <span
                      className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${a.bar} transition-transform duration-500 group-hover:scale-x-100`}
                    />
                  </motion.article>
                );
              })}
            </motion.div>

            {/* Ticker bas */}
            <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 sm:grid-cols-4">
              {t.ticker.map((item, i) => (
                <div key={item.label} className="bg-mountain-950 px-4 py-3">
                  <p
                    className={`text-[9px] font-bold uppercase tracking-widest ${TICKER_ACCENT[i] ?? 'text-mountain-200'}`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold uppercase tracking-wide text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
