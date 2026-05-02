/**
 * Grain de pellicule animé via SVG noise + animation GPU. Subtil.
 */
export default function FilmGrain({ opacity = 0.08, blendMode = 'overlay' }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        mixBlendMode: blendMode,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        backgroundSize: '200px 200px',
        animation: 'grainShift 0.8s steps(6) infinite',
      }}
    />
  );
}
