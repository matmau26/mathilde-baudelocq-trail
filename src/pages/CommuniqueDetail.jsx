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

/* ------------------------- CORPS RÉCIT ------------------------- */

// Renderer du corps de récit. Chaque `paragraph` peut être :
//  - une string  → paragraphe normal (le premier reçoit la capitale ornée)
//  - { heading, body } → titre de chapitre + corps
//  - { type: 'pullquote', text } → citation éditoriale sur toute la largeur
//  - { type: 'stat', value, kicker?, label? } → chiffre-clé en pull-out
//  - { type: 'photo', index } → photo pleine largeur, tirée de `item.photos[index]`
// La photo inline "par défaut" (celle sous la capitale) et la mosaïque finale
// sont désactivées automatiquement quand le récit contient déjà des marqueurs
// `{type:'photo'}` — c'est le cas d'UTV, où les photos ponctuent l'histoire.

function ChapterHeading({ index, label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      className="mt-16 sm:mt-20"
    >
      <div className="mb-4 flex items-center gap-3 sm:mb-5">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-flame-600">
          {label} {String(index).padStart(2, '0')}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-flame-500/30" />
      </div>
      <h3 className="font-display text-[26px] font-semibold uppercase leading-[1.05] tracking-tight text-mountain-950 sm:text-[32px]">
        {title}
      </h3>
    </motion.div>
  );
}

function PullQuote({ text }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      className="relative my-12 border-l-2 border-flame-500 pl-6 sm:my-14 sm:pl-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-1 -top-6 select-none font-editorial text-[5rem] italic leading-none text-flame-500/25 sm:-top-8 sm:text-[6rem]"
      >
        “
      </span>
      <p className="relative font-editorial text-[20px] italic leading-[1.5] text-mountain-900 sm:text-[24px]">
        {text}
      </p>
    </motion.blockquote>
  );
}

function PullStat({ value, kicker, label }) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="my-14 border-y border-mountain-200 py-8 text-center sm:my-16 sm:py-10"
    >
      {kicker && (
        <figcaption className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-flame-600 sm:text-[11px]">
          {kicker}
        </figcaption>
      )}
      <p
        className={`font-display text-[76px] font-bold leading-none tracking-[-0.04em] sm:text-[112px] ${
          kicker ? 'mt-3' : ''
        }`}
      >
        <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
          {value}
        </span>
      </p>
      {label && (
        <p className="mx-auto mt-4 max-w-md font-mono text-[10px] uppercase tracking-[0.24em] text-mountain-500 sm:text-[11px]">
          {label}
        </p>
      )}
    </motion.figure>
  );
}

function InlinePhoto({ src, alt }) {
  if (!src) return null;
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="-mx-6 my-14 overflow-hidden bg-mountain-100 sm:mx-0 sm:my-16 sm:rounded-2xl sm:border sm:border-mountain-200"
    >
      {/* Ratio libre : on laisse l'image respirer dans son cadre naturel.
          Forcer un aspect landscape (16:10) rognait au centre les portraits
          verticaux (iPhone) — inacceptable pour un shot d'effort. */}
      <Picture
        src={src}
        alt={alt}
        loading="lazy"
        className="mx-auto block h-auto max-h-[80vh] w-full object-contain"
      />
      {alt && (
        <figcaption className="px-6 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-mountain-500 sm:px-4 sm:tracking-[0.25em]">
          {alt}
        </figcaption>
      )}
    </motion.figure>
  );
}

function BodyParagraph({ children, className = '' }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mt-6 text-[15px] leading-[1.8] text-mountain-800 sm:mt-7 sm:text-[15.5px] ${className}`}
    >
      {children}
    </motion.p>
  );
}

function ArticleBody({ item, localized, t }) {
  const paragraphs = localized.paragraphs || [];
  const first = paragraphs[0];
  const leadText = typeof first === 'string' ? first : first?.body || '';

  // Compte des chapitres — attribué à la volée pour ne pas hardcoder
  let chapterIndex = 0;
  // Détecte si l'article contient déjà des photos inline
  const hasInlinePhoto = paragraphs.some(
    (p) => p && typeof p === 'object' && p.type === 'photo'
  );

  return (
    <article className="mx-auto max-w-[36rem] px-6 py-14 sm:px-8 sm:py-16">
      {/* LEAD — capitale ornée */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-balance text-[16px] leading-[1.7] text-mountain-800 sm:text-[17px]"
      >
        <span className="float-left mr-3 mt-1 font-editorial text-[3.75rem] font-medium leading-[0.85] tracking-tight text-flame-600 sm:text-[4.5rem]">
          {leadText.charAt(0)}
        </span>
        {leadText.slice(1)}
      </motion.p>

      {/* Photo inline "par défaut" — désactivée quand l'article place ses
          propres photos via {type:'photo'} */}
      {!hasInlinePhoto && item.photos?.[0] && (
        <InlinePhoto
          src={item.photos[0].src}
          alt={localized.photoAlts?.[0] || item.photos[0].alt || ''}
        />
      )}

      {/* Rendu du reste du récit */}
      {paragraphs.slice(1).map((p, i) => {
        // Marqueur explicite
        if (p && typeof p === 'object' && p.type) {
          if (p.type === 'pullquote') {
            return <PullQuote key={`pq-${i}`} text={p.text} />;
          }
          if (p.type === 'stat') {
            return (
              <PullStat
                key={`st-${i}`}
                value={p.value}
                kicker={p.kicker}
                label={p.label}
              />
            );
          }
          if (p.type === 'photo') {
            const idx = p.index ?? 0;
            const src = item.photos?.[idx]?.src;
            const alt =
              localized.photoAlts?.[idx] || item.photos?.[idx]?.alt || '';
            return <InlinePhoto key={`ph-${i}`} src={src} alt={alt} />;
          }
        }
        // Chapitre { heading, body }
        if (p && typeof p === 'object' && p.body) {
          chapterIndex += 1;
          return (
            <div key={`ch-${i}`}>
              <ChapterHeading
                index={chapterIndex}
                label={t.chapterLabel || 'Chapitre'}
                title={p.heading}
              />
              <BodyParagraph className="!mt-5 sm:!mt-6">{p.body}</BodyParagraph>
            </div>
          );
        }
        // Paragraphe simple
        return <BodyParagraph key={`p-${i}`}>{p}</BodyParagraph>;
      })}
    </article>
  );
}

/* --------------------- BLOC RÉSULTATS DESIGN --------------------- */

function ResultsShowcase({ localized, item, t }) {
  const findResult = (...keywords) =>
    localized.results.find((r) =>
      keywords.some((k) => r.label.toLowerCase().includes(k.toLowerCase()))
    );

  const time = findResult('temps', 'time');
  const category = findResult('catégorie', 'category');
  // Tout ce qui n'est pas Temps + Catégorie devient une "stat secondaire",
  // rangée dans une grille — support automatique de nouveaux champs par
  // ordre de saisie.
  const secondary = (localized.results || []).filter(
    (r) => r !== time && r !== category
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative my-16 overflow-hidden rounded-3xl border border-mountain-200 bg-gradient-to-b from-white via-cream-50 to-white shadow-xl shadow-mountain-900/5 sm:my-20"
    >
      {/* Halo flame subtil — accent visuel sans envahir */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 hidden md:block"
      >
        <div className="absolute -top-40 right-1/4 h-[24rem] w-[24rem] rounded-full bg-flame-300/25 blur-[110px]" />
        <div className="absolute -top-24 left-1/4 h-[18rem] w-[18rem] rounded-full bg-solar-300/20 blur-[100px]" />
      </div>

      {/* En-tête */}
      <div className="relative border-b border-mountain-200/70 px-6 py-5 sm:px-10">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-flame-600 sm:text-[11px]">
            {localized.resultsTitle}
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-mountain-400 sm:block">
            {t.resultsSource}
          </p>
        </div>
      </div>

      {/* CHRONO — chiffre-héros */}
      <div className="relative border-b border-mountain-200/70 px-6 py-12 text-center sm:px-10 sm:py-16">
        {time?.label && (
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-mountain-500 sm:text-[11px]">
            {time.label}
          </p>
        )}
        <p className="mt-4 font-display font-bold leading-[0.9] tracking-[-0.04em] sm:mt-5">
          <span className="bg-gradient-to-r from-mountain-950 via-flame-600 to-solar-500 bg-clip-text text-[64px] text-transparent sm:text-[104px] lg:text-[128px]">
            {time?.value || '—'}
          </span>
        </p>
        {category && (
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-flame-500 px-4 py-2 text-white shadow-lg shadow-flame-500/30 sm:mt-10 sm:px-5 sm:py-2.5">
            <Trophy className="h-4 w-4" strokeWidth={2.5} />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] sm:text-[11px]">
              {category.label} · {category.value}
            </span>
          </div>
        )}
        {category && t.categoryNote && (
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-mountain-600 sm:text-sm">
            {t.categoryNote}
          </p>
        )}
      </div>

      {/* GRILLE — stats secondaires */}
      {secondary.length > 0 && (
        <div className="relative grid grid-cols-2 divide-x divide-y divide-mountain-200/70 sm:grid-cols-3">
          {secondary.map((s, i) => (
            <div
              key={s.label + i}
              className="flex flex-col gap-1.5 px-5 py-6 sm:px-8 sm:py-7"
            >
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.24em] text-mountain-500 sm:text-[10px] sm:tracking-[0.28em]">
                {s.label}
              </span>
              <span
                className={`font-display font-bold leading-none tracking-tight text-mountain-950 ${
                  String(s.value || '').length > 6
                    ? 'text-[20px] sm:text-[24px]'
                    : 'text-[26px] sm:text-[32px]'
                }`}
              >
                {s.value}
              </span>
              {s.sub && (
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-mountain-400 sm:text-[10px]">
                  {s.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
}

/* -------------------------- CITATION -------------------------- */

// Optionnel : rendu uniquement si le communiqué porte un bloc `quote`.
// Style « magazine » — pas d'encart, guillemet ornemental, Playfair italique
// généreux, filet flame avant la signature en Oswald.
function QuoteBlock({ quote }) {
  if (!quote || !quote.paragraphs?.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="my-20 sm:my-24"
    >
      <div className="relative">
        {/* Guillemet ornemental */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-1 -top-14 select-none font-editorial text-[9rem] italic leading-none text-flame-500/20 sm:-left-2 sm:-top-20 sm:text-[13rem]"
        >
          “
        </span>

        <p className="relative font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-flame-600 sm:text-[11px]">
          {quote.label}
        </p>

        <blockquote className="relative mt-6 space-y-5 sm:mt-8 sm:space-y-6">
          {quote.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`font-editorial italic leading-[1.5] text-mountain-900 ${
                i === 0
                  ? 'text-[22px] sm:text-[28px]'
                  : 'text-[18px] sm:text-[21px]'
              }`}
            >
              {p}
            </p>
          ))}
        </blockquote>

        <div className="relative mt-10 flex items-center gap-4 sm:mt-12">
          <span aria-hidden="true" className="h-px w-12 bg-flame-500 sm:w-16" />
          <figcaption className="font-display text-[13px] font-bold uppercase tracking-[0.22em] text-mountain-950 sm:text-sm">
            {quote.attribution}
          </figcaption>
        </div>
      </div>
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

  // Si le récit tisse déjà ses propres photos via {type:'photo'}, on masque la
  // mosaïque finale — elles seraient dupliquées.
  const hasInlinePhoto = (localized.paragraphs || []).some(
    (p) => p && typeof p === 'object' && p.type === 'photo'
  );

  return (
    <main className="bg-cream-50 text-mountain-950">
      {/* HERO PLEIN ÉCRAN */}
      <CinemaHero item={item} localized={localized} lang={lang} t={t} />

      {/* MÉTA STICKY */}
      <MetaStrip item={item} t={t} />

      {/* CORPS — long-form éditorial : chapitres numérotés, photos et
          pull-quotes tissés dans le récit pour rythmer la lecture. */}
      <ArticleBody item={item} localized={localized} t={t} />

      {/* CITATION — largeur du récit, dans la continuité du texte */}
      <div className="mx-auto max-w-[36rem] px-6 sm:px-8">
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

      {/* GALERIE — masquée si les photos sont déjà tissées dans le récit */}
      {!hasInlinePhoto && (
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <PhotoMosaic
            photos={item.photos}
            alts={localized.photoAlts}
            title={localized.photosTitle}
            t={t}
          />
        </div>
      )}

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
