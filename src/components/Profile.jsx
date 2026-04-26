const FACTS = [
  {
    label: 'Âge',
    value: '34 ans',
    icon: (
      <path d="M12 8v4l3 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />
    ),
  },
  {
    label: 'Ville',
    value: 'Montélimar (26)',
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
  },
  {
    label: 'Famille',
    value: 'Mère de 2 enfants',
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    label: 'Formation',
    value: 'Concours CRPE en cours',
    icon: (
      <>
        <path d="M22 10 12 4 2 10l10 6 10-6Z" />
        <path d="M6 12v5a6 6 0 0 0 12 0v-5" />
      </>
    ),
  },
  {
    label: 'Expérience',
    value: '5 ans de pratique du trail',
    icon: (
      <>
        <path d="M3 20l4-6 4 4 5-9 5 11" />
        <circle cx="14" cy="5" r="1.5" />
      </>
    ),
  },
  {
    label: 'Niveau',
    value: 'Progression au niveau national',
    icon: (
      <>
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </>
    ),
  },
];

const VALUES = ['Simplicité', 'Intégrité', 'Loyauté'];

export default function Profile() {
  return (
    <section
      id="profil"
      className="relative scroll-mt-20 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* En-tête de section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-mountain-500">
              01 — Profil
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-mountain-950 sm:text-5xl">
              L'athlète,
              <br />
              <span className="text-mountain-600">en bref.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mountain-700">
              Une approche du sport basée sur la{' '}
              <span className="font-semibold text-mountain-900">simplicité</span>,
              l'
              <span className="font-semibold text-mountain-900">intégrité</span>{' '}
              et la{' '}
              <span className="font-semibold text-mountain-900">loyauté</span>.
              Une progression constante jusqu'au niveau national.
            </p>

            {/* Valeurs en chips */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-mountain-200 bg-mountain-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-mountain-700"
                >
                  {v}
                </li>
              ))}
            </ul>

            {/* Carte signature */}
            <div className="mt-10 rounded-2xl border border-mountain-100 bg-mountain-50/60 p-6">
              <p className="text-xs uppercase tracking-widest text-mountain-500">
                Discipline
              </p>
              <p className="mt-2 text-xl font-semibold text-mountain-900">
                Trail Running
              </p>
              <div className="mt-4 h-px w-full bg-mountain-200" />
              <p className="mt-4 text-sm text-mountain-700">
                Préparation orientée long & ultra · Régularité · Performance
                durable.
              </p>
            </div>
          </div>

          {/* Grille de faits */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FACTS.map((fact) => (
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
                      Fact
                    </span>
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-widest text-mountain-500">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-mountain-900">
                    {fact.value}
                  </p>

                  {/* ligne décorative en bas qui s'étend au hover */}
                  <span className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-mountain-400 to-mountain-700 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
