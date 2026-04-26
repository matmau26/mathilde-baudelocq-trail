const EVENTS = [
  {
    type: 'Objectif A',
    title: 'Marathon du Mont Blanc',
    distance: '42 km',
    location: 'Chamonix · Haute-Savoie',
    period: 'Été 2026',
    color: 'mountain-700',
  },
  {
    type: 'Objectif A',
    title: 'UltraTrail du Vercors',
    distance: '84 km',
    location: 'Massif du Vercors · Isère / Drôme',
    period: 'Été 2026',
    color: 'mountain-600',
  },
];

const TRAINING = {
  title: 'Massif de Dieulefit',
  subtitle: 'Zone d’entraînement privilégiée',
  region: 'Drôme provençale (26)',
  highlights: [
    'Terrain technique & vallonné',
    'Sorties longues hebdomadaires',
    'Travail spécifique D+',
  ],
};

export default function Calendar() {
  return (
    <section
      id="calendrier"
      className="relative scroll-mt-20 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* En-tête */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-mountain-500">
              03 — Calendrier
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-mountain-950 sm:text-5xl">
              Saison{' '}
              <span className="text-mountain-600">2026.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            Une saison construite autour de deux objectifs majeurs et d’un
            terrain d’entraînement quotidien exigeant.
          </p>
        </div>

        {/* Timeline / grille des objectifs */}
        <div className="mt-12">
          <div className="relative">
            {/* Ligne verticale (mobile) / horizontale (desktop) */}
            <div
              aria-hidden="true"
              className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-mountain-200 via-mountain-300 to-transparent md:left-0 md:right-0 md:top-8 md:h-px md:w-full md:bg-gradient-to-r md:from-mountain-200 md:via-mountain-300 md:to-mountain-200"
            />

            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {EVENTS.map((event, idx) => (
                <li
                  key={event.title}
                  className="relative pl-12 md:pl-0 md:pt-16"
                >
                  {/* Pastille de timeline */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-8 md:top-8 md:-translate-y-1/2"
                  >
                    <span className="block h-3.5 w-3.5 rounded-full bg-white ring-4 ring-mountain-500" />
                  </span>

                  <article className="group relative overflow-hidden rounded-2xl border border-mountain-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-mountain-300 hover:shadow-xl hover:shadow-mountain-900/5 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-mountain-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                        {event.type}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-mountain-500">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-mountain-950 sm:text-3xl">
                      {event.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-mountain-600">
                      <span className="font-semibold text-mountain-800">
                        {event.distance}
                      </span>
                      <span className="inline-block h-1 w-1 rounded-full bg-mountain-400" />
                      <span>{event.location}</span>
                    </div>

                    {/* Détails grille */}
                    <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-mountain-100 pt-6">
                      <div>
                        <dt className="text-[10px] uppercase tracking-widest text-mountain-500">
                          Période
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-mountain-900">
                          {event.period}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-widest text-mountain-500">
                          Format
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-mountain-900">
                          Trail long
                        </dd>
                      </div>
                    </dl>

                    {/* Barre d’accent au hover */}
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-mountain-700 to-mountain-400 transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zone d'entraînement */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-mountain-100 bg-gradient-to-br from-mountain-50 via-white to-mountain-50/40">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
            <div className="p-8 lg:col-span-7 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mountain-600 text-white">
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
                    <path d="M3 20l4-6 4 4 5-9 5 11" />
                    <circle cx="14" cy="5" r="1.5" />
                  </svg>
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-mountain-500">
                  {TRAINING.subtitle}
                </p>
              </div>

              <h3 className="mt-5 text-3xl font-bold text-mountain-950 sm:text-4xl">
                {TRAINING.title}
              </h3>
              <p className="mt-2 text-sm text-mountain-600">{TRAINING.region}</p>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {TRAINING.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-mountain-100 bg-white px-4 py-3 text-sm font-medium text-mountain-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloc visuel placeholder */}
            <div className="relative min-h-[220px] bg-mountain-100 lg:col-span-5">
              <div className="absolute inset-0 bg-gradient-to-tr from-mountain-200 via-mountain-100 to-white" />
              <svg
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-full w-full text-mountain-300"
                viewBox="0 0 400 240"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,180 L60,140 L110,170 L160,110 L220,160 L280,90 L340,150 L400,120 L400,240 L0,240 Z"
                  opacity="0.8"
                />
                <path
                  fill="#365f81"
                  d="M0,210 L80,170 L140,200 L200,150 L260,190 L320,140 L400,180 L400,240 L0,240 Z"
                  opacity="0.5"
                />
              </svg>
              <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-mountain-700 backdrop-blur">
                Drôme · 26
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
