import { Target, Zap, Flag } from 'lucide-react';
import { useT } from '../i18n/useT.js';

export default function Calendar() {
  const t = useT('calendar');
  const OBJECTIVES = t.objectives;
  const SECONDARY_OBJECTIVE = t.secondary;
  return (
    <section
      id="calendrier"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-warm py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
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

        {/* Cartes Objectifs A — design franc, lignes nettes */}
        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 md:grid-cols-2">
          {OBJECTIVES.map((obj) => (
            <li
              key={obj.title}
              className="group relative bg-white p-8 transition-colors hover:bg-mountain-50 sm:p-10"
            >
              {/* Code & label */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-none border border-flame-500 bg-flame-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  <Target className="h-3 w-3" strokeWidth={2.5} />
                  {t.objectiveALabel}
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
                    {t.objectiveLieu}
                  </dt>
                  <dd className="text-sm font-semibold text-mountain-900">
                    {obj.location}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    {t.objectivePeriode}
                  </dt>
                  <dd className="text-sm font-semibold text-mountain-900">
                    {obj.period}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-sm text-mountain-700">{obj.note}</p>

              {/* Barre d’accent au hover */}
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-flame-500 to-solar-400 transition-transform duration-500 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>

        {/* Objectif B — Visibilité & Vitesse */}
        <article className="group relative mt-8 overflow-hidden border-2 border-mountain-950 bg-white transition-colors hover:bg-mountain-50">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Colonne identité */}
            <div className="border-b-2 border-mountain-950 p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 border border-electric-500 bg-electric-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  <Zap className="h-3 w-3" strokeWidth={2.5} />
                  {t.objectiveBLabel}
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-widest text-mountain-400">
                  {SECONDARY_OBJECTIVE.code}
                </span>
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-electric-600">
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
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-600 to-electric-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  <Flag className="h-3 w-3" strokeWidth={2.5} />
                  {SECONDARY_OBJECTIVE.badge}
                </span>
                <span className="inline-flex items-center gap-2 border border-mountain-300 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-700">
                  {t.formatLabel}
                </span>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-mountain-200 bg-mountain-200 sm:grid-cols-3">
                <div className="bg-white p-4">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    {t.secondaryLabels.period}
                  </dt>
                  <dd className="mt-1 font-display text-base font-bold uppercase tracking-wide text-mountain-950">
                    {SECONDARY_OBJECTIVE.period}
                  </dd>
                </div>
                <div className="bg-white p-4">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    {t.secondaryLabels.location}
                  </dt>
                  <dd className="mt-1 font-display text-base font-bold uppercase tracking-wide text-mountain-950">
                    {SECONDARY_OBJECTIVE.location}
                  </dd>
                </div>
                <div className="bg-white p-4 sm:col-span-1 col-span-2">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                    {t.secondaryLabels.recurrence}
                  </dt>
                  <dd className="mt-1 font-display text-base font-bold uppercase tracking-wide text-mountain-950">
                    {t.secondaryLabels.recurrenceValue}
                  </dd>
                </div>
              </dl>

              {/* Note de contexte */}
              <p className="mt-6 border-l-2 border-electric-500 pl-4 text-xs leading-relaxed text-mountain-700">
                {SECONDARY_OBJECTIVE.context}
              </p>
            </div>
          </div>

          {/* Barre d’accent en bas */}
          <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-electric-500 to-electric-300 transition-transform duration-500 group-hover:scale-x-100" />
        </article>
      </div>
    </section>
  );
}
