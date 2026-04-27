import {
  Atom,
  Globe,
  Handshake,
  ArrowRight,
  Box,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PILLARS = [
  {
    code: '01',
    title: 'Performance & Co-développement',
    subtitle: 'R&D',
    icon: Atom,
    body:
      "Une synergie technique : faire progresser l'athlète vers le statut Élite tout en éprouvant les technologies de pointe (Ultrashell / Blizzard) sur les terrains techniques de la Drôme.",
    tags: ['Valorisation R&D', 'Tests prototypes', 'Feedback analytique'],
    accent: 'flame',
  },
  {
    code: '02',
    title: 'Rayonnement & Ambition Élite',
    subtitle: 'Image de marque',
    icon: Globe,
    body:
      "Incarner l'image de la marque sur le circuit national et international. Une présence authentique et performante sur les événements phares (Mont-Blanc, Vercors, SaintéLyon).",
    tags: ['Représentation', 'Visibilité événementielle', 'Valeurs sportives'],
    accent: 'solar',
  },
  {
    code: '03',
    title: 'Synergie & Engagement local',
    subtitle: 'Ancrage Drôme',
    icon: Handshake,
    body:
      "Aller au-delà du sponsoring. Profiter d'une proximité géographique immédiate (Montélimar / Valence) pour construire un projet commun et s'intégrer durablement au sein de l'équipe.",
    tags: ['Team athlète', 'Projet de marque', 'Proximité Drôme'],
    accent: 'electric',
  },
];

const ACCENT = {
  flame: {
    iconBg: 'bg-flame-500 text-white',
    pillarTag: 'text-flame-600',
    border: 'group-hover:border-flame-500',
    bar: 'bg-flame-500',
    code: 'text-flame-200 group-hover:text-white/15',
  },
  solar: {
    iconBg: 'bg-solar-400 text-mountain-950',
    pillarTag: 'text-solar-500',
    border: 'group-hover:border-solar-400',
    bar: 'bg-solar-400',
    code: 'text-solar-200 group-hover:text-white/15',
  },
  electric: {
    iconBg: 'bg-electric-600 text-white',
    pillarTag: 'text-electric-600',
    border: 'group-hover:border-electric-600',
    bar: 'bg-electric-600',
    code: 'text-electric-200 group-hover:text-white/15',
  },
};

const LEVERS = [
  {
    code: 'Levier A',
    title: 'Soutien matériel & technique personnalisé',
    description:
      'Dotation produit ciblée, accès prototypes, suivi technique adapté à la saison.',
    icon: Box,
  },
  {
    code: 'Levier B',
    title: 'Intégration officielle au Team Athlètes Élite',
    description:
      "Appartenance pleine au projet de marque : représentation, événements, communication, R&D.",
    icon: ShieldCheck,
  },
];

export default function Partnership() {
  return (
    <section
      id="partenariat"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-cool py-28 sm:py-36"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* En-tête */}
        <div className="border-t-2 border-mountain-950 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-flame-600">
            06 — Partenariat
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-mountain-950 sm:text-6xl lg:text-7xl">
            Vision de
            <br />
            <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-electric-500 bg-clip-text text-transparent">
              collaboration.
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-mountain-700 sm:text-lg">
            Une collaboration articulée autour de la{' '}
            <span className="font-semibold text-mountain-950">
              performance mutuelle
            </span>
            , de l’
            <span className="font-semibold text-mountain-950">
              ancrage territorial
            </span>{' '}
            et de l’
            <span className="font-semibold text-mountain-950">
              intégration au projet de marque
            </span>
            .
          </p>
        </div>

        {/* Grille des 3 piliers — version premium */}
        <ul className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const a = ACCENT[pillar.accent];
            return (
              <li
                key={pillar.code}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 border-mountain-950 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-mountain-900/10 sm:p-10`}
              >
                {/* Code en filigrane */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute right-7 top-7 font-display text-7xl font-bold leading-none tracking-tighter transition-colors ${a.code}`}
                >
                  {pillar.code}
                </span>

                {/* Icône moderne — carré accent */}
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${a.iconBg} shadow-lg shadow-mountain-900/10 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>

                {/* Sous-titre / catégorie */}
                <p
                  className={`mt-8 text-[10px] font-bold uppercase tracking-[0.3em] ${a.pillarTag}`}
                >
                  {pillar.subtitle}
                </p>

                {/* Titre pilier */}
                <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-[1.05] tracking-tight text-mountain-950 sm:text-3xl">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-5 flex-1 text-sm leading-relaxed text-mountain-700">
                  {pillar.body}
                </p>

                {/* Tags techniques — style monospace propre */}
                <ul className="mt-8 flex flex-wrap gap-1.5">
                  {pillar.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-mountain-950/80 bg-white px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-mountain-950"
                    >
                      [{t}]
                    </li>
                  ))}
                </ul>

                {/* Barre accent en bas, qui se déploie au hover */}
                <span
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 ${a.bar} transition-transform duration-500 group-hover:scale-x-100`}
                />
              </li>
            );
          })}
        </ul>

        {/* Footer de section : deux leviers */}
        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 text-white">
          <div className="border-b border-white/10 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-flame-300">
              Modalités
            </p>
            <p className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
              Deux leviers de collaboration envisageables
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {LEVERS.map((lever) => {
              const Icon = lever.icon;
              return (
                <div
                  key={lever.code}
                  className="flex flex-col gap-4 p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-mountain-950">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mountain-300">
                      {lever.code}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl">
                    {lever.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mountain-200">
                    {lever.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA bandeau bas */}
          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:p-8">
            <p className="text-sm leading-relaxed text-mountain-200">
              Discutons du modèle qui correspond à votre projet de marque.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border-2 border-flame-500 bg-flame-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-flame-600 hover:border-flame-600"
            >
              Prendre contact
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
