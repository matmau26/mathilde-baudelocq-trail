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
  Trophy,
  Users,
  Hash,
} from 'lucide-react';
import { useT } from '../i18n/useT.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { COMMUNIQUES } from '../data/communiques.js';
import Picture from '../components/Picture.jsx';

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

// Insère les transformations juste après /upload/. Le segment de version
// (/v1234/) est optionnel côté Cloudinary : on le préserve quand il est là,
// sans quoi une URL copiée sans version traverserait sans être optimisée.
function withCldTransform(src, transforms) {
  return src.replace(
    /\/upload\/(?:[^/]+\/)*?(v\d+\/)?([^/]+)$/,
    `/upload/${transforms}/$1$2`
  );
}

function videoPoster(src) {
  return withCldTransform(
    src.replace(/\.(mp4|mov|webm)(\?.*)?$/, '.jpg$2'),
    'w_540,q_auto:good,f_jpg'
  );
}

// Reconstitue cloud_name et public_id depuis l'URL de diffusion, pour alimenter
// le lecteur embarqué sans changer le format stocké dans data/communiques.js.
// Suppose un public_id sans dossier — c'est le cas de tous les uploads du compte.
function cloudinaryEmbedUrl(src) {
  const m = src.match(/res\.cloudinary\.com\/([^/]+)\/video\/upload\/(.+)$/);
  if (!m) return null;
  const cloudName = m[1];
  const publicId = m[2].split('/').pop().replace(/\.(mp4|mov|webm)(\?.*)?$/, '');
  return (
    'https://player.cloudinary.com/embed/' +
    `?cloud_name=${encodeURIComponent(cloudName)}` +
    `&public_id=${encodeURIComponent(publicId)}` +
    '&player[autoplay]=true'
  );
}

/* ----------------------------- VIDÉO ----------------------------- */

function RaceVideoPlayer({ src, playLabel }) {
  const [started, setStarted] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const poster = videoPoster(src);
  const embed = cloudinaryEmbedUrl(src);

  return (
    <div className="mx-auto w-full max-w-[20rem] sm:max-w-xs">
      <div className="rounded-[2.25rem] border-2 border-flame-500 p-2 shadow-2xl shadow-mountain-900/20">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] bg-mountain-950">
          {/* Le lecteur Cloudinary gère le streaming adaptatif, là où une balise
              <video> force un transcodage complet à la première requête. On ne
              charge son iframe qu'au clic : coût nul tant que personne ne
              regarde la vidéo. */}
          {started && embed ? (
            <iframe
              src={embed}
              title={src}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <>
              {!posterFailed && (
                <img
                  src={poster}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  onError={() => setPosterFailed(true)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <button
                type="button"
                onClick={() => setStarted(true)}
                aria-label={playLabel}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------ HERO PLEIN ÉCRAN ------------------------ */

function CinemaHero({ item, localized, lang, t }) {
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
        <Picture
          src={item.cover}
          alt={item.coverAlt}
          loading="eager"
          fetchPriority="high"
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

      {/* Lien retour — placé sous le header fixe pour rester cliquable */}
      <Link
        to="/communiques"
        className="absolute left-4 top-20 z-20 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white/20 sm:left-6"
      >
        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
        {t.backToList}
      </Link>

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
            <span>
              {t.pressNumber} {item.number}
            </span>
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
        {t.scrollHint}
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
      <div className="mx-auto flex max-w-3xl items-stretch justify-center divide-x divide-mountain-200 overflow-x-auto px-3 sm:px-8">
        {items.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={i}
              className="flex shrink-0 items-center gap-1.5 px-2.5 py-2.5 sm:gap-3 sm:px-6 sm:py-4"
            >
              <Icon
                className="hidden h-3.5 w-3.5 shrink-0 text-flame-600 sm:block"
                strokeWidth={2.5}
              />
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-mountain-500 sm:tracking-[0.25em]">
                  {m.label}
                </span>
                <span
                  className={`whitespace-nowrap text-[12px] font-semibold text-mountain-950 sm:text-sm ${
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

function ResultsShowcase({ localized, item, t }) {
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
        <Picture
          src={item.cover}
          alt=""
          aria-hidden="true"
          loading="lazy"
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
      <div className="border-b border-white/10 px-6 py-4 sm:px-10">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-flame-300 sm:text-[11px]">
            {localized.resultsTitle}
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 sm:block">
            {t.resultsSource}
          </p>
        </div>
      </div>

      {/* Layout asymétrique : Temps géant à gauche / podium à droite / chiffres en pied */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* TEMPS — chiffre cyclopéen */}
        <div className="relative col-span-1 border-b border-white/10 px-6 py-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            {time?.label || 'Temps'}
          </p>
          <p className="mt-2 font-display text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-b from-white via-white to-flame-200 bg-clip-text text-transparent">
              {time?.value || '—'}
            </span>
          </p>
        </div>

        {/* PODIUM CATÉGORIE — mis en évidence */}
        <div
          className={`relative col-span-1 flex flex-col gap-5 px-6 py-8 lg:col-span-5 lg:px-10 lg:py-10 ${
            category ? 'justify-between' : 'justify-center'
          }`}
        >
          {category && (
            <div className="rounded-2xl border border-flame-400/40 bg-flame-500/10 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flame-500 text-white shadow-lg shadow-flame-500/30">
                  <Trophy className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-flame-300">
                  {category.label}
                </span>
              </div>
              <p className="mt-4 font-display text-3xl font-bold uppercase leading-none tracking-tight text-white sm:text-4xl">
                {category.value}
              </p>
              <p className="mt-3 text-sm text-white/70">
                {t.categoryNote}
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
              <p className="mt-2 bg-gradient-to-r from-flame-400 via-flame-300 to-solar-300 bg-clip-text font-display text-4xl font-bold leading-none tracking-tight text-transparent sm:text-5xl">
                {women.value}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Stats secondaires en pied */}
      <div className="grid grid-cols-1 divide-x divide-y divide-white/10 border-t border-white/10 sm:grid-cols-2">
        {scratch && (
          <div className="flex items-center justify-between px-6 py-4 sm:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {scratch.label}
            </span>
            <span className="font-mono text-xl font-bold tabular-nums text-white sm:text-2xl">
              {scratch.value}
            </span>
          </div>
        )}
        {utmbIdx && (
          <div className="flex items-center justify-between px-6 py-4 sm:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {utmbIdx.label}
            </span>
            <span className="font-display text-xl font-bold text-white sm:text-2xl">
              {utmbIdx.value}
              <span className="ml-1 font-mono text-sm font-normal text-white/50">pts</span>
            </span>
          </div>
        )}
      </div>
    </motion.section>
  );
}

/* -------------------------- CITATION -------------------------- */

// Optionnel : rendu uniquement si le communiqué porte un bloc `quote`.
function QuoteBlock({ quote }) {
  if (!quote || !quote.paragraphs?.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="my-16 sm:my-20"
    >
      <figure className="relative overflow-hidden rounded-3xl border-2 border-mountain-950 bg-white p-8 shadow-xl shadow-mountain-900/5 sm:p-12">
        {/* Guillemet en filigrane, même logique que les codes de Partnership */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 right-4 select-none font-editorial text-[14rem] italic leading-none text-flame-500/10 sm:right-10"
        >
          ”
        </span>

        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-flame-600 sm:text-[11px]">
          {quote.label}
        </p>

        <blockquote className="relative mt-6 space-y-5 border-l-2 border-flame-500 pl-6 sm:pl-8">
          {quote.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-editorial text-base italic leading-relaxed text-mountain-800 sm:text-lg"
            >
              {p}
            </p>
          ))}
        </blockquote>

        <figcaption className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-mountain-500">
          — {quote.attribution}
        </figcaption>
      </figure>
    </motion.section>
  );
}

/* --------------------- TABLEAU DES POINTS DE PASSAGE --------------------- */

// Optionnel, comme la citation. Le signe du `delta` suffit à colorer la
// variation : pas de drapeau supplémentaire à tenir à jour dans les données.
function SplitsTable({ localized }) {
  const rows = localized.splits;
  if (!rows || rows.length === 0) return null;
  const h = localized.splitsHeaders;
  const th =
    'whitespace-nowrap px-3 py-3 text-[10px] font-bold uppercase tracking-[0.2em] sm:px-4';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="my-16 sm:my-20"
    >
      <div className="mb-6 max-w-2xl">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-flame-600 sm:text-[11px]">
          {localized.splitsTitle}
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-mountain-950 sm:text-4xl">
          {localized.splitsHeading1}
          <br />
          <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
            {localized.splitsHeading2}
          </span>
        </h3>
      </div>

      {/* Table large : défilement horizontal contenu, jamais la page entière */}
      <div className="overflow-x-auto overscroll-x-contain rounded-2xl border-2 border-mountain-950 bg-white">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-mountain-950 text-white">
              <th className={th}>{h.point}</th>
              <th className={`${th} hidden sm:table-cell`}>{h.km}</th>
              <th className={th}>{h.time}</th>
              <th className={`${th} bg-flame-500`}>{h.scratch}</th>
              <th className={th}>{h.women}</th>
              <th className={`${th} hidden lg:table-cell`}>{h.elevation}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s, i) => {
              const isFinish = i === rows.length - 1;
              const gained = s.delta?.startsWith('+');
              return (
                <tr
                  key={i}
                  className={`border-t border-mountain-200 transition-colors ${
                    isFinish ? 'bg-flame-50' : 'hover:bg-mountain-50'
                  }`}
                >
                  <td className="px-3 py-3 align-top sm:px-4">
                    <span
                      className={`text-[13px] leading-snug ${
                        isFinish
                          ? 'font-bold text-mountain-950'
                          : 'font-semibold text-mountain-900'
                      }`}
                    >
                      {s.point}
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-3 align-top font-mono text-xs text-mountain-500 sm:table-cell sm:px-4">
                    {s.km}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 align-top font-mono text-[13px] font-semibold text-mountain-900 sm:px-4">
                    {s.time}
                  </td>
                  <td className="whitespace-nowrap bg-flame-50/60 px-3 py-3 align-top sm:px-4">
                    <span className="font-mono text-[13px] font-bold text-mountain-950">
                      {s.scratch}
                    </span>
                    {s.delta && (
                      <span
                        className={`ml-1.5 font-mono text-[11px] font-bold ${
                          gained ? 'text-flame-600' : 'text-mountain-400'
                        }`}
                      >
                        {s.delta}
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 align-top font-mono text-[13px] text-mountain-700 sm:px-4">
                    {s.women}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-3 align-top font-mono text-xs text-mountain-500 lg:table-cell sm:px-4">
                    {s.elevation}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {localized.splitsFootnote && (
        <p className="mt-4 text-[10px] uppercase tracking-widest text-mountain-500">
          {localized.splitsFootnote}
        </p>
      )}
    </motion.section>
  );
}

/* ----------------------- GALERIE EN MOSAÏQUE ----------------------- */

function PhotoMosaic({ photos, alts, title, t }) {
  if (!photos || photos.length === 0) return null;
  // Layout : 1 grande + 2 petites empilées
  const altFor = (i) => alts?.[i] || photos[i]?.alt || '';
  const [big, ...rest] = photos;
  const bigAlt = altFor(0);

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
          {photos.length} {t.clichesLabel}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12">
        {/* Grande photo */}
        <figure className="relative overflow-hidden rounded-2xl border border-mountain-200 bg-mountain-100 lg:col-span-8">
          <div className="aspect-[4/3] w-full">
            <Picture
              src={big.src}
              alt={bigAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mountain-950/80 to-transparent p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/90">
              {bigAlt}
            </p>
          </figcaption>
        </figure>

        {/* Petites photos */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-4">
          {rest.map((p, i) => {
            const a = altFor(i + 1);
            return (
              <figure
                key={i}
                className="relative overflow-hidden rounded-2xl border border-mountain-200 bg-mountain-100"
              >
                <div className="aspect-[4/3] w-full">
                  <Picture
                    src={p.src}
                    alt={a}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mountain-950/80 to-transparent p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/90">
                    {a}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

/* ----------------------- BLOC VIDÉO ----------------------- */

function VideoSection({ videos, localized, t }) {
  const list = Array.isArray(videos) ? videos.filter(Boolean) : [];
  if (list.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="my-16 sm:my-20"
    >
      <div className="max-w-2xl">
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

      <div
        className={`mt-10 grid gap-8 sm:gap-10 ${
          list.length > 1 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
        }`}
      >
        {list.map((src, i) => (
          <RaceVideoPlayer key={src || i} src={src} playLabel={t.playLabel} />
        ))}
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
      {/* HERO PLEIN ÉCRAN */}
      <CinemaHero item={item} localized={localized} lang={lang} t={t} />

      {/* MÉTA STICKY */}
      <MetaStrip item={item} t={t} />

      {/* CORPS — long-form éditorial */}
      <article className="mx-auto max-w-2xl px-6 py-14 sm:px-8 sm:py-16">
        {/* Lead paragraph (1er paragraphe en plus gros) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-balance text-lg leading-relaxed text-mountain-800 sm:text-xl"
        >
          <span className="float-left mr-3 mt-1 font-display text-6xl font-bold leading-[0.85] tracking-tight text-flame-600 sm:text-7xl">
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
              <Picture
                src={item.photos[0].src}
                alt={localized.photoAlts?.[0] || item.photos[0].alt || ''}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="bg-mountain-950 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
              {localized.photoAlts?.[0] || item.photos[0].alt || ''}
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
            className="mt-6 text-[15px] leading-[1.8] text-mountain-800 sm:mt-7 sm:text-base"
          >
            {p}
          </motion.p>
        ))}
      </article>

      {/* CITATION — largeur du récit, dans la continuité du texte */}
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <QuoteBlock quote={localized.quote} />
      </div>

      {/* RÉSULTATS — bloc design asymétrique */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <ResultsShowcase localized={localized} item={item} t={t} />
      </div>

      {/* POINTS DE PASSAGE */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SplitsTable localized={localized} />
      </div>

      {/* VIDÉO */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <VideoSection videos={item.videos} localized={localized} t={t} />
      </div>

      {/* GALERIE */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <PhotoMosaic
          photos={item.photos}
          alts={localized.photoAlts}
          title={localized.photosTitle}
          t={t}
        />
      </div>

      {/* FOOTER CTA */}
      <section className="border-t border-mountain-200 bg-mountain-950 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center sm:px-8 sm:py-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-flame-400">
              {t.nextEyebrow}
            </p>
            <p className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
              {t.nextTitle1}
              <br className="hidden sm:block" /> {t.nextTitle2}
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
              {t.nextCta}
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
