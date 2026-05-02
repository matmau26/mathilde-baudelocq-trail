import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FilmGrain from './FilmGrain.jsx';

/**
 * Carton de chapitre cinéma.
 * - Reste en sticky pendant ~80vh → l'utilisateur lit le carton avant la scène suivante.
 * - Fond noir profond, type oversize, REC + timecode aux coins.
 */
export default function ChapterCard({
  number,
  title,
  subtitle,
  meta,
  videoSrc,
  imageSrc,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const titleY = useTransform(scrollYProgress, [0.2, 0.6], ['8%', '-4%']);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section
      ref={ref}
      aria-label={title}
      className="relative h-[140svh] bg-black text-white"
    >
      <div className="sticky top-0 flex h-svh w-full items-center justify-center overflow-hidden">
        {/* Background : vidéo OU image */}
        <motion.div
          style={{ scale: mediaScale }}
          className="absolute inset-0 will-change-transform"
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
              aria-hidden="true"
            />
          ) : imageSrc ? (
            <img
              src={imageSrc}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-55"
            />
          ) : null}
          {/* Voile sombre */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/95"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"
          />
        </motion.div>

        {/* Grain pellicule */}
        <FilmGrain opacity={0.1} blendMode="overlay" />

        {/* Crochets coin caméra */}
        <CornerBrackets />

        {/* Contenu carton */}
        <motion.div
          style={{ opacity, y: titleY }}
          className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center sm:px-10"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/60">
            Chapitre {number}
          </div>
          <h2 className="mt-6 font-display text-[18vw] font-bold uppercase leading-[0.85] tracking-[-0.025em] sm:text-[14vw] lg:text-[10vw]">
            <span className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl font-editorial text-lg italic leading-snug text-white/80 sm:text-xl">
              {subtitle}
            </p>
          )}
          {meta && (
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {meta}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function CornerBrackets() {
  const map = [
    'left-4 top-4',
    'right-4 top-4 rotate-90',
    'left-4 bottom-4 -rotate-90',
    'right-4 bottom-4 rotate-180',
  ];
  return (
    <>
      {map.map((cls, i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`pointer-events-none absolute h-6 w-6 text-white/40 ${cls}`}
        >
          <path
            d="M2 8 V2 H8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      ))}
    </>
  );
}
