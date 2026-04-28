import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useT } from '../i18n/useT.js';

export default function LanguageSwitch({ variant = 'desktop' }) {
  const { lang, setLang } = useLanguage();
  const t = useT('common');

  const baseBtn =
    'px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] transition-colors';
  const active = 'bg-mountain-950 text-white';
  const inactive = 'text-mountain-700 hover:text-mountain-950';

  return (
    <div
      role="group"
      aria-label={t.switchLabel}
      className={`inline-flex items-center overflow-hidden rounded-full border border-mountain-300 bg-white/70 backdrop-blur-md ${
        variant === 'mobile' ? 'h-9 self-start' : 'h-8'
      }`}
    >
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
        className={`${baseBtn} ${lang === 'fr' ? active : inactive}`}
      >
        {t.langFr}
      </button>
      <span aria-hidden="true" className="h-4 w-px bg-mountain-200" />
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${baseBtn} ${lang === 'en' ? active : inactive}`}
      >
        {t.langEn}
      </button>
    </div>
  );
}
