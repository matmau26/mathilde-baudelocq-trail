import { motion } from 'framer-motion';
import { useT } from '../i18n/useT.js';

export default function PullQuote() {
  const t = useT('pullquote');

  return (
    <section
      aria-label={t.aria}
      className="relative overflow-hidden bg-cream-50 py-24 sm:py-32"
    >
      {/* Halo très doux, presque imperceptible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-flame-200/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span
            aria-hidden="true"
            className="block font-editorial text-7xl font-medium italic leading-none text-flame-500 sm:text-8xl"
          >
            “
          </span>
          <blockquote className="mt-2 font-editorial text-3xl font-medium italic leading-[1.2] tracking-tight text-mountain-950 sm:text-5xl lg:text-6xl">
            {t.quote}
          </blockquote>
          <figcaption className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-mountain-700">
            <span aria-hidden="true" className="block h-px w-8 bg-flame-500" />
            {t.attribution}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
