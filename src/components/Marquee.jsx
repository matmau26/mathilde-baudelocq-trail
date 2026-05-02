import { useT } from '../i18n/useT.js';

export default function Marquee() {
  const a = useT('athlete');
  const p = useT('palmares');

  // Mots-clés éditoriaux dérivés des stats. Le séparateur est rendu en accent flame.
  const items = [
    a.kpis?.[0]?.metric
      ? `${a.kpis[0].metric} ${a.kpis[0].value}${a.kpis[0].suffix}`
      : 'TOP 3%',
    'GR Ventoux 2026',
    'ITRA 565',
    'UTMB 568',
    p.podiumPill || 'Podium catégorie',
    a.ticker?.[3]?.value || 'Statut Élite',
  ];

  // Doublé pour que l'animation -50% boucle sans saut visible.
  // Chaque item est rendu avec son dot trailing → motif uniforme sur tout le strip.
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Stats key indicators"
      className="relative overflow-hidden border-y border-mountain-950/10 bg-mountain-950 py-4 sm:py-5"
    >
      <div className="flex w-max animate-marquee items-center whitespace-nowrap will-change-transform">
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10"
          >
            <span className="font-display text-lg font-bold uppercase tracking-tight text-white sm:text-2xl md:text-3xl">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-flame-500"
            />
          </span>
        ))}
      </div>

      {/* Fade gauche / droite pour un effet d'entrée/sortie propre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-mountain-950 to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-mountain-950 to-transparent sm:w-24"
      />
    </section>
  );
}
