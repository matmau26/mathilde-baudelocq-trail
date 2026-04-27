import { Mountain, Target, MapPin, Zap, Flag } from 'lucide-react';

const OBJECTIVES = [
  {
    code: 'A.01',
    title: 'Marathon du Mont-Blanc',
    distance: '42 km',
    location: 'Chamonix · Haute-Savoie',
    period: 'Juin 2026',
    note: 'Vitrine internationale · format marathon montagne',
  },
  {
    code: 'A.02',
    title: 'UltraTrail du Vercors',
    distance: '84 km',
    location: 'Massif du Vercors · Drôme / Isère',
    period: 'Juillet 2026',
    note: 'Validation ultra · terrain de jeu domestique',
  },
];

const SECONDARY_OBJECTIVE = {
  code: 'B.01',
  category: 'Objectif Visibilité & Vitesse',
  title: 'La SainteSprint',
  distance: '25 km',
  location: 'Lyon · Rhône',
  period: 'Novembre 2026',
  badge: 'Événement de clôture de saison',
  context:
    '5ᵉ participation consécutive à l’événement — progression constante du classement féminin sur les formats courts à longs.',
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mountain-500">
              05 — Objectifs 2026
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-6xl">
              Cibles de
              <br />
              <span className="text-mountain-600">Performance Majeures.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            Deux courses structurent la saison. Préparation ciblée, pic de
            forme aligné, validation du passage au statut Élite.
          </p>
        </div>

        {/* Cartes Objectifs A — design franc, lignes nettes */}
        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 md:grid-cols-2">
          {OBJECTIVES.map((obj) => (
            <li
              key={obj.title}
              className="group relative bg-white p-8 transition-colors hover:bg-mountain-50 sm:p-10"
            >
              {/* Code & label */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-none border border-mountain-950 bg-mountain-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  <Target className="h-3 w-3" strokeWidth={2.5} />
                  Objectif A
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-widest text-mountain-400">
                  {obj.code}
                </span>
              </div>

              {/* Titre */}
              <h3 className="mt-8 font-display text-3xl font-bold uppercase leading-[1] tracking-tight text-mountain-950 sm:text-4xl">
                {obj.title}
              </h3>

              {/* Distance gros chiffre */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-6xl font-bold leading-none tracking-tighter text-mountain-950 sm:text-7xl">
                  {obj.distance.split(' ')[0]}
                </span>
                <span className="font-display text-xl font-semibold uppercase tracking-widest text-mountain-500">
                  {obj.distance.split(' ')[1]}
                </span>
              </div>

              {/* Détails — lignes nettes */}
              <dl className="mt-8 divide-y divide-mountain-200 border-y border-mountain-200">
                <div className="flex items-center justify-between py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    Lieu
                  </dt>
                  <dd className="text-sm font-semibold text-mountain-900">
                    {obj.location}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    Période
                  </dt>
                  <dd className="text-sm font-semibold text-mountain-900">
                    {obj.period}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-sm text-mountain-700">{obj.note}</p>

              {/* Barre d’accent au hover */}
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-mountain-700 transition-transform duration-500 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>

        {/* Objectif B — Visibilité & Vitesse */}
        <article className="group relative mt-8 overflow-hidden border-2 border-mountain-950 bg-white transition-colors hover:bg-mountain-50">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Colonne identité */}
            <div className="border-b-2 border-mountain-950 p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 border border-mountain-950 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-950">
                  <Zap className="h-3 w-3" strokeWidth={2.5} />
                  Objectif B
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-widest text-mountain-400">
                  {SECONDARY_OBJECTIVE.code}
                </span>
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-600">
                {SECONDARY_OBJECTIVE.category}
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-[1] tracking-tight text-mountain-950 sm:text-4xl">
                {SECONDARY_OBJECTIVE.title}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold leading-none tracking-tighter text-mountain-950 sm:text-6xl">
                  {SECONDARY_OBJECTIVE.distance.split(' ')[0]}
                </span>
                <span className="font-display text-lg font-semibold uppercase tracking-widest text-mountain-500">
                  {SECONDARY_OBJECTIVE.distance.split(' ')[1]}
                </span>
              </div>
            </div>

            {/* Colonne détails */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 bg-mountain-950 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  <Flag className="h-3 w-3" strokeWidth={2.5} />
                  {SECONDARY_OBJECTIVE.badge}
                </span>
                <span className="inline-flex items-center gap-2 border border-mountain-300 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-700">
                  Format court · Vitesse
                </span>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-mountain-200 bg-mountain-200 sm:grid-cols-3">
                <div className="bg-white p-4">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    Période
                  </dt>
                  <dd className="mt-1 font-display text-base font-bold uppercase tracking-wide text-mountain-950">
                    {SECONDARY_OBJECTIVE.period}
                  </dd>
                </div>
                <div className="bg-white p-4">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    Lieu
                  </dt>
                  <dd className="mt-1 font-display text-base font-bold uppercase tracking-wide text-mountain-950">
                    {SECONDARY_OBJECTIVE.location}
                  </dd>
                </div>
                <div className="bg-white p-4 sm:col-span-1 col-span-2">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    Récurrence
                  </dt>
                  <dd className="mt-1 font-display text-base font-bold uppercase tracking-wide text-mountain-950">
                    5ᵉ participation
                  </dd>
                </div>
              </dl>

              {/* Note de contexte */}
              <p className="mt-6 border-l-2 border-mountain-700 pl-4 text-xs leading-relaxed text-mountain-600">
                {SECONDARY_OBJECTIVE.context}
              </p>
            </div>
          </div>

          {/* Barre d’accent en bas */}
          <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-mountain-700 transition-transform duration-500 group-hover:scale-x-100" />
        </article>

        {/* Camp de base */}
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 lg:grid-cols-12">
          <div className="bg-mountain-950 p-8 text-white sm:p-10 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-white text-mountain-950">
                <MapPin className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-300">
                Camp de base · Terrain d’entraînement
              </p>
            </div>

            <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl">
              Massif de Dieulefit
            </h3>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-mountain-300">
              Drôme provençale (26)
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                'Terrain technique & vallonné',
                'Sorties longues hebdomadaires',
                'Travail spécifique D+',
              ].map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-mountain-300 bg-white/5 px-4 py-3 text-sm font-medium text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc visuel */}
          <div className="relative min-h-[220px] bg-white lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-mountain-100"
              viewBox="0 0 400 240"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,180 L60,140 L110,170 L160,110 L220,160 L280,90 L340,150 L400,120 L400,240 L0,240 Z"
              />
              <path
                fill="#365f81"
                fillOpacity="0.4"
                d="M0,210 L80,170 L140,200 L200,150 L260,190 L320,140 L400,180 L400,240 L0,240 Z"
              />
            </svg>
            <div className="absolute right-4 top-4 inline-flex items-center gap-2 bg-mountain-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
              <Mountain className="h-3 w-3" strokeWidth={2.5} />
              Drôme · 26
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
