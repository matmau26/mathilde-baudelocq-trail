import { TrendingUp } from 'lucide-react';

const PROGRESSION = [
  { year: '2021', label: 'Régional' },
  { year: '2022', label: 'Régional+' },
  { year: '2023', label: 'Inter-régional' },
  { year: '2024', label: 'National' },
  { year: '2025', label: 'Top National' },
];

// Coordonnées normalisées du tracé (0-100)
const POINTS = [
  { x: 0, y: 78 },
  { x: 25, y: 62 },
  { x: 50, y: 46 },
  { x: 75, y: 28 },
  { x: 100, y: 10 },
];

const linePath = POINTS.map(
  (p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
).join(' ');
const areaPath = `${linePath} L 100 100 L 0 100 Z`;

export default function Palmares() {
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-flame-600">
              02 — Palmarès récent
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-6xl">
              Référence
              <br />
              <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
                Saison 2025.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            Une performance phare cristallise la trajectoire : une percée au
            contact du peloton Élite sur l’un des trails les plus relevés du
            Sud-Est.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 lg:grid-cols-12">
          {/* Highlight GR Ventoux */}
          <article className="relative bg-white p-8 sm:p-10 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-flame-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                Highlight
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-mountain-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-700">
                Saison 2025
              </span>
            </div>

            <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-5xl">
              Grand Raid
              <br />
              du Ventoux
            </h3>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-mountain-600">
              28 km · 1200 m+ · Massif du Ventoux
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-mountain-800">
              <span className="bg-gradient-to-r from-flame-600 to-flame-500 bg-clip-text font-display text-3xl font-bold text-transparent">
                12ᵉ femme / 320
              </span>{' '}
              — soit le Top 4 % féminin, au contact direct du peloton Élite.
              Une référence solide pour valider le passage au niveau national.
            </p>

            {/* Mini-stats */}
            <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-mountain-200 bg-mountain-200">
              <div className="bg-white p-4">
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-mountain-500">
                  Rang Femmes
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-mountain-950">
                  12 / 320
                </dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-mountain-500">
                  Temps
                </dt>
                <dd className="mt-1 font-mono text-2xl font-bold text-mountain-950">
                  02:53:08
                </dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-mountain-500">
                  Niveau
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-mountain-950">
                  Élite
                </dd>
              </div>
            </dl>
          </article>

          {/* Bloc progression */}
          <aside className="relative flex flex-col justify-between bg-mountain-950 p-8 text-white sm:p-10 lg:col-span-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-mountain-200">
                  <TrendingUp className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-mountain-300">
                  Progression · 5 ans
                </p>
              </div>
              <p className="mt-5 font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-3xl">
                Progression constante
                <br />
                <span className="text-mountain-300">vers le niveau national.</span>
              </p>
            </div>

            {/* Courbe SVG */}
            <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5">
              <svg
                role="img"
                aria-label="Courbe de progression sur 5 ans, ascendante"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-32 w-full"
              >
                <defs>
                  <linearGradient id="prog-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9cbcd2" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#9cbcd2" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="prog-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6896b6" />
                    <stop offset="100%" stopColor="#ffffff" />
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
                  strokeWidth="1.5"
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
                    r="1.6"
                    fill={i === POINTS.length - 1 ? '#ffffff' : '#9cbcd2'}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>

              {/* Étiquettes années */}
              <div className="mt-3 flex justify-between text-[10px] font-semibold uppercase tracking-widest text-mountain-300">
                {PROGRESSION.map((p, i) => (
                  <span
                    key={p.year}
                    className={
                      i === PROGRESSION.length - 1 ? 'text-white' : ''
                    }
                  >
                    {p.year}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-semibold uppercase tracking-widest">
              <span className="text-mountain-300">Départ : Régional</span>
              <span className="text-white">Aujourd’hui : Top National</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
