// Petit wrapper <picture> qui sert un AVIF (≈ 60-90 % plus léger qu'un JPEG)
// quand le navigateur le supporte — sinon il retombe sur le JPEG/PNG fourni.
// Usage : remplacer <img src="/foo.jpg" ... /> par <Picture src="/foo.jpg" ... />.
// La variante AVIF est déduite automatiquement (même dossier, même nom).

const SUPPORTED_EXT = /\.(jpe?g|png)$/i;

export default function Picture({
  src,
  alt = '',
  className,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  ...rest
}) {
  const avif = SUPPORTED_EXT.test(src) ? src.replace(SUPPORTED_EXT, '.avif') : null;

  return (
    <picture>
      {avif && <source srcSet={avif} type="image/avif" />}
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
