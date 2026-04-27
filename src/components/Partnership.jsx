import { FlaskConical, Megaphone, MapPin, ArrowRight } from 'lucide-react';

const PILLARS = [
  {
    code: '01',
    title: 'Test & R&D',
    icon: FlaskConical,
    body: "Capacité d'analyse rigoureuse pour le développement matériel. Mise à l'épreuve des prototypes (gammes Ultrashell / Blizzard) sur les terrains techniques de la Drôme.",
    tags: ['Prototypes', 'Ultrashell', 'Blizzard'],
  },
  {
    code: '02',
    title: 'Image & Visibilité',
    icon: Megaphone,
    body: 'Exposition sur des événements majeurs (Mont-Blanc) et compétitions régionales ciblées.',
    tags: ['Mont-Blanc', 'Régional', 'Élite'],
  },
  {
    code: '03',
    title: 'Proximité Stratégique',
    icon: MapPin,
    body: 'Disponibilité immédiate pour interactions directes au siège (Saint-Marcel-lès-Valence) et intégration au Team.',
    tags: ['Saint-Marcel', 'Team', 'Drôme'],
  },
];

export default function Partnership() {
  return (
    <section
      id="partenariat"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-cool py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* En-tête */}
        <div className="border-t-2 border-mountain-950 pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-flame-600">
                07 — Partenariat
              </p>
              <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-6xl">
                Proposition
                <br />
                <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-electric-500 bg-clip-text text-transparent">
                  de collaboration.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-mountain-700">
              Une proposition B2B alignée sur le développement matériel, la
              visibilité événementielle et l’ancrage territorial.
            </p>
          </div>
        </div>

        {/* Grille des piliers — bordures franches, contrastes forts */}
        <ul className="mt-12 grid grid-cols-1 border-2 border-mountain-950 md:grid-cols-3 md:divide-x-2 md:divide-mountain-950">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <li
                key={pillar.code}
                className={`group relative flex flex-col bg-white p-8 transition-colors hover:bg-mountain-950 hover:text-white sm:p-10 ${
                  idx !== PILLARS.length - 1
                    ? 'border-b-2 border-mountain-950 md:border-b-0'
                    : ''
                }`}
              >
                {/* Code en filigrane */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-6 font-display text-2xl font-bold tracking-widest text-mountain-200 transition-colors group-hover:text-white/15"
                >
                  {pillar.code}
                </span>

                {/* Icône — encadré net */}
                <span className="flex h-14 w-14 items-center justify-center border-2 border-mountain-950 bg-white text-mountain-950 transition-colors group-hover:border-white group-hover:bg-mountain-950 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>

                <h3 className="mt-8 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-mountain-950 transition-colors group-hover:text-white sm:text-3xl">
                  {pillar.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-mountain-700 transition-colors group-hover:text-mountain-100">
                  {pillar.body}
                </p>

                {/* Tags */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {pillar.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-mountain-950 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-mountain-950 transition-colors group-hover:border-white group-hover:text-white"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Barre de bas qui s'allonge */}
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-mountain-700 transition-transform duration-500 group-hover:scale-x-100" />
              </li>
            );
          })}
        </ul>

        {/* CTA bandeau noir */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-2 border-mountain-950 bg-mountain-950 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-300">
              Étape suivante
            </p>
            <p className="mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
              Construire un partenariat technique
              <br className="hidden sm:block" /> sur la durée.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border-2 border-flame-500 bg-flame-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-flame-600 hover:border-flame-600"
          >
            Prendre contact
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
