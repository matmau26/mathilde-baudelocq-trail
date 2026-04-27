import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const MEDIA = [
  { type: 'photo', src: '/Ventoux2025.jpeg', alt: 'Mathilde Baudelocq · GR Ventoux 2025' },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777295334/820A29E3-30E7-4E58-8105-2AA9BF614759_fapha9.mp4',
  },
  { type: 'photo', src: '/Maxi2025-1.jpg', alt: 'MaXi-Race 2025 · 100 km' },
  { type: 'photo', src: '/Ventoux1.jpeg', alt: 'Trail · Massif du Ventoux' },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777295387/Edits_Mathilde_Espeluche_20260427_145433_cccnyk.mp4',
  },
  { type: 'photo', src: '/TrailBourget.jpeg', alt: 'Trail du Bourget' },
  { type: 'photo', src: '/UT4M.jpeg', alt: 'Ultra Tour des 4 Massifs' },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777295344/1A98EE77-7DF1-412F-858D-7F0C39814491_zinypp.mp4',
  },
  { type: 'photo', src: '/Ventoux2025-2.jpeg', alt: 'GR Ventoux · 2ᵉ moment' },
  { type: 'photo', src: '/VentouxOrigine2025.jpeg', alt: 'Trail Ventoux · LE 46 Origine' },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777295309/4610396B-0A29-45AF-96C4-0D9E53FB185B_srmuvl.mp4',
  },
  { type: 'photo', src: '/VentouxOrigine2025-2.jpeg', alt: 'Trail Ventoux · LE 46 Origine' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function MediaPhoto({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
    />
  );
}

// Cloudinary génère un poster JPEG si on remplace l'extension de la vidéo par .jpg
function videoPosterFromCloudinary(src) {
  return src.replace(/\.(mp4|mov|webm)(\?.*)?$/, '.jpg$2');
}

function MediaVideo({ src }) {
  const [playing, setPlaying] = useState(false);
  const poster = videoPosterFromCloudinary(src);

  if (playing) {
    return (
      <video
        src={src}
        poster={poster}
        autoPlay
        controls
        playsInline
        preload="auto"
        className="block h-auto w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Lire la vidéo"
      className="relative block w-full bg-mountain-100"
    >
      <img
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {/* Voile foncé léger */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-mountain-950/15 transition-opacity duration-300 group-hover:bg-mountain-950/25"
      />
      {/* Bouton play central */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flame-500 text-white shadow-xl shadow-mountain-900/30 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
          <Play
            className="h-6 w-6 translate-x-0.5 fill-white sm:h-7 sm:w-7"
            strokeWidth={0}
          />
        </span>
      </span>
    </button>
  );
}

export default function Gallery() {
  return (
    <section
      id="medias"
      className="relative scroll-mt-20 overflow-hidden bg-mesh-warm py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* En-tête */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-electric-600">
              03 — Médias
            </p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-mountain-950 sm:text-6xl lg:text-7xl">
              Sur le
              <br />
              <span className="bg-gradient-to-r from-electric-700 via-electric-500 to-flame-500 bg-clip-text text-transparent">
                terrain.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-mountain-700">
            Bibliothèque vivante — photos et vidéos de course, sorties et
            entraînements. Visuels haute définition libres de droits sur
            demande.
          </p>
        </div>

        {/* Compteurs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em]">
          <span className="rounded-full border border-mountain-200 bg-white/80 px-3 py-1 text-mountain-700">
            {MEDIA.filter((m) => m.type === 'photo').length} Photos
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-flame-500 px-3 py-1 text-white">
            <Play className="h-3 w-3 fill-white" strokeWidth={0} />
            {MEDIA.filter((m) => m.type === 'video').length} Vidéos
          </span>
          <span className="rounded-full border border-mountain-200 bg-white/80 px-3 py-1 text-mountain-700">
            HD · Sur demande
          </span>
        </div>

        {/* Masonry — CSS columns, naturel et performant */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-10 columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4 lg:gap-5"
        >
          {MEDIA.map((item, idx) => (
            <motion.figure
              key={`${item.src}-${idx}`}
              variants={itemVariants}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-mountain-200 bg-mountain-100 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-mountain-900/10 lg:mb-5"
            >
              {item.type === 'photo' ? (
                <>
                  <MediaPhoto src={item.src} alt={item.alt || ''} />
                  {/* Voile au hover — uniquement sur les photos */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mountain-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </>
              ) : (
                <MediaVideo src={item.src} />
              )}
            </motion.figure>
          ))}
        </motion.div>

        <p className="mt-8 text-[10px] uppercase tracking-widest text-mountain-500">
          Crédits photographes mentionnés sur demande · Vidéos hébergées via
          Cloudinary
        </p>
      </div>
    </section>
  );
}
