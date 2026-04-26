import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#kpi', label: 'Performances' },
  { href: '#palmares', label: 'Palmarès' },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-mountain-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-mountain-900 font-semibold tracking-tight"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-mountain-500" />
          <span className="text-sm uppercase tracking-widest">M. Baudelocq</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mountain-700 hover:text-mountain-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partenariat"
            className="rounded-full bg-mountain-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:bg-mountain-700 transition-colors"
          >
            Media Kit
          </a>
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-mountain-800 hover:bg-mountain-100"
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-mountain-800 hover:bg-mountain-50"
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
