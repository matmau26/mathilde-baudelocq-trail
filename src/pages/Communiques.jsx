import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useT } from '../i18n/useT.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { COMMUNIQUES } from '../data/communiques.js';

function formatDate(iso, lang) {
  try {
    return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function Communiques() {
  const t = useT('communiques');
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-mesh-warm pt-32 pb-24 sm:pt-36">
      {/* Blobs vifs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-flame-300/35 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-electric-300/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mountain-700 transition-colors hover:text-flame-600"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          {t.back}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-10"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-600">
            {t.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-mountain-950 sm:text-6xl lg:text-7xl">
            {t.title1}
            <br />
            <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-electric-500 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mountain-700">
            {t.kicker}
          </p>
        </motion.div>

        {COMMUNIQUES.length === 0 ? (
          <p className="mt-16 text-sm text-mountain-500">{t.empty}</p>
        ) : (
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COMMUNIQUES.map((c, idx) => {
              const localized = c[lang] || c.fr;
              return (
                <motion.li
                  key={c.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
                  className="group"
                >
                  <Link
                    to={`/communiques/${c.slug}`}
                    className="block overflow-hidden rounded-2xl border border-mountain-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-mountain-300 hover:shadow-xl hover:shadow-mountain-900/10"
                  >
                    <figure className="relative aspect-[16/10] w-full overflow-hidden bg-mountain-100">
                      <img
                        src={c.cover}
                        alt={c.coverAlt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-mountain-800 backdrop-blur">
                        {formatDate(c.date, lang)}
                      </span>
                    </figure>
                    <div className="p-6 sm:p-7">
                      <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-mountain-950 sm:text-2xl">
                        {localized.title}
                      </h2>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-600">
                        {localized.subtitle}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-mountain-700">
                        {localized.excerpt}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-mountain-950 transition-colors group-hover:text-flame-600">
                        {t.readMore}
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                          strokeWidth={2.5}
                        />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
