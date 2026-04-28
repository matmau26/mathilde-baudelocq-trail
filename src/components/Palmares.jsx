import { TrendingUp, Trophy } from 'lucide-react';
import { useT } from '../i18n/useT.js';

// Coordonnées normalisées du tracé (0-100) — 6 points
const POINTS = [
  { x: 0, y: 82 },
  { x: 20, y: 66 },
  { x: 40, y: 52 },
  { x: 60, y: 38 },
  { x: 80, y: 22 },
  { x: 100, y: 8 },
];

const linePath = POINTS.map(
  (p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
).join(' ');
const areaPath = `${linePath} L 100 100 L 0 100 Z`;

export default function Palmares() {
  const t = useT('palmares');
  return (
    <section
      id="palmares"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-soft py-24 sm:py-32"
    >
      {/* Blob accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-[24rem] w-[24rem] rounded-full bg-flame-200/40 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* En-tête */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-600">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-6xl">
              {t.title1}
              <br />
              <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            {t.kicker}
          </p>
        </div>

        {/* Row 1 : highlight + photo course */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 lg:grid-cols-12">
          {/* Highlight GR Ventoux 2026 */}
          <article className="relative bg-white p-8 sm:p-10 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-flame-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                {t.highlightPill}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-mountain-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-700">
                {t.seasonPill}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-mountain-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                {t.datePill}
              </span>
            </div>

            <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-5xl">
              {t.raceTitle1}
              <br />
              {t.raceTitle2}
            </h3>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-mountain-600">
              {t.raceSub}
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-mountain-800">
              <span className="bg-gradient-to-r from-flame-600 to-flame-500 bg-clip-text font-display text-3xl font-bold text-transparent">
                {t.bigStat}
              </span>
              {t.bigStatExplain}
            </p>

            {/* Mini-stats */}
            <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-mountain-200 bg-mountain-200">
              {t.stats.map((stat, i) => (
                <div key={stat.label} className="bg-white p-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-mountain-500">
                    {stat.label}
                  </dt>
                  <dd
                    className={`mt-1 ${i === 1 ? 'font-mono' : 'font-display'} text-2xl font-bold ${
                      i === 0 ? 'text-flame-600' : 'text-mountain-950'
                    }`}
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Photo de course */}
          <figure className="relative min-h-[280px] bg-mountain-950 lg:col-span-5">
            <img
              src="/Ventoux1.jpeg"
              alt={t.photoAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-mountain-950/80 via-mountain-950/10 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-flame-300">
                  {t.photoEyebrow}
                </p>
                <p className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-white">
                  {t.photoCaption}
                </p>
              </div>
              <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur">
                01
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Row 2 : progression + photo podium */}
        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 lg:grid-cols-12">
          {/* Bloc progression */}
          <aside className="relative flex flex-col justify-between bg-mountain-950 p-8 text-white sm:p-10 lg:col-span-7">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-flame-300">
                  <TrendingUp className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-mountain-300">
                  {t.progressionLabel}
                </p>
              </div>
              <p className="mt-5 font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-3xl">
                {t.progressionTitle1}
                <br />
                <span className="bg-gradient-to-r from-flame-400 to-solar-400 bg-clip-text text-transparent">
                  {t.progressionTitle2}
                </span>
              </p>
            </div>

            {/* Courbe SVG */}
            <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5">
              <svg
                role="img"
                aria-label={t.progressionAriaLabel}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-32 w-full"
              >
                <defs>
                  <linearGradient id="prog-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff7338" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#ff7338" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="prog-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9cbcd2" />
                    <stop offset="60%" stopColor="#ff7338" />
                    <stop offset="100%" stopColor="#ffc83d" />
                  </linearGradient>
                </defs>

                {/* Grille horizontale */}
                {[20, 40, 60, 80].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="100"
                    y2={y}
                    stroke="#ffffff"
                    strokeOpacity="0.06"
                    strokeWidth="0.4"
                  />
                ))}

                {/* Zone */}
                <path d={areaPath} fill="url(#prog-area)" />

                {/* Ligne */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="url(#prog-line)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Points */}
                {POINTS.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={i === POINTS.length - 1 ? 2.2 : 1.6}
                    fill={i === POINTS.length - 1 ? '#ffae00' : '#9cbcd2'}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>

              {/* Étiquettes années */}
              <div className="mt-3 flex justify-between text-[10px] font-semibold uppercase tracking-widest text-mountain-300">
                {t.progressionYears.map((year, i) => (
                  <span
                    key={year}
                    className={
                      i === t.progressionYears.length - 1 ? 'text-solar-300' : ''
                    }
                  >
                    {year}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-semibold uppercase tracking-widest">
              <span className="text-mountain-300">{t.progressionStart}</span>
              <span className="text-solar-300">{t.progressionEnd}</span>
            </div>
          </aside>

          {/* Photo podium */}
          <figure className="relative min-h-[280px] bg-mountain-950 lg:col-span-5">
            <img
              src="/VentouxPodium.jpeg"
              alt={t.podiumAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-mountain-950/80 via-mountain-950/10 to-transparent"
            />
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
              <Trophy className="h-3 w-3" strokeWidth={2.5} />
              {t.podiumPill}
            </span>
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-solar-300">
                  {t.podiumEyebrow}
                </p>
                <p className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-white">
                  {t.podiumCaption}
                </p>
              </div>
              <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur">
                02
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
