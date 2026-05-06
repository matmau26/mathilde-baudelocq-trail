import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageSwitch from './LanguageSwitch.jsx';
import { useT } from '../i18n/useT.js';

// Suit la section visible à l'écran et renvoie son id (ou null hors home).
// On considère qu'une section est active dès que son haut a passé sous le
// header (h-16 = 64 px) et avant que son bas ne soit remonté trop haut.
function useActiveSection(ids, enabled) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled || ids.length === 0) {
      setActive(null);
      return undefined;
    }

    const visibility = new Map();
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const pickActive = () => {
      let bestId = null;
      let bestRatio = 0;
      for (const [id, ratio] of visibility) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }
      setActive(bestRatio > 0 ? bestId : null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio);
        });
        pickActive();
      },
      {
        // Slice horizontale juste sous le header, jusqu'à 35 % du bas.
        rootMargin: '-72px 0px -35% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(','), enabled]);

  return active;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';
  const t = useT('header');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Liste des ids de section déduite des liens internes (#athlete, …)
  const sectionIds = useMemo(
    () =>
      t.nav
        .filter((l) => !l.external && l.href.startsWith('#'))
        .map((l) => l.href.slice(1)),
    [t.nav]
  );
  const activeId = useActiveSection(sectionIds, onHome);

  const isActive = (link) => {
    if (link.external) {
      // Lien de route — actif quand le pathname commence par le href
      return (
        location.pathname === link.href ||
        location.pathname.startsWith(link.href + '/')
      );
    }
    // Lien d'ancre — uniquement pertinent sur la home
    return onHome && activeId && link.href === `#${activeId}`;
  };

  // Sur Safari iOS, `backdrop-blur` au-dessus d'une page qui scroll relance le
  // GPU à chaque frame → on garde un fond opaque sur mobile et on n'utilise
  // le verre dépoli qu'à partir de md.
  const surface = scrolled
    ? 'bg-white border-b border-mountain-100 shadow-sm md:bg-white/90 md:backdrop-blur-md'
    : 'bg-transparent';
  const logoText = 'text-mountain-950';
  const logoDot = 'bg-flame-500';
  const linkBase = scrolled
    ? 'text-mountain-800 hover:text-flame-600'
    : 'text-mountain-900 hover:text-flame-600';
  const ctaClass = 'bg-flame-500 text-white hover:bg-flame-600';
  const burgerClass = 'text-mountain-900 hover:bg-mountain-100';

  const handleAnchorClick = (e, href) => {
    setOpen(false);
    if (!onHome) {
      e.preventDefault();
      navigate('/' + href);
    }
  };

  const handleLogoClick = (e) => {
    setOpen(false);
    if (onHome) {
      // Déjà sur la home : on stoppe la nav et on remonte simplement en haut
      e.preventDefault();
    }
    // Quel que soit le cas (home ou autre route), on remonte en haut
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // Classe partagée pour les liens — l'état actif teinte en flame et
  // affiche un soulignement animé via ::after.
  const navLinkClass = (active) =>
    `relative whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] transition-colors after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-[2px] after:rounded-full after:bg-flame-500 after:origin-left after:transition-transform after:duration-300 ${
      active
        ? 'text-flame-600 after:scale-x-100'
        : `${linkBase} after:scale-x-0`
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${surface}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Retour en haut"
          className={`flex shrink-0 items-center gap-2 font-medium tracking-tight transition-colors ${logoText}`}
        >
          <span
            className={`inline-block h-2 w-2 rounded-full transition-colors ${logoDot}`}
          />
          <span className="whitespace-nowrap text-[13px] uppercase tracking-[0.18em]">
            {t.logoSubtitle}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {t.nav.map((link) => {
            const active = isActive(link);
            return link.external ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={navLinkClass(active)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                aria-current={active ? 'location' : undefined}
                className={navLinkClass(active)}
              >
                {link.label}
              </a>
            );
          })}
          <LanguageSwitch />
          <Link
            to="/contact"
            className={`whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${ctaClass}`}
          >
            {t.cta}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch variant="mobile" />
          <button
            type="button"
            aria-label={t.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${burgerClass}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-mountain-100 bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {t.nav.map((link) => {
              const active = isActive(link);
              const mobileClass = `flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${
                active
                  ? 'bg-flame-50 text-flame-600'
                  : 'text-mountain-800 hover:bg-mountain-50'
              }`;
              const dot = active && (
                <span className="ml-3 inline-block h-1.5 w-1.5 rounded-full bg-flame-500" />
              );
              return link.external ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={mobileClass}
                >
                  <span>{link.label}</span>
                  {dot}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  aria-current={active ? 'location' : undefined}
                  className={mobileClass}
                >
                  <span>{link.label}</span>
                  {dot}
                </a>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-flame-500 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.25em] text-white"
            >
              {t.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
