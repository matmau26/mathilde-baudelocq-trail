import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#kpi', label: 'Performances' },
  { href: '#palmares', label: 'Palmarès' },
  { href: '#medias', label: 'Médias' },
  { href: '#resultats', label: 'Résultats' },
  { href: '#calendrier', label: 'Objectifs' },
  { href: '#partenariat', label: 'Partenariat' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hero clair (mesh) → texte sombre par défaut, légère élévation au scroll
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${surface}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className={`flex items-center gap-2 font-semibold tracking-tight transition-colors ${logoText}`}
        >
          <span
            className={`inline-block h-2.5 w-2.5 rounded-full transition-colors ${logoDot}`}
          />
          <span className="text-sm uppercase tracking-[0.25em]">
            M. Baudelocq
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${linkText}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partenariat"
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] transition-colors ${ctaClass}`}
          >
            Media Kit
          </a>
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${burgerClass}`}
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

      {open && (
        <div className="md:hidden border-t border-mountain-100 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-mountain-800 hover:bg-mountain-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
