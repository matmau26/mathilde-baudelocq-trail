import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter.jsx';
import { useT } from '../i18n/useT.js';

const KPI_META = [
  { accent: 'flame' },
  {
    accent: 'electric',
    logo: '/itra-logo.png',
    logoAlt: 'Logo officiel ITRA',
  },
  {
    accent: 'solar',
    logo: '/logo-utmb-index.png',
    logoAlt: 'Logo officiel UTMB Index',
  },
];

const ACCENT_TOKENS = {
  flame: {
    eyebrow: 'text-flame-600',
    valueGradient: 'from-flame-600 via-flame-500 to-solar-400',
    metric: 'text-flame-500',
    bar: 'from-flame-500 to-solar-400',
    tag: 'bg-flame-50 text-flame-700 ring-flame-200',
  },
  electric: {
    eyebrow: 'text-electric-600',
    valueGradient: 'from-electric-700 via-electric-500 to-electric-300',
    metric: 'text-electric-500',
    bar: 'from-electric-600 to-electric-300',
    tag: 'bg-electric-50 text-electric-700 ring-electric-200',
  },
  solar: {
    eyebrow: 'text-solar-500',
    valueGradient: 'from-solar-500 via-flame-400 to-flame-600',
    metric: 'text-solar-500',
    bar: 'from-solar-400 to-flame-500',
    tag: 'bg-solar-200/50 text-mountain-900 ring-solar-300',
  },
};

function PaginationDot({ index, total, scrollYProgress }) {
  const start = index / total;
  const end = (index + 1) / total;
  const backgroundColor = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    ['#c9dae8', '#ff4d18', '#ff4d18', '#c9dae8']
  );
  return (
    <motion.span
      style={{ backgroundColor }}
      className="inline-block h-1 w-8 rounded-full"
    />
  );
}

/**
 * Bloc KPI individuel — animé in/out selon sa progression dans le sticky scroll.
 */
function StoryCard({ kpi, idx, total, scrollYProgress }) {
  // Chaque carte occupe 1/total du parcours scroll
  const start = idx / total;
  const end = (idx + 1) / total;
  const fadeIn = start - 0.05;
  const fadeOut = end - 0.02;

  const opacity = useTransform(
    scrollYProgress,
    [fadeIn, start + 0.05, fadeOut, end + 0.05],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [fadeIn, start + 0.05, fadeOut, end + 0.05],
    [40, 0, 0, -40]
  );
  const scale = useTransform(
    scrollYProgress,
    [fadeIn, start + 0.05, fadeOut, end + 0.05],
    [0.96, 1, 1, 0.96]
  );
  const barScaleX = useTransform(scrollYProgress, [start, end], [0, 1]);

  const a = ACCENT_TOKENS[kpi.accent];
  const isNumeric = /^\d+$/.test(kpi.value);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <p
        className={`text-[11px] font-bold uppercase tracking-[0.3em] ${a.eyebrow}`}
      >
        {String(idx + 1).padStart(2, '0')} — {kpi.eyebrow}
      </p>

      <div className="mt-6 flex flex-wrap items-baseline gap-3">
        {kpi.metric && (
          <span
            className={`font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight ${a.metric} sm:text-6xl`}
          >
            {kpi.metric}
          </span>
        )}
        <span
          className={`bg-gradient-to-br ${a.valueGradient} bg-clip-text font-display text-7xl font-bold leading-[0.9] tracking-tight text-transparent sm:text-[10rem] lg:text-[14rem]`}
        >
          {isNumeric ? <AnimatedCounter to={Number(kpi.value)} duration={2.4} /> : kpi.value}
        </span>
        <span className="font-display text-3xl font-semibold uppercase tracking-widest text-mountain-500 sm:text-4xl">
          {kpi.suffix}
        </span>
      </div>

      <p className="mt-6 text-base font-bold text-mountain-950 sm:text-lg">
        {kpi.context}
      </p>

      {kpi.logo && (
        <img
          src={kpi.logo}
          alt={kpi.logoAlt}
          className="mt-4 h-9 w-auto max-w-[12rem] object-contain object-left"
          loading="lazy"
          decoding="async"
        />
      )}

      <p
        className={`mt-6 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ring-1 ring-inset ${a.tag}`}
      >
        {kpi.tag}
      </p>

      {/* Barre de progression au sein du KPI */}
      <div className="mt-10 h-px w-24 origin-left">
        <motion.div
          style={{ scaleX: barScaleX }}
          className={`h-full origin-left bg-gradient-to-r ${a.bar}`}
        />
      </div>
    </motion.div>
  );
}

export default function AthleteStoryScroll() {
  const t = useT('athlete');
  const containerRef = useRef(null);
  const kpis = t.kpis.map((k, i) => ({ ...k, ...KPI_META[i] }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Sticky pinning : le bloc gauche reste fixe pendant 3x la viewport
  // (1 viewport par KPI à révéler).
  return (
    <section
      ref={containerRef}
      id="athlete"
      aria-label={t.eyebrow}
      className="relative bg-mesh-cool"
      style={{ height: `${kpis.length * 100}svh` }}
    >
      {/* Sticky stage */}
      <div className="sticky top-0 flex h-svh w-full items-center overflow-hidden">
        {/* Blobs ambiance */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-flame-300/30 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -left-24 h-[26rem] w-[26rem] rounded-full bg-electric-300/25 blur-[110px]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
          {/* Colonne gauche — photo + identité (pinned) */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-flame-600">
              {t.eyebrow}
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 shadow-xl shadow-mountain-900/10">
              <div className="relative aspect-[3/4] w-full">
                <img
                  src="/Mathilde.jpeg"
                  alt={t.photoAlt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-mountain-950/70 via-mountain-950/0 to-mountain-950/70"
                />
                <h2 className="absolute left-5 top-5 max-w-[85%] font-display text-3xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-4xl">
                  {t.overlayLine1}
                  <br />
                  <span className="bg-gradient-to-r from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent">
                    {t.overlayLine2}
                  </span>
                </h2>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-flame-300">
                      {t.captionPortrait}
                    </p>
                    <p className="mt-1 font-display text-base font-bold uppercase tracking-wide text-white">
                      {t.captionName}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur">
                    {t.captionRegion}
                  </span>
                </figcaption>
              </div>
            </div>
          </div>

          {/* Colonne droite — KPIs en révélation séquentielle */}
          <div className="relative lg:col-span-7">
            <div className="relative h-[60svh] sm:h-[70svh]">
              {kpis.map((kpi, idx) => (
                <StoryCard
                  key={kpi.accent}
                  kpi={kpi}
                  idx={idx}
                  total={kpis.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* Indicateur de progression vertical */}
            <div className="absolute -left-2 top-0 hidden h-full w-px bg-mountain-200 lg:block">
              <motion.div
                style={{
                  scaleY: scrollYProgress,
                  transformOrigin: 'top',
                }}
                className="h-full w-full bg-gradient-to-b from-flame-500 via-flame-400 to-solar-400"
              />
            </div>

            {/* Pagination des KPIs */}
            <div className="mt-6 flex items-center gap-2">
              {kpis.map((kpi, i) => (
                <PaginationDot
                  key={i}
                  index={i}
                  total={kpis.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
              <span className="ml-3 text-[10px] font-medium uppercase tracking-[0.25em] text-mountain-500">
                {kpis.length} key metrics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
