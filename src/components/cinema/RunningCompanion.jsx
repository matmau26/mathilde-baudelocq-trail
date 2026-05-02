import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const RUN_VIDEO =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto:good,f_auto,w_640,vc_h264/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.mp4';

/**
 * Compagnon Mathilde — un médaillon flottant avec la vidéo de course en boucle.
 * - Fixed-position en bas du viewport, suit le scroll horizontalement (gauche↔droite)
 * - Anneau flame qui pulse, halo derrière
 * - Affiche le KM courant + le % de progression de la "course" (= scroll page)
 * - Caché sur prefers-reduced-motion
 */
export default function RunningCompanion({ checkpoints = [] }) {
  const videoRef = useRef(null);
  const [reduced, setReduced] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.6,
  });

  // Va-et-vient horizontal façon "trajet de course"
  const xPct = useTransform(
    smooth,
    [0, 0.25, 0.5, 0.75, 1],
    [4, 65, 25, 80, 50]
  );
  // Léger bobbing vertical (rythme de foulée)
  const bob = useMotionValue(0);
  const yWave = useMotionValue(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(m.matches);
    const handler = () => setReduced(m.matches);
    m.addEventListener?.('change', handler);
    return () => m.removeEventListener?.('change', handler);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = (now - start) / 1000;
      bob.set(Math.sin(t * 5) * 4); // bobbing rapide ~ rythme foulée
      yWave.set(Math.cos(t * 0.6) * 6);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [bob, yWave, reduced]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute('muted', '');
    v.play().catch(() => {});
  }, []);

  if (reduced) return null;

  // Détermine le checkpoint courant en fonction du scroll
  return (
    <>
      <CheckpointHud
        scrollYProgress={smooth}
        checkpoints={checkpoints}
      />

      <motion.div
        aria-hidden="true"
        style={{
          left: useTransform(xPct, (v) => `${v}%`),
          y: yWave,
        }}
        className="pointer-events-none fixed bottom-6 z-40 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div style={{ y: bob }} className="relative">
          {/* Halo flame */}
          <span
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-full bg-flame-500/35 blur-2xl"
          />

          {/* Anneau flame qui pulse */}
          <motion.span
            aria-hidden="true"
            animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.95, 0.55] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-1 rounded-full border-2 border-flame-500"
          />

          {/* Disque vidéo */}
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/90 bg-mountain-900 shadow-2xl shadow-mountain-900/60 sm:h-24 sm:w-24">
            <video
              ref={videoRef}
              src={RUN_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
              onPlaying={() => setVideoReady(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                videoReady ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!videoReady && (
              <div className="absolute inset-0 bg-gradient-to-br from-flame-700 to-mountain-900" />
            )}

            {/* Pellicule de pas — petite traînée flame qui s'efface */}
            <span
              aria-hidden="true"
              className="absolute -left-3 top-1/2 inline-block h-1 w-2 -translate-y-1/2 rounded-full bg-flame-500/70"
            />
            <span
              aria-hidden="true"
              className="absolute -left-7 top-1/2 inline-block h-1 w-3 -translate-y-1/2 rounded-full bg-flame-500/40"
            />
            <span
              aria-hidden="true"
              className="absolute -left-12 top-1/2 inline-block h-1 w-4 -translate-y-1/2 rounded-full bg-flame-500/20"
            />
          </div>

          {/* Tag KM */}
          <KmTag scrollYProgress={smooth} checkpoints={checkpoints} />
        </motion.div>
      </motion.div>
    </>
  );
}

function CheckpointHud({ scrollYProgress, checkpoints }) {
  // Barre fine en haut "RACE PROGRESS" en mode HUD course
  const widthPct = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-2 z-50 px-4 sm:top-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/80 sm:text-[10px]">
        <span aria-hidden="true" className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-flame-500" />
        <span className="hidden sm:inline">Race</span>
        <div className="relative h-px flex-1 overflow-hidden bg-white/15">
          <motion.span
            style={{ width: widthPct }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-flame-500 via-flame-400 to-solar-400"
          />
        </div>
        <CheckpointLabel
          scrollYProgress={scrollYProgress}
          checkpoints={checkpoints}
        />
      </div>
    </div>
  );
}

function CheckpointLabel({ scrollYProgress, checkpoints }) {
  const [label, setLabel] = useState(checkpoints[0]?.label || '');
  const [pct, setPct] = useState('0');

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const idx = Math.min(
        checkpoints.length - 1,
        Math.floor(v * checkpoints.length)
      );
      setLabel(checkpoints[idx]?.label || '');
      setPct(Math.round(v * 100).toString().padStart(2, '0'));
    });
    return () => unsub();
  }, [scrollYProgress, checkpoints]);

  return (
    <span className="hidden whitespace-nowrap text-white sm:inline">
      <span className="text-white/60">{pct}%</span>
      <span aria-hidden="true" className="mx-2 text-white/30">·</span>
      {label}
    </span>
  );
}

function KmTag({ scrollYProgress, checkpoints }) {
  const [km, setKm] = useState(1);
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const idx = Math.min(
        checkpoints.length - 1,
        Math.floor(v * checkpoints.length)
      );
      setKm(idx + 1);
    });
    return () => unsub();
  }, [scrollYProgress, checkpoints]);

  return (
    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full border border-flame-500 bg-mountain-950 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-flame-400 shadow-lg">
      KM·{String(km).padStart(2, '0')}
    </span>
  );
}
