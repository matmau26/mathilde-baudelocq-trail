import { useEffect, useRef, useState } from 'react';
import { useT } from '../i18n/useT.js';

const GRV_VIDEO_SRC =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777988768/2026_GRV_Mathilde_sml50y.mov';
const MMB_VIDEO_SRC =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/copy_5E427A80-ECCC-4DF5-9DD7-C0366539F52E_vm74tz.mov';

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
    'w_960,q_auto:good,f_jpg'
  );
}

function videoStream(src) {
  return withCldTransform(src, 'w_960,q_auto:eco,vc_h264,f_mp4');
}

function shouldPreload() {
  if (typeof navigator === 'undefined') return true;
  const c =
    navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!c) return true;
  if (c.saveData) return false;
  if (c.effectiveType === 'slow-2g' || c.effectiveType === '2g') return false;
  return true;
}

function HighlightVideo({ src, alt }) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const poster = videoPoster(src);

  useEffect(() => {
    if (!wrapperRef.current || mounted) return;
    if (!shouldPreload()) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(wrapperRef.current);
    return () => io.disconnect();
  }, [mounted]);

  // Belt-and-suspenders : certains navigateurs ignorent `loop` sur des flux
  // Cloudinary issus d'un .mov. On force le redémarrage à la fin.
  const handleEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  // Si la lecture est interrompue (onglet inactif, etc.), on relance dès que
  // l'élément redevient visible / chargé.
  const handleLoadedData = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  };

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      {mounted ? (
        <video
          ref={videoRef}
          src={videoStream(src)}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onEnded={handleEnded}
          onLoadedData={handleLoadedData}
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img
          src={poster}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

// Une course de référence : le bloc texte à gauche, la vidéo en boucle à
// droite. `race` est la sous-section de traduction correspondante, ce qui
// permet d'aligner deux courses sur exactement la même mise en page.
function RaceHighlight({ race, videoSrc, index }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-2 border-mountain-950 bg-mountain-950 lg:grid-cols-12">
      <article className="relative bg-white p-8 sm:p-10 lg:col-span-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-flame-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            {race.highlightPill}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-mountain-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-700">
            {race.seasonPill}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-mountain-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
            {race.datePill}
          </span>
        </div>

        <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-5xl">
          {race.raceTitle1}
          <br />
          {race.raceTitle2}
        </h3>
        <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-mountain-600">
          {race.raceSub}
        </p>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-mountain-800">
          <span className="bg-gradient-to-r from-flame-600 to-flame-500 bg-clip-text font-display text-3xl font-bold text-transparent">
            {race.bigStat}
          </span>
          {race.bigStatExplain}
        </p>

        <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-transparent bg-transparent">
          {race.stats.map((stat, i) => (
            <div key={i} className="bg-white p-2.5 sm:p-4">
              <dt className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-wider text-mountain-500 sm:text-[10px] sm:tracking-widest">
                {stat.label}
              </dt>
              <dd
                className={`mt-1 whitespace-nowrap ${i === 1 ? 'font-mono' : 'font-display'} text-base font-bold sm:text-2xl ${
                  i === 0 ? 'text-flame-600' : 'text-mountain-950'
                }`}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </article>

      <figure className="relative min-h-[280px] overflow-hidden bg-mountain-950 lg:col-span-5">
        <HighlightVideo src={videoSrc} alt={race.photoAlt} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-mountain-950/80 via-mountain-950/10 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-flame-300">
              {race.photoEyebrow}
            </p>
            <p className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-white">
              {race.photoCaption}
            </p>
          </div>
          <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur">
            {index}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export default function Palmares() {
  const t = useT('palmares');
  return (
    <section
      id="palmares"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-soft py-24 sm:py-32"
    >
      {/* Blob accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute -top-20 right-1/4 h-[24rem] w-[24rem] rounded-full bg-flame-200/40 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* En-tête */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-600">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-mountain-950 sm:text-6xl">
              {t.title1}
              <br />
              <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            {t.kicker}
          </p>
        </div>

        {/* Les deux courses de référence de la saison */}
        <div className="mt-12">
          <RaceHighlight race={t} videoSrc={GRV_VIDEO_SRC} index="01" />
        </div>
        <div className="mt-6">
          <RaceHighlight race={t.second} videoSrc={MMB_VIDEO_SRC} index="02" />
        </div>
      </div>
    </section>
  );
}
