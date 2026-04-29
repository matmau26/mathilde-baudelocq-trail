import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Mountain, Clock, Play, Loader2 } from 'lucide-react';
import { useT } from '../i18n/useT.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { COMMUNIQUES } from '../data/communiques.js';

function formatDate(iso, lang) {
  try {
    return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function withCldTransform(src, transforms) {
  return src.replace(/\/upload\/(?:[^/]+\/)*(v\d+\/)/, `/upload/${transforms}/$1`);
}

function videoPoster(src) {
  return withCldTransform(
    src.replace(/\.(mp4|mov|webm)(\?.*)?$/, '.jpg$2'),
    'w_960,q_auto:good,f_jpg'
  );
}

function videoStream(src) {
  return withCldTransform(src, 'w_960,q_auto:eco,vc_h264,f_mp4');
}

function RaceVideoPlayer({ src }) {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  const poster = videoPoster(src);
  const streamUrl = videoStream(src);

  const handleClick = () => {
    setPlaying(true);
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      v.play().catch(() => {});
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950">
      <video
        ref={videoRef}
        src={streamUrl}
        poster={poster}
        preload="auto"
        muted
        playsInline
        controls={playing}
        onCanPlay={() => setLoaded(true)}
        onPlaying={() => setLoaded(true)}
        className="block aspect-video w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={handleClick}
          aria-label="Play"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-mountain-950/20 transition-colors duration-300 hover:bg-mountain-950/30"
          />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-flame-500 text-white shadow-xl shadow-mountain-900/30 transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20">
            <Play
              className="h-7 w-7 translate-x-0.5 fill-white sm:h-8 sm:w-8"
              strokeWidth={0}
            />
          </span>
        </button>
      )}
      {playing && !loaded && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-mountain-950/55 backdrop-blur-sm">
          <Loader2 className="h-10 w-10 animate-spin text-white" strokeWidth={2.5} />
        </div>
      )}
    </div>
  );
}

export default function CommuniqueDetail() {
  const { slug } = useParams();
  const t = useT('communiques');
  const { lang } = useLanguage();
  const item = COMMUNIQUES.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return <Navigate to="/communiques" replace />;
  }

  const localized = item[lang] || item.fr;

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-mesh-soft pt-28 pb-24 sm:pt-32">
      {/* Blob accent discret */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-flame-200/35 blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <Link
          to="/communiques"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mountain-700 transition-colors hover:text-flame-600"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          {t.backToList}
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-8"
        >
          {/* En-tête + cover */}
          <div className="overflow-hidden rounded-3xl border-2 border-mountain-950 bg-white shadow-xl shadow-mountain-900/10">
            <figure className="relative aspect-[16/9] w-full bg-mountain-100">
              <img
                src={item.cover}
                alt={item.coverAlt}
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-mountain-950/80 via-mountain-950/20 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-flame-300">
                  {formatDate(item.date, lang)}
                </p>
                <h1 className="mt-2 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {localized.title}
                </h1>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-base">
                  {localized.subtitle}
                </p>
              </figcaption>
            </figure>

            {/* Bandeau méta */}
            <dl className="grid grid-cols-2 divide-x divide-y divide-mountain-200 sm:grid-cols-4 sm:divide-y-0">
              <div className="flex flex-col gap-1 p-5">
                <dt className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mountain-500">
                  <MapPin className="h-3 w-3" strokeWidth={2.5} />
                  {t.labels.location}
                </dt>
                <dd className="text-sm font-semibold text-mountain-950">
                  {item.location}
                </dd>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mountain-500">
                  {t.labels.distance}
                </dt>
                <dd className="font-mono text-sm font-semibold text-mountain-950">
                  {item.distance}
                </dd>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <dt className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mountain-500">
                  <Mountain className="h-3 w-3" strokeWidth={2.5} />
                  {t.labels.elevation}
                </dt>
                <dd className="font-mono text-sm font-semibold text-mountain-950">
                  {item.elevation}
                </dd>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <dt className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mountain-500">
                  <Clock className="h-3 w-3" strokeWidth={2.5} />
                  {t.labels.start}
                </dt>
                <dd className="font-mono text-sm font-semibold text-mountain-950">
                  {item.startTime}
                </dd>
              </div>
            </dl>
          </div>

          {/* Corps du communiqué */}
          <div className="mt-12 space-y-5">
            {localized.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-mountain-800 sm:text-[17px] ${
                  i === 0
                    ? "first-letter:float-left first-letter:mr-1.5 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.9] first-letter:text-flame-600"
                    : ''
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Résultats */}
          <section className="mt-16 overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 text-white">
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-flame-300">
                {localized.resultsTitle}
              </p>
            </div>
            <ul className="divide-y divide-white/10">
              {localized.results.map((r, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-4 px-6 py-4 sm:px-8"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mountain-300">
                    {r.label}
                  </span>
                  <span className="font-display text-lg font-bold text-white sm:text-xl">
                    {r.value}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Vidéo */}
          {item.video && (
            <section className="mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-600">
                {localized.videoTitle}
              </p>
              <div className="mt-4">
                <RaceVideoPlayer src={item.video} />
              </div>
            </section>
          )}

          {/* Photos */}
          {item.photos?.length > 0 && (
            <section className="mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-600">
                {localized.photosTitle}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {item.photos.map((p, i) => (
                  <li key={i} className="overflow-hidden rounded-xl border border-mountain-200 bg-mountain-100">
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-cover"
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </motion.article>
      </div>
    </main>
  );
}
