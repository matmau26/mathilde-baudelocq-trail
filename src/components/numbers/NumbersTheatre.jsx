import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter.jsx';
import { useT } from '../../i18n/useT.js';

/**
 * Sticky theatre où chaque KPI prend tout l'écran.
 * On scrolle, le chiffre change, gigantesque.
 */
function StatScene({ kpi, idx, total, scrollYProgress }) {
  const start = idx / total;
  const end = (idx + 1) / total;
  const inStart = start - 0.05;
  const inEnd = start + 0.1;
  const outStart = end - 0.1;
  const outEnd = end + 0.05;

  const opacity = useTransform(
    scrollYProgress,
    [inStart, inEnd, outStart, outEnd],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [inStart, inEnd, outStart, outEnd],
    ['8%', '0%', '0%', '-8%']
  );
  const isNumeric = /^\d+$/.test(kpi.value);

  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute inset-0 flex flex-col justify-center px-6 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Méta numéro */}
        <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-mountain-500">
          <span className="font-mono">{String(idx + 1).padStart(2, '0')}</span>
          <span aria-hidden="true" className="block h-px w-12 bg-mountain-300" />
          <span>{kpi.eyebrow}</span>
        </div>

        {/* Chiffre cyclopéen */}
        <div className="relative mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
          {kpi.metric && (
            <span className="font-display text-5xl font-bold uppercase leading-[0.85] tracking-[-0.02em] text-mountain-300 sm:text-7xl lg:text-9xl">
              {kpi.metric}
            </span>
          )}
          <span
            className={`font-display font-bold leading-[0.82] tracking-[-0.04em] text-mountain-950 ${
              kpi.metric
                ? 'text-[42vw] sm:text-[36vw] lg:text-[28vw]'
                : 'text-[55vw] sm:text-[45vw] lg:text-[34vw]'
            }`}
          >
            {isNumeric ? (
              <AnimatedCounter to={Number(kpi.value)} duration={2.4} />
            ) : (
              kpi.value
            )}
          </span>
          <span className="font-display text-3xl font-semibold uppercase tracking-[0.1em] text-mountain-500 sm:text-5xl lg:text-7xl">
            {kpi.suffix}
          </span>
        </div>

        {/* Caption éditoriale */}
        <div className="mt-8 grid max-w-3xl grid-cols-1 gap-2 lg:grid-cols-12 lg:gap-6">
          <p className="font-editorial text-xl italic leading-snug text-mountain-700 sm:text-2xl lg:col-span-8">
            {kpi.context}
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-flame-600 lg:col-span-4 lg:text-right">
            {kpi.tag}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressBar({ scrollYProgress, total }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 border-t border-mountain-950/10 bg-cream-50/85 px-6 py-4 backdrop-blur-md lg:px-12">
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-mountain-500">
        Trajectoire
      </span>
      <div className="flex flex-1 items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <ProgressDot
            key={i}
            index={i}
            total={total}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mountain-500">
        Élite 2026
      </span>
    </div>
  );
}

function ProgressDot({ index, total, scrollYProgress }) {
  const start = index / total;
  const end = (index + 1) / total;
  const scaleX = useTransform(scrollYProgress, [start, end], [0, 1]);
  return (
    <div className="h-px flex-1 overflow-hidden bg-mountain-300">
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="h-full bg-flame-500"
      />
    </div>
  );
}

export default function NumbersTheatre() {
  const t = useT('athlete');
  const containerRef = useRef(null);
  const kpis = t.kpis;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      id="numbers"
      aria-label={t.eyebrow}
      className="relative bg-cream-50"
      style={{ height: `${kpis.length * 100}svh` }}
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* Halo flame très très discret derrière les chiffres */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-1/4 h-[36rem] w-[36rem] rounded-full bg-flame-200/40 blur-[150px]"
        />

        {/* Scène — chaque KPI rempli l'écran */}
        <div className="relative h-full w-full">
          {kpis.map((kpi, idx) => (
            <StatScene
              key={kpi.eyebrow}
              kpi={kpi}
              idx={idx}
              total={kpis.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        <ProgressBar scrollYProgress={scrollYProgress} total={kpis.length} />
      </div>
    </section>
  );
}
