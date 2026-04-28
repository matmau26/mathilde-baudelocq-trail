import { Award, Mountain, Trophy, TrendingUp } from 'lucide-react';
import { useT } from '../i18n/useT.js';

const BADGE_STYLES = {
  Podium: {
    className:
      'bg-solar-300 text-mountain-950 ring-1 ring-inset ring-solar-500/40',
    icon: Trophy,
  },
  'Top perf': {
    className:
      'bg-electric-600 text-white ring-1 ring-inset ring-electric-700/40',
    icon: TrendingUp,
  },
  Ultra: {
    className: 'bg-mountain-950 text-white',
    icon: Mountain,
  },
};

function RaceBadges({ badges, labels }) {
  if (!badges || badges.length === 0) return null;
  return (
    <>
      {badges.map((badge) => {
        const style = BADGE_STYLES[badge];
        if (!style) return null;
        const Icon = style.icon;
        const label = labels?.[badge] || badge;
        return (
          <span
            key={badge}
            className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.25em] ${style.className}`}
          >
            {Icon && <Icon className="h-3 w-3" strokeWidth={2.5} />}
            {label}
          </span>
        );
      })}
    </>
  );
}

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
    badges: ['Top perf'],
  },
  {
    date: '12/10/2025',
    nom: "All'en Trail",
    distance: '12 KM',
    dplus: '420 M+',
    temps: '01:05:52',
    rangGeneral: '33/272',
    rangFemmes: '2/90',
    badges: ['Podium'],
  },
  {
    date: '07/09/2025',
    nom: 'Les rondes charolaises',
    distance: '20 KM',
    dplus: '750 M+',
    temps: '02:12:18',
    rangGeneral: '36/120',
    rangFemmes: '2/28',
    badges: ['Podium'],
  },
  {
    date: '31/05/2025',
    nom: 'adidas TERREX MaXi-Race — 100K',
    distance: '100 KM',
    dplus: '5300 M+',
    temps: '18:01:41',
    rangGeneral: '700/1621',
    rangFemmes: '41/124',
    badges: ['Ultra'],
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
    date: '29/03/2025',
    nom: 'Trail de Mirmande',
    distance: '15 KM',
    dplus: '870 M+',
    temps: '01:36:25',
    rangGeneral: '22/192',
    rangFemmes: '1/58',
    badges: ['Podium'],
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
  const t = useT('races');
  return (
    <section
      id="resultats"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-soft py-24 sm:py-32"
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
              <span className="bg-gradient-to-r from-mountain-900 via-electric-600 to-flame-500 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            {t.kicker}
          </p>
        </div>

        {/* === Table desktop === */}
        <div className="mt-12 hidden overflow-hidden border-2 border-mountain-950 bg-white md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-mountain-950 text-white">
                <th className="border-r border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  {t.headers.date}
                </th>
                <th className="border-r border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  {t.headers.race}
                </th>
                <th className="border-r border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  {t.headers.distance}
                </th>
                <th className="border-r border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  {t.headers.time}
                </th>
                <th className="border-r border-white/10 bg-flame-500 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  {t.headers.women}
                </th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                  {t.headers.general}
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
                        <RaceBadges badges={race.badges} labels={t.badges} />
                      </div>
                      {isHighlight && (
                        <span className="mt-2 inline-flex items-center gap-1.5 bg-flame-500 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                          <Award className="h-3 w-3" strokeWidth={2.5} />
                          {t.highlightBadge}
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
                    <RaceBadges badges={race.badges} labels={t.badges} />
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
                        {t.mobileLabels.time}
                      </dt>
                      <dd className="mt-1 font-mono text-sm font-semibold text-mountain-900">
                        {race.temps}
                      </dd>
                    </div>
                    <div className="bg-flame-50 p-3">
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-flame-700">
                        {t.mobileLabels.women}
                      </dt>
                      <dd className="mt-1 font-mono text-sm font-bold text-flame-600">
                        {race.rangFemmes}
                      </dd>
                    </div>
                    <div className="bg-white p-3">
                      <dt className="text-[10px] font-bold uppercase tracking-widest text-mountain-500">
                        {t.mobileLabels.general}
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
          {t.footnote}
        </p>
      </div>
    </section>
  );
}
