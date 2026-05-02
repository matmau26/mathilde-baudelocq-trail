import { motion } from 'framer-motion';
import { useT } from '../i18n/useT.js';

export default function PullQuote() {
  const t = useT('pullquote');

  return (
    <section
      aria-label={t.aria}
      className="relative overflow-hidden bg-cream-50 py-20 sm:py-28 lg:py-32"
    >
      {/* Halo très doux, presque imperceptible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-flame-200/30 blur-[100px] sm:h-[28rem] sm:w-[28rem] sm:blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span
            aria-hidden="true"
            className="block font-editorial text-6xl font-medium italic leading-none text-flame-500 sm:text-7xl lg:text-8xl"
          >
            “
          </span>
          <blockquote className="mt-3 text-balance font-editorial text-2xl font-medium italic leading-[1.25] tracking-tight text-mountain-950 sm:mt-4 sm:text-4xl sm:leading-[1.2] md:text-5xl lg:text-6xl">
            {t.quote}
          </blockquote>
          <figcaption className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-mountain-700 sm:mt-10 sm:text-[11px] sm:tracking-[0.25em]">
            <span aria-hidden="true" className="block h-px w-6 bg-flame-500 sm:w-8" />
            {t.attribution}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
