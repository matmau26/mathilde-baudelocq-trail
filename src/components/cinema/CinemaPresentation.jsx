import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Scene01Cover from './scenes/Scene01Cover.jsx';
import Scene02Identity from './scenes/Scene02Identity.jsx';
import Scene03Numbers from './scenes/Scene03Numbers.jsx';
import Scene04Reference from './scenes/Scene04Reference.jsx';
import Scene05Gallery from './scenes/Scene05Gallery.jsx';
import Scene06History from './scenes/Scene06History.jsx';
import Scene07Goals from './scenes/Scene07Goals.jsx';
import Scene08Partnership from './scenes/Scene08Partnership.jsx';
import FilmGrain from './FilmGrain.jsx';

// Le monde 3D persistent — chunk séparé, chargé en lazy
const World3D = lazy(() => import('../world/World3D.jsx'));

const SCENES = [
  { id: 'cover', label: 'Ouverture', component: Scene01Cover },
  { id: 'identity', label: 'L’athlète', component: Scene02Identity },
  { id: 'numbers', label: 'Trajectoire', component: Scene03Numbers },
  { id: 'reference', label: 'Référence', component: Scene04Reference },
  { id: 'gallery', label: 'Sur le terrain', component: Scene05Gallery },
  { id: 'history', label: 'Historique', component: Scene06History },
  { id: 'goals', label: 'Cap 2026', component: Scene07Goals },
  { id: 'partnership', label: 'Partenariat', component: Scene08Partnership },
];

const SCROLL_LOCK_MS = 1100;
const TOUCH_THRESHOLD = 60;

export default function CinemaPresentation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [enable3D, setEnable3D] = useState(false);
  const lockedUntil = useRef(0);
  const touchStartY = useRef(null);
  const containerRef = useRef(null);

  const total = SCENES.length;
  const SceneComponent = SCENES[index].component;

  // Active la 3D seulement si l'appareil est capable
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const cores = navigator.hardwareConcurrency || 4;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!reduced && (cores >= 4 || fine)) setEnable3D(true);
  }, []);

  const advance = (dir) => {
    const now = Date.now();
    if (now < lockedUntil.current) return;
    setIndex((current) => {
      const next = current + dir;
      if (next < 0 || next > total - 1) return current;
      setDirection(dir);
      lockedUntil.current = now + SCROLL_LOCK_MS;
      return next;
    });
  };

  const goTo = (target) => {
    const now = Date.now();
    if (now < lockedUntil.current) return;
    setIndex((current) => {
      if (target === current) return current;
      setDirection(target > current ? 1 : -1);
      lockedUntil.current = now + SCROLL_LOCK_MS;
      return target;
    });
  };

  useEffect(() => {
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < 6) return;
      e.preventDefault();
      advance(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        advance(1);
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        advance(-1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(total - 1);
      }
    };
    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > TOUCH_THRESHOLD) {
        advance(delta > 0 ? 1 : -1);
      }
      touchStartY.current = null;
    };

    const node = containerRef.current;
    node?.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    node?.addEventListener('touchstart', onTouchStart, { passive: true });
    node?.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      node?.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      node?.removeEventListener('touchstart', onTouchStart);
      node?.removeEventListener('touchend', onTouchEnd);
    };
  }, [total]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-black text-white"
      style={{ touchAction: 'none' }}
    >
      {/* MONDE 3D PERSISTENT — la caméra se déplace selon `index` */}
      {enable3D && (
        <Suspense fallback={<World3DFallback />}>
          <div className="absolute inset-0 z-0">
            <World3D scene={index} photoUrl="/Maxi2025-1.jpg" />
          </div>
        </Suspense>
      )}
      {!enable3D && <World3DFallback />}

      {/* Voile dynamique pour lisibilité — opacité différente selon la scène */}
      <SceneVeil index={index} />

      {/* Grain pellicule global */}
      <FilmGrain opacity={0.07} blendMode="overlay" />

      {/* CONTENU OVERLAY — change selon scene, transition crossfade */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={SCENES[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.4 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="pointer-events-auto absolute inset-0 z-10"
        >
          <SceneComponent
            direction={direction}
            index={index}
            total={total}
            onNext={() => advance(1)}
            onPrev={() => advance(-1)}
          />
        </motion.div>
      </AnimatePresence>

      {/* HUD — caméra + scène + navigation */}
      <CinemaHUD index={index} total={total} label={SCENES[index].label} />
      <SceneNavigation scenes={SCENES} current={index} onChange={goTo} />
      <NavButtons
        index={index}
        total={total}
        onNext={() => advance(1)}
        onPrev={() => advance(-1)}
      />
    </div>
  );
}

/**
 * Voile dégradé adapté à chaque scène pour assurer la lisibilité du texte.
 */
function SceneVeil({ index }) {
  // Voile par défaut pour cover
  let veil =
    'bg-gradient-to-b from-black/55 via-black/15 to-black/85';
  if (index === 1) veil = 'bg-gradient-to-r from-black/85 via-black/40 to-black/15';
  if (index === 2) veil = 'bg-black/60';
  if (index === 3) veil = 'bg-gradient-to-r from-black/85 via-black/40 to-transparent';
  if (index === 5) veil = 'bg-black/55';
  if (index === 6) veil = 'bg-black/55';
  if (index === 7) veil = 'bg-black/65';

  return (
    <motion.div
      key={index}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className={`pointer-events-none absolute inset-0 z-[5] ${veil}`}
    />
  );
}

function World3DFallback() {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src="/Maxi2025-1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-mountain-950 via-mountain-900/70 to-flame-900/70"
      />
    </div>
  );
}

function CinemaHUD({ index, total, label }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-6 pt-6 sm:px-10 sm:pt-8">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 sm:text-[11px]">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-flame-500"
            style={{ animation: 'recBlink 1.4s ease-in-out infinite' }}
          />
          <span>Mathilde · Media Kit 2026</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <span>Scène</span>
          <span className="text-white">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span aria-hidden="true" className="block h-px w-12 bg-white/30" />
          <span>{label}</span>
        </div>
        <div className="font-mono text-white/60 sm:hidden">
          {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

function SceneNavigation({ scenes, current, onChange }) {
  return (
    <nav
      aria-label="Navigation des scènes"
      className="pointer-events-auto fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 sm:right-8 lg:flex"
    >
      <ul className="flex flex-col items-end gap-3">
        {scenes.map((s, i) => {
          const active = i === current;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onChange(i)}
                className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
                aria-current={active ? 'true' : undefined}
              >
                <span
                  className={`whitespace-nowrap transition-opacity ${
                    active
                      ? 'opacity-100 text-white'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {s.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`block h-px transition-all duration-500 ${
                    active
                      ? 'w-12 bg-flame-500'
                      : 'w-6 bg-white/40 group-hover:w-9'
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`text-[9px] tabular-nums ${
                    active ? 'text-flame-400' : 'text-white/50'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function NavButtons({ index, total, onNext, onPrev }) {
  const atStart = index === 0;
  const atEnd = index === total - 1;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-center justify-between px-6 pb-6 sm:px-10 sm:pb-8">
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">←</span>
        Préc.
      </button>

      <div className="pointer-events-none hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 sm:flex">
        <kbd className="rounded border border-white/20 px-1.5 py-0.5 text-[9px]">↑</kbd>
        <kbd className="rounded border border-white/20 px-1.5 py-0.5 text-[9px]">↓</kbd>
        <span>Naviguer</span>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={atEnd}
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-flame-500 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-flame-500/40 transition-all hover:bg-flame-600 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none"
      >
        {atEnd ? 'Fin' : 'Suite'}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>
    </div>
  );
}
