import { translations } from './translations';
import { useLanguage } from './LanguageContext.jsx';

// Renvoie soit le pack complet (sans argument), soit la sous-section.
// Exemple : const t = useT('hero'); → { titleFirst, ... }
export function useT(section) {
  const { lang } = useLanguage();
  const pack = translations[lang] || translations.fr;
  return section ? pack[section] : pack;
}
