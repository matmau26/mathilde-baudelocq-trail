import { Award, Mountain } from 'lucide-react';

const RACES = [
  {
    date: '25/04/2026',
    nom: 'Grand Raid Ventoux by UTMB — GRV',
    distance: '26 KM',
    dplus: '1100 M+',
    temps: '02:37:09',
    rangGeneral: '124/1178',
    rangFemmes: '9/381',
    highlight: true,
    badge: 'Performance de Référence · Top 3% Féminin',
  },
  {
    date: '29/11/2025',
    nom: 'La Asics SaintéLyon — SaintéSprint',
    distance: '25 KM',
    dplus: '347 M+',
    temps: '02:11:24',
    rangGeneral: '210/2561',
    rangFemmes: '35/1178',
  },
  {
    date: '19/10/2025',
    nom: 'Grand Trail Du Lac — 34 Km',
    distance: '34 KM',
    dplus: '2020 M+',
    temps: '04:36:58',
    rangGeneral: '95/568',
    rangFemmes: '8/152',
  },
  {
    date: '31/05/2025',
    nom: 'adidas TERREX MaXi-Race — 100K',
    distance: '100 KM',
    dplus: '5300 M+',
    temps: '18:01:41',
    rangGeneral: '700/1621',
    rangFemmes: '41/124',
    ultra: true,
  },
  {
    date: '27/04/2025',
    nom: 'Grand Raid Ventoux by UTMB — GRV',
    distance: '28 KM',
    dplus: '1200 M+',
    temps: '02:53:08',
    rangGeneral: '112/917',
    rangFemmes: '12/320',
  },
  {
    date: '09/03/2025',
    nom: 'Trail du Ventoux — LE 46 ORIGINE',
    distance: '48 KM',
    dplus: '2600 M+',
    temps: '06:24:42',
    rangGeneral: '267/1100',
    rangFemmes: '24/161',
  },
  {
    date: '30/11/2024',
    nom: 'La Asics SaintéLyon — SaintExpress',
    distance: '45 KM',
    dplus: '906 M+',
    temps: '04:40:55',
    rangGeneral: '280/3473',
    rangFemmes: '27/1012',
  },
  {
    date: '02/06/2024',
    nom: "MaXi-Race du lac d'Annecy — Marathon",
    distance: '43 KM',
    dplus: '2691 M+',
    temps: '06:42:03',
    rangGeneral: '395/702',
    rangFemmes: '22/115',
  },
  {
    date: '02/12/2023',
    nom: 'La Asics SaintéLyon — La SaintExpress',
    distance: '44 KM',
    dplus: '974 M+',
    temps: '05:16:11',
    rangGeneral: '995/3332',
    rangFemmes: '119/802',
  },
  {
    date: '22/07/2023',
    nom: 'Ultra Tour des 4 Massifs — Ut4M 40',
    distance: '48.5 KM',
    dplus: '2930 M+',
    temps: '10:24:25',
    rangGeneral: '283/419',
    rangFemmes: '32/62',
  },
  {
    date: '03/12/2022',
    nom: 'La Asics SaintéLyon — La SaintExpress',
    distance: '44 KM',
    dplus: '1150 M+',
    temps: '05:55:44',
    rangGeneral: '1440/3113',
    rangFemmes: '205/693',
  },
  {
    date: '20/08/2022',
    nom: 'Le Belier — Trail 15km',
    distance: '15 KM',
    dplus: '430 M+',
    temps: '01:40:03',
    rangGeneral: '343/912',
    rangFemmes: '58/402',
  },
];

export default function RaceResults() {
  return (
    <section
      id="resultats"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-soft py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* En-tête */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-flame-600">
              04 — Résultats détaillés
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-6xl">
              Historique
              <br />
              <span className="bg-gradient-to-r from-mountain-900 via-electric-600 to-flame-500 bg-clip-text text-transparent">
                des courses.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            Données de course brutes — temps officiels, classement femmes et
            scratch général. Le rang femmes est l’indicateur de référence.
          </p>
        </div>

        {/* === Table desktop === */}
        <div className="mt-12 hidden overflow-hidden border-2 border-mountain-950 bg-white md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-mountain-950 text-white">
                <th className="border-r border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  Date
                </th>
                <th className="border-r border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  Course
                </th>
                <th className="border-r border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  Distance / D+
                </th>
                <th className="border-r border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  Temps
                </th>
                <th className="border-r border-white/10 bg-flame-500 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  Rang Femmes
                </th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  Rang Général
                </th>
              </tr>
            </thead>
            <tbody>
              {RACES.map((race, idx) => {
                const isHighlight = race.highlight;
                return (
                  <tr
                    key={`${race.date}-${idx}`}
                    className={`border-t border-mountain-200 transition-colors ${
                      isHighlight
                        ? 'bg-flame-50 hover:bg-flame-100'
                        : 'hover:bg-mountain-50'
                    }`}
                  >
                    <td className="border-r border-mountain-200 px-4 py-4 align-top">
                      <span className="font-mono text-xs font-medium text-mountain-700">
                        {race.date}
                      </span>
                    </td>
                    <td className="relative border-r border-mountain-200 px-4 py-4 align-top">
                      {isHighlight && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-full w-1 bg-flame-500"
                        />
                      )}
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-mountain-950">
                          {race.nom}
                        </p>
                        {race.ultra && (
                          <span className="inline-flex items-center gap-1 bg-mountain-950 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                            <Mountain className="h-3 w-3" strokeWidth={2.5} />
                            Ultra
                          </span>
                        )}
                      </div>
                      {isHighlight && (
                        <span className="mt-2 inline-flex items-center gap-1.5 bg-flame-500 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                          <Award className="h-3 w-3" strokeWidth={2.5} />
                          {race.badge}
                        </span>
                      )}
                    </td>
                    <td className="border-r border-mountain-200 px-4 py-4 align-top">
                      <span className="font-mono text-sm font-semibold text-mountain-900">
                        {race.distance}
                      </span>
                      <span className="block font-mono text-xs text-mountain-500">
                        {race.dplus}
                      </span>
                    </td>
                    <td className="border-r border-mountain-200 px-4 py-4 align-top">
                      <span className="font-mono text-sm font-semibold text-mountain-900">
                        {race.temps}
                      </span>
                    </td>
                    <td className="border-r border-mountain-200 bg-flame-50/70 px-4 py-4 align-top">
                      <span className="font-mono text-base font-bold text-flame-600">
                        {race.rangFemmes}
                      </span>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <span className="font-mono text-sm text-mountain-600">
                        {race.rangGeneral}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* === Cartes mobile === */}
        <ul className="mt-12 grid grid-cols-1 gap-4 md:hidden">
          {RACES.map((race, idx) => {
            const isHighlight = race.highlight;
            return (
              <li
                key={`m-${race.date}-${idx}`}
                className={`relative overflow-hidden border-2 ${
                  isHighlight
                    ? 'border-flame-500 bg-flame-50'
                    : 'border-mountain-200 bg-white'
                }`}
              >
                {isHighlight && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-1 bg-flame-500"
                  />
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-mountain-700">
                      {race.date}
                    </span>
                    <span className="font-mono text-xs text-mountain-500">
                      {race.distance} · {race.dplus}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold leading-snug text-mountain-950">
                      {race.nom}
                    </h3>
                    {race.ultra && (
                      <span className="inline-flex items-center gap-1 bg-mountain-950 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                        <Mountain className="h-3 w-3" strokeWidth={2.5} />
                        Ultra
                      </span>
                    )}
                  </div>
                  {isHighlight && (
                    <span className="mt-3 inline-flex items-center gap-1.5 bg-flame-500 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      <Award className="h-3 w-3" strokeWidth={2.5} />
                      {race.badge}
                    </span>
                  )}

                  <dl className="mt-4 grid grid-cols-3 gap-px overflow-hidden border border-mountain-200 bg-mountain-200">
                    <div className="bg-white p-3">
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-mountain-500">
                        Temps
                      </dt>
                      <dd className="mt-1 font-mono text-sm font-semibold text-mountain-900">
                        {race.temps}
                      </dd>
                    </div>
                    <div className="bg-flame-50 p-3">
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-flame-700">
                        Rang F
                      </dt>
                      <dd className="mt-1 font-mono text-sm font-bold text-flame-600">
                        {race.rangFemmes}
                      </dd>
                    </div>
                    <div className="bg-white p-3">
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-mountain-500">
                        Rang G
                      </dt>
                      <dd className="mt-1 font-mono text-sm text-mountain-600">
                        {race.rangGeneral}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Pied : note méthodologique */}
        <p className="mt-6 text-[10px] uppercase tracking-widest text-mountain-500">
          Source : résultats officiels des organisateurs · Mise à jour saison
          2025–26
        </p>
      </div>
    </section>
  );
}
