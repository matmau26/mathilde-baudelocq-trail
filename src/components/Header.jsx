import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageSwitch from './LanguageSwitch.jsx';
import { useT } from '../i18n/useT.js';

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

  const surface = scrolled
    ? 'bg-white/90 backdrop-blur-md border-b border-mountain-100 shadow-sm'
    : 'bg-transparent';
  const logoText = 'text-mountain-950';
  const logoDot = 'bg-flame-500';
  const linkText = scrolled
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
          {t.nav.map((link) =>
            link.external ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${linkText}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${linkText}`}
              >
                {link.label}
              </a>
            )
          )}
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
        <div className="md:hidden border-t border-mountain-100 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {t.nav.map((link) =>
              link.external ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-mountain-800 hover:bg-mountain-50"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-mountain-800 hover:bg-mountain-50"
                >
                  {link.label}
                </a>
              )
            )}
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
