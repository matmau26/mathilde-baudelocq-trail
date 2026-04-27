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
    value: 'De local à Top féminine',
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
      className="relative scroll-mt-20 overflow-hidden bg-mesh-cool py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* En-tête de section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-electric-600">
              05 — Profil
            </p>

            {/* Photo civile avec titre superposé en haut-gauche */}
            <figure className="mt-4 overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 shadow-xl shadow-mountain-900/10">
              <div className="relative aspect-[3/4] w-full">
                <img
                  src="/Mathilde.jpeg"
                  alt="Mathilde Baudelocq, portrait civil"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {/* Voile haut pour lisibilité du titre + voile bas pour la légende */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-mountain-950/70 via-mountain-950/0 to-mountain-950/70"
                />

                {/* Titre superposé top-left */}
                <h2 className="absolute left-5 top-5 max-w-[85%] font-display text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-5xl">
                  L'athlète,
                  <br />
                  <span className="bg-gradient-to-r from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent drop-shadow">
                    en bref.
                  </span>
                </h2>

                {/* Légende bas */}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-flame-300">
                      Portrait
                    </p>
                    <p className="mt-1 font-display text-base font-bold uppercase tracking-wide text-white">
                      Mathilde Baudelocq
                    </p>
                  </div>
                  <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur">
                    Drôme
                  </span>
                </figcaption>
              </div>
            </figure>

            <p className="mt-8 max-w-md text-base leading-relaxed text-mountain-700">
              Exigence compétitive et ancrage territorial. En pleine ascension
              vers le niveau Élite, sa progression s’appuie sur une éthique de
              travail stricte :{' '}
              <span className="font-semibold text-mountain-950">simplicité</span>,{' '}
              <span className="font-semibold text-mountain-950">intégrité</span>{' '}
              et{' '}
              <span className="font-semibold text-mountain-950">loyauté</span>.
              Professionnelle de l’éducation basée dans la Drôme, elle incarne
              factuellement le cœur de cible outdoor. Un profil structuré pour
              la performance, calibré pour représenter un équipementier local
              et s’investir dans sa R&D technique.
            </p>

            {/* Valeurs en chips */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-mountain-200 bg-mountain-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-mountain-700"
                >
                  {v}
                </li>
              ))}
            </ul>
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
