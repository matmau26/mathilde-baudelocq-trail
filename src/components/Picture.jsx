// <picture> wrapper qui sert :
//  1. un AVIF responsive (srcset 640w / 1024w / pleine résolution) si dispo
//  2. sinon le JPEG/PNG de base
// L'attribut `sizes` permet au navigateur de demander la bonne variante
// selon la largeur réelle du slot — un mobile reçoit ~24 kB au lieu de 90.

const SUPPORTED_EXT = /\.(jpe?g|png)$/i;

// Variantes générées à la build pour les fichiers chauds (Hero, gallery hero,
// covers communiqués). Pour les autres, on retombe simplement sur le src AVIF
// pleine résolution déduit de l'extension.
const HOT_FILES = new Set([
  '/Maxi2025-1',
  '/Mathilde',
  '/MBMaxi',
  '/Ventoux1',
  '/Ventoux2025',
  '/Ventoux2025-2',
  '/Ventoux2025-crop',
  '/VentouxPodium',
  '/VentouxOrigine2025',
  '/VentouxOrigine2025-2',
  '/MarathonMB-arche',
  '/MarathonMB-course',
  '/MMB-montagne',
  '/MMB-finish',
]);
const HOT_LOGOS = new Set([
  '/logo/Logo_Full_Transparent',
  '/logo/Logo_Full_Noir',
]);

function buildAvifSrcset(src) {
  if (!SUPPORTED_EXT.test(src)) return null;
  const base = src.replace(SUPPORTED_EXT, '');
  const fullAvif = `${base}.avif`;
  if (HOT_FILES.has(base)) {
    return `${base}-640w.avif 640w, ${base}-1024w.avif 1024w, ${fullAvif} 1600w`;
  }
  if (HOT_LOGOS.has(base)) {
    return `${base}-480w.avif 480w, ${base}-720w.avif 720w, ${fullAvif} 920w`;
  }
  return fullAvif; // single src, pas de srcset
}

export default function Picture({
  src,
  alt = '',
  className,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  // sizes : largeur affichée — par défaut on couvre les usages les plus
  // courants (image plein-écran ou grande carte). Override par appelant pour
  // les vignettes (gallery, mosaïque).
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1024px',
  ...rest
}) {
  const srcset = buildAvifSrcset(src);
  const isResponsiveSet = typeof srcset === 'string' && srcset.includes(' ');

  return (
    <picture>
      {srcset && (
        <source
          type="image/avif"
          srcSet={srcset}
          {...(isResponsiveSet ? { sizes } : {})}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchPriority}
        {...rest}
      />
    </picture>
  );
}
