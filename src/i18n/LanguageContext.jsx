import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext({ lang: 'fr', setLang: () => {} });

const STORAGE_KEY = 'mb-lang';

function detectInitialLang() {
  if (typeof window === 'undefined') return 'fr';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'fr' || stored === 'en') return stored;
  const nav = window.navigator?.language || 'fr';
  return nav.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* quota / private mode — silencieux */
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (next) => setLangState(next === 'en' ? 'en' : 'fr'),
      toggle: () => setLangState((l) => (l === 'fr' ? 'en' : 'fr')),
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
