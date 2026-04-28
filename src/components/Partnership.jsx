import {
  Atom,
  Globe,
  Handshake,
  ArrowRight,
  Box,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/useT.js';

const PILLAR_META = [
  { icon: Atom, accent: 'flame' },
  { icon: Globe, accent: 'solar' },
  { icon: Handshake, accent: 'electric' },
];

const LEVER_ICONS = [Box, ShieldCheck];

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

export default function Partnership() {
  const t = useT('partnership');
  const PILLARS = t.pillars.map((p, i) => ({ ...p, ...PILLAR_META[i] }));
  const LEVERS = t.levers.map((l, i) => ({ ...l, icon: LEVER_ICONS[i] }));
  return (
    <section
      id="partenariat"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-cool py-28 sm:py-36"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* En-tête : texte à gauche, photo à droite */}
        <div className="border-t-2 border-mountain-950 pt-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-600">
                {t.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-mountain-950 sm:text-6xl lg:text-7xl">
                {t.title1}
                <br />
                <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-electric-500 bg-clip-text text-transparent">
                  {t.title2}
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-mountain-700 sm:text-lg">
                {t.kickerIntro}{' '}
                <span className="font-semibold text-mountain-950">
                  {t.kickerMutual}
                </span>
                {t.kickerComma}
                <span className="font-semibold text-mountain-950">
                  {t.kickerLocal}
                </span>{' '}
                {t.kickerAnd}{' '}
                <span className="font-semibold text-mountain-950">
                  {t.kickerBrand}
                </span>
                {t.kickerEnd}
              </p>
            </div>

            {/* Photo Ventoux 2025 — contenue */}
            <div className="lg:col-span-5">
              <figure className="mx-auto w-full max-w-[20rem] overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 shadow-xl shadow-mountain-900/10 sm:max-w-sm lg:ml-auto lg:mr-0 lg:max-w-[18rem]">
                <div className="relative aspect-[5/7] w-full">
                  <img
                    src="/Ventoux2025-crop.jpg"
                    alt={t.photoAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-mountain-950/70 via-mountain-950/0 to-mountain-950/30"
                  />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                    {t.photoPill}
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-flame-300">
                      {t.photoEyebrow}
                    </p>
                    <p className="mt-1 font-display text-base font-bold uppercase tracking-wide text-white">
                      {t.photoCaption}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
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
              {t.footerEyebrow}
            </p>
            <p className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
              {t.footerTitle}
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
              {t.footerTagline}
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border-2 border-flame-500 bg-flame-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-flame-600 hover:border-flame-600"
            >
              {t.footerCta}
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
