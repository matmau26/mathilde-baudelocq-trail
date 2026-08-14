import { Award, Globe } from 'lucide-react';

// Bandeaux de distinction — ils qualifient une course entière, à la différence
// des badges courts (Podium, Top perf, Ultra) propres au tableau des résultats.
// La clé indexe `races.distinctions` dans translations.js, et sert aussi bien
// au tableau (RaceResults) qu'aux cartes d'objectifs (Calendar).
const DISTINCTION_STYLES = {
  reference: { className: 'bg-flame-500 text-white', icon: Award },
  international: { className: 'bg-electric-600 text-white', icon: Globe },
};

export default function Distinction({ distinction, labels, className = '' }) {
  const style = DISTINCTION_STYLES[distinction];
  if (!style) return null;
  const Icon = style.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${style.className} ${className}`}
    >
      <Icon className="h-3 w-3 shrink-0" strokeWidth={2.5} />
      {labels?.[distinction] || distinction}
    </span>
  );
}
