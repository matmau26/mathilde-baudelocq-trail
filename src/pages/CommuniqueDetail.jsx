import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Mountain,
  Clock,
  Play,
  Loader2,
  Trophy,
  Users,
  Hash,
} from 'lucide-react';
import { useT } from '../i18n/useT.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { COMMUNIQUES } from '../data/communiques.js';

function formatDateLong(iso, lang) {
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

function formatDateShort(iso) {
  // Toujours format mono-friendly : DD · MM · YYYY
  try {
    const d = new Date(iso);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${day} · ${month} · ${d.getFullYear()}`;
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

/* ----------------------------- VIDÉO ----------------------------- */

function RaceVideoPlayer({ src }) {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    setPlaying(true);
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      v.play().catch(() => {});
    }
  };

  return (
    <div className="mx-auto w-full max-w-[20rem] sm:max-w-xs">
      <div className="rounded-[2.25rem] border-2 border-flame-500 p-2 shadow-2xl shadow-mountain-900/20">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] bg-mountain-950">
          <video
            ref={videoRef}
            src={videoStream(src)}
            poster={videoPoster(src)}
            preload="auto"
            muted
            playsInline
            controls={playing}
            onCanPlay={() => setLoaded(true)}
            onPlaying={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full object-cover"
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
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-flame-500 text-white shadow-xl shadow-mountain-900/30 transition-transform duration-300 hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 fill-white" strokeWidth={0} />
              </span>
            </button>
          )}
          {playing && !loaded && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-mountain-950/55 backdrop-blur-sm">
              <Loader2 className="h-10 w-10 animate-spin text-white" strokeWidth={2.5} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------ HERO PLEIN ÉCRAN ------------------------ */

function CinemaHero({ item, localized, lang }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.92]);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[88svh] w-full overflow-hidden bg-mountain-950 text-white"
    >
      <motion.div
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <img
          src={item.cover}
          alt={item.coverAlt}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ opacity: veilOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-mountain-950/35 via-mountain-950/15 to-mountain-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,28,41,0.55)_100%)]"
      />

      <motion.div
        style={{ y: titleY }}
        className="relative flex min-h-[88svh] flex-col justify-end px-6 pb-12 pt-32 sm:px-10 sm:pb-16 sm:pt-36 lg:px-14"
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-flame-300 sm:text-[11px]"
          >
            <span>Communiqué N°01</span>
            <span aria-hidden="true" className="block h-px w-12 bg-flame-500/70" />
            <span className="text-white/80">{formatDateShort(item.date)}</span>
            <span aria-hidden="true" className="hidden h-px w-12 bg-white/30 sm:block" />
            <span className="hidden text-white/60 sm:inline">{item.location}</span>
          </motion.div>

          {/* Titre éditorial massif */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-5xl font-bold uppercase leading-[0.92] tracking-[-0.02em] sm:text-6xl lg:text-[5.5rem]"
          >
            {localized.title.split(' — ')[0]}
            <br />
            <span className="bg-gradient-to-r from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-transparent">
              {localized.title.split(' — ')[1] || ''}
            </span>
          </motion.h1>

          {/* Sub-line italique */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 max-w-2xl font-editorial text-lg italic leading-snug text-white/85 sm:text-2xl"
          >
            {localized.subtitle}
          </motion.p>

          {/* Excerpt — tease */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 max-w-2xl border-l-2 border-flame-500/80 pl-5 text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {localized.excerpt}
          </motion.p>

          {/* Date complète */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/55"
          >
            {formatDateLong(item.date, lang)}
          </motion.p>
        </div>
      </motion.div>

      {/* Indicateur scroll */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 sm:flex"
      >
        <span className="block h-8 w-px overflow-hidden bg-white/15">
          <span className="block h-full w-full animate-bounce-slow bg-gradient-to-b from-flame-400 to-transparent" />
        </span>
        Lire le récit
      </motion.div>
    </section>
  );
}

/* --------------------- BANDEAU MÉTA STICKY --------------------- */

function MetaStrip({ item, t }) {
  const items = [
    { icon: MapPin, label: t.labels.location, value: item.location },
    { icon: Hash, label: t.labels.distance, value: item.distance, mono: true },
    { icon: Mountain, label: t.labels.elevation, value: item.elevation, mono: true },
    { icon: Clock, label: t.labels.start, value: item.startTime, mono: true },
  ];
  return (
    <div className="sticky top-16 z-30 border-y border-mountain-200 bg-cream-50/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-stretch divide-x divide-mountain-200 overflow-x-auto px-6 sm:px-10">
        {items.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 px-4 py-3 sm:px-6 sm:py-4"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-flame-600" strokeWidth={2.5} />
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-mountain-500">
                  {m.label}
                </span>
                <span
                  className={`whitespace-nowrap text-sm font-semibold text-mountain-950 ${
                    m.mono ? 'font-mono' : ''
                  }`}
                >
                  {m.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------- BLOC RÉSULTATS DESIGN --------------------- */

function ResultsShowcase({ localized, item }) {
  // Identifie les 3 stats clés pour les mettre en valeur visuellement
  const findResult = (...keywords) =>
    localized.results.find((r) =>
      keywords.some((k) => r.label.toLowerCase().includes(k.toLowerCase()))
    );

  const time = findResult('temps', 'time');
  const women = findResult('femme', 'female');
  const scratch = findResult('scratch', 'overall');
  const category = findResult('catégorie', 'category');
  const utmbIdx = findResult('utmb');

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative my-16 overflow-hidden rounded-3xl border-2 border-mountain-950 bg-mountain-950 text-white shadow-2xl shadow-mountain-900/30 sm:my-20"
    >
      {/* Halo flame + photo cover en arrière-plan dimmé */}
      <div className="absolute inset-0 -z-10">
        <img
          src={item.cover}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-mountain-950/95 via-mountain-950/85 to-flame-900/60"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 right-1/3 h-[24rem] w-[24rem] rounded-full bg-flame-500/30 blur-[110px]"
        />
      </div>

      {/* En-tête */}
      <div className="border-b border-white/10 px-6 py-5 sm:px-10">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-flame-300 sm:text-[11px]">
            {localized.resultsTitle}
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 sm:block">
            Officiel · Organisateur
          </p>
        </div>
      </div>

      {/* Layout asymétrique : Temps géant à gauche / podium à droite / chiffres en pied */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* TEMPS — chiffre cyclopéen */}
        <div className="relative col-span-1 border-b border-white/10 px-6 py-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            {time?.label || 'Temps'}
          </p>
          <p className="mt-3 font-display text-7xl font-bold leading-[0.85] tracking-[-0.04em] text-white sm:text-8xl lg:text-[10rem]">
            <span className="bg-gradient-to-b from-white via-white to-flame-200 bg-clip-text text-transparent">
              {time?.value || '—'}
            </span>
          </p>
        </div>

        {/* PODIUM CATÉGORIE — mis en évidence */}
        <div className="relative col-span-1 flex flex-col justify-between gap-6 px-6 py-10 lg:col-span-5 lg:px-10 lg:py-14">
          {category && (
            <div className="rounded-2xl border border-flame-400/40 bg-flame-500/10 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flame-500 text-white shadow-lg shadow-flame-500/30">
                  <Trophy className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-flame-300">
                  {category.label}
                </span>
              </div>
              <p className="mt-5 font-display text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl">
                {category.value}
              </p>
              <p className="mt-3 text-sm text-white/70">
                Une référence solide pour valider le passage au niveau Élite.
              </p>
            </div>
          )}

          {women && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                <Users
                  className="mr-1.5 inline-block h-3 w-3 align-middle text-flame-300"
                  strokeWidth={2.5}
                />
                {women.label}
              </p>
              <p className="mt-2 bg-gradient-to-r from-flame-400 via-flame-300 to-solar-300 bg-clip-text font-display text-5xl font-bold leading-none tracking-tight text-transparent sm:text-6xl">
                {women.value}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Stats secondaires en pied */}
      <div className="grid grid-cols-1 divide-x divide-y divide-white/10 border-t border-white/10 sm:grid-cols-2">
        {scratch && (
          <div className="flex items-center justify-between px-6 py-5 sm:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {scratch.label}
            </span>
            <span className="font-mono text-2xl font-bold tabular-nums text-white sm:text-3xl">
              {scratch.value}
            </span>
          </div>
        )}
        {utmbIdx && (
          <div className="flex items-center justify-between px-6 py-5 sm:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {utmbIdx.label}
            </span>
            <span className="font-display text-2xl font-bold text-white sm:text-3xl">
              {utmbIdx.value}
              <span className="ml-1 font-mono text-sm font-normal text-white/50">pts</span>
            </span>
          </div>
        )}
      </div>
    </motion.section>
  );
}

/* ----------------------- GALERIE EN MOSAÏQUE ----------------------- */

function PhotoMosaic({ photos, title }) {
  if (!photos || photos.length === 0) return null;
  // Layout : 1 grande + 2 petites empilées
  const [big, ...rest] = photos;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="my-16 sm:my-20"
    >
      <div className="mb-6 flex items-end justify-between gap-3">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-flame-600 sm:text-[11px]">
          {title}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mountain-500">
          {photos.length} clichés
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12">
        {/* Grande photo */}
        <figure className="relative overflow-hidden rounded-2xl border border-mountain-200 bg-mountain-100 lg:col-span-8">
          <div className="aspect-[4/3] w-full">
            <img
              src={big.src}
              alt={big.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mountain-950/80 via-mountain-950/30 to-transparent p-5">
            <p className="font-editorial text-base italic text-white sm:text-lg">
              {big.alt}
            </p>
          </figcaption>
        </figure>

        {/* Petites photos */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-4">
          {rest.map((p, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-2xl border border-mountain-200 bg-mountain-100"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mountain-950/80 to-transparent p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
                  {p.alt}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ----------------------- BLOC VIDÉO ----------------------- */

function VideoSection({ src, localized }) {
  if (!src) return null;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="my-16 grid grid-cols-1 gap-10 sm:my-20 lg:grid-cols-12 lg:items-center lg:gap-14"
    >
      <div className="lg:col-span-5">
        <RaceVideoPlayer src={src} />
      </div>
      <div className="lg:col-span-7">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-flame-600 sm:text-[11px]">
          {localized.videoTitle}
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-mountain-950 sm:text-4xl lg:text-5xl">
          {localized.videoHeading1}
          <br />
          <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
            {localized.videoHeading2}
          </span>
        </h3>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-mountain-700 sm:text-lg">
          {localized.videoTagline}
        </p>
      </div>
    </motion.section>
  );
}

/* -------------------------- PAGE ROOT -------------------------- */

export default function CommuniqueDetail() {
  const { slug } = useParams();
  const t = useT('communiques');
  const { lang } = useLanguage();
  const item = COMMUNIQUES.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) return <Navigate to="/communiques" replace />;
  const localized = item[lang] || item.fr;

  return (
    <main className="bg-cream-50 text-mountain-950">
      {/* Lien retour fixe en haut à gauche */}
      <Link
        to="/communiques"
        className="fixed left-4 top-4 z-40 inline-flex items-center gap-2 rounded-full border border-mountain-200 bg-white/85 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-mountain-700 backdrop-blur-md transition-all hover:border-mountain-950 hover:text-mountain-950 sm:left-6 sm:top-6"
      >
        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
        {t.backToList}
      </Link>

      {/* HERO PLEIN ÉCRAN */}
      <CinemaHero item={item} localized={localized} lang={lang} />

      {/* MÉTA STICKY */}
      <MetaStrip item={item} t={t} />

      {/* CORPS — long-form éditorial */}
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        {/* Lead paragraph (1er paragraphe en plus gros) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-balance text-xl leading-relaxed text-mountain-800 sm:text-2xl"
        >
          <span className="float-left mr-3 mt-1 font-display text-7xl font-bold leading-[0.85] tracking-tight text-flame-600 sm:text-8xl">
            {localized.paragraphs[0]?.charAt(0)}
          </span>
          {localized.paragraphs[0]?.slice(1)}
        </motion.p>

        {/* Photo inline pour rompre le rythme */}
        {item.photos?.[0] && (
          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="my-12 overflow-hidden rounded-2xl border border-mountain-200 bg-mountain-100 sm:my-16"
          >
            <div className="aspect-[16/10] w-full">
              <img
                src={item.photos[0].src}
                alt={item.photos[0].alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="bg-mountain-950 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
              {item.photos[0].alt}
            </figcaption>
          </motion.figure>
        )}

        {/* Paragraphes 2 et suivants */}
        {localized.paragraphs.slice(1).map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-base leading-relaxed text-mountain-800 sm:mt-7 sm:text-[17px]"
          >
            {p}
          </motion.p>
        ))}
      </article>

      {/* RÉSULTATS — bloc design asymétrique */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <ResultsShowcase localized={localized} item={item} />
      </div>

      {/* VIDÉO */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <VideoSection src={item.video} localized={localized} />
      </div>

      {/* GALERIE */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <PhotoMosaic photos={item.photos} title={localized.photosTitle} />
      </div>

      {/* FOOTER CTA */}
      <section className="border-t border-mountain-200 bg-mountain-950 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center sm:px-8 sm:py-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-flame-400">
              Et après ?
            </p>
            <p className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
              Discutons d’un projet
              <br className="hidden sm:block" /> sur la durée.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/communiques"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white/15"
            >
              <ArrowLeft className="h-3 w-3" strokeWidth={2.5} />
              {t.backToList}
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-flame-500 px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-flame-500/40 transition-colors hover:bg-flame-600"
            >
              Prendre contact
              <ArrowRight
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
