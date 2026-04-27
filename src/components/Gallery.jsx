import { motion } from 'framer-motion';
import { Camera, Mountain, Activity, MapPin, Footprints } from 'lucide-react';

const TILES = [
  {
    label: 'Sortie Dieulefit',
    sub: 'Drôme · D+ 1 200 m',
    icon: Mountain,
    gradient: 'from-flame-600 via-flame-500 to-solar-400',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    label: 'GR Ventoux 2025',
    sub: 'Highlight · 28 km',
    icon: Activity,
    gradient: 'from-mountain-900 via-mountain-700 to-electric-500',
    span: 'sm:col-span-2 sm:row-span-1',
  },
  {
    label: 'Préparation D+',
    sub: 'Massif · piste',
    icon: Footprints,
    gradient: 'from-cream-100 via-white to-flame-50 text-mountain-900',
    span: 'sm:col-span-1 sm:row-span-1',
    inverse: true,
  },
  {
    label: 'Reco Vercors',
    sub: '84 km · 2026',
    icon: MapPin,
    gradient: 'from-electric-700 via-electric-500 to-mountain-400',
    span: 'sm:col-span-1 sm:row-span-1',
  },
  {
    label: 'Shooting CIMALP',
    sub: 'Saint-Marcel-lès-Valence',
    icon: Camera,
    gradient: 'from-mountain-950 via-mountain-900 to-flame-700',
    span: 'sm:col-span-4 sm:row-span-1',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

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
            Galerie sélective — sorties d’entraînement, courses majeures et
            sessions presse. Visuels libres de droits sur demande.
          </p>
        </div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[180px] lg:auto-rows-[220px]"
        >
          {TILES.map((tile) => {
            const Icon = tile.icon;
            return (
              <motion.figure
                key={tile.label}
                variants={tileVariants}
                className={`group relative overflow-hidden rounded-xl border border-mountain-100 bg-gradient-to-br ${tile.gradient} ${tile.span} transition-transform duration-300 hover:scale-[1.03]`}
              >
                {/* Image placeholder : si une vraie image est fournie, on la met ici */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  {/* Trame technique */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 ${
                      tile.inverse ? 'opacity-[0.05]' : 'opacity-[0.12]'
                    }`}
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Icône centrée */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      className={`h-16 w-16 ${
                        tile.inverse ? 'text-mountain-400' : 'text-white/30'
                      }`}
                      strokeWidth={1.2}
                    />
                  </div>
                </div>

                {/* Voile bas pour lisibilité du label */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-1/2 ${
                    tile.inverse
                      ? 'bg-gradient-to-t from-white via-white/70 to-transparent'
                      : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
                  }`}
                />

                {/* Contenu */}
                <figcaption
                  className={`absolute inset-x-0 bottom-0 flex items-end justify-between p-5 ${
                    tile.inverse ? 'text-mountain-950' : 'text-white'
                  }`}
                >
                  <div>
                    <p className="font-display text-base font-bold uppercase tracking-wide sm:text-lg">
                      {tile.label}
                    </p>
                    <p
                      className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        tile.inverse ? 'text-mountain-600' : 'text-white/80'
                      }`}
                    >
                      {tile.sub}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] ${
                      tile.inverse
                        ? 'border-mountain-300 text-mountain-700'
                        : 'border-white/30 text-white/90'
                    }`}
                  >
                    Photo
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>

        {/* Note */}
        <p className="mt-6 text-[10px] uppercase tracking-widest text-mountain-500">
          Visuels haute définition · Crédits photographes mentionnés sur
          demande.
        </p>
      </div>
    </section>
  );
}
