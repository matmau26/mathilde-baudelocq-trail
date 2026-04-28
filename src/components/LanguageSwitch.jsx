import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useT } from '../i18n/useT.js';

const LANGS = [
  { code: 'fr', label: 'FR', aria: 'Français' },
  { code: 'en', label: 'EN', aria: 'English' },
];

export default function LanguageSwitch({ variant = 'desktop' }) {
  const { lang, setLang } = useLanguage();
  const t = useT('common');
  const isMobile = variant === 'mobile';
  const activeIndex = LANGS.findIndex((l) => l.code === lang);

  return (
    <div
      role="group"
      aria-label={t.switchLabel}
      className={`relative inline-flex items-center rounded-full border border-mountain-200/70 bg-white/80 p-1 shadow-sm ring-1 ring-black/[0.04] backdrop-blur-md ${
        isMobile ? 'h-10' : 'h-9'
      }`}
    >
      {/* Pastille active : un seul élément, jamais démonté → pas de flash blanc */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 left-1 top-1 rounded-full bg-gradient-to-br from-mountain-900 to-mountain-950 shadow-md shadow-mountain-900/30 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          width: 'calc(50% - 4px)',
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {LANGS.map(({ code, label, aria }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={aria}
            className={`relative z-10 inline-flex h-full min-w-[2.25rem] items-center justify-center rounded-full px-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 focus-visible:ring-offset-1 ${
              isActive ? 'text-white' : 'text-mountain-600 hover:text-mountain-950'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
