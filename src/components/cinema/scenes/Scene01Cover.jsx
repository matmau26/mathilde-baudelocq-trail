import { motion } from 'framer-motion';
import { useT } from '../../../i18n/useT.js';

const SUBS_FR = [
  '26 avril 2026.',
  'Massif du Ventoux. 1 100 m d+.',
  'Une trajectoire vers l’Élite.',
];
const SUBS_EN = [
  'April 26, 2026.',
  'Mont Ventoux. 1,100 m vert.',
  'A trajectory to Elite.',
];

const titleVariant = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

function Mask({ text, delay = 0, className = '' }) {
  return (
    <span aria-label={text} className={`block overflow-hidden ${className}`}>
      <motion.span
        variants={titleVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay }}
        aria-hidden="true"
        className="block"
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Scene01Cover() {
  const t = useT('hero');
  const lang =
    typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
  const subs = lang === 'en' ? SUBS_EN : SUBS_FR;

  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-32 pt-32 sm:px-12 sm:pb-36 sm:pt-36">
        <div className="mx-auto w-full max-w-7xl">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 max-w-2xl space-y-1 font-mono text-xs uppercase tracking-[0.35em] text-white/85 sm:text-sm"
          >
            {subs.map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.45 }}
                className="flex items-baseline gap-3"
              >
                <span aria-hidden="true" className="text-flame-400">—</span>
                <span>{line}</span>
              </motion.li>
            ))}
          </motion.ul>

          <h1 className="font-display font-bold uppercase leading-[0.82] tracking-[-0.025em]">
            <Mask
              text={t.titleFirst}
              delay={1.6}
              className="text-[15vw] sm:text-[12vw] lg:text-[10vw]"
            />
            <Mask
              text={t.titleLast}
              delay={1.8}
              className="bg-gradient-to-b from-flame-300 via-flame-400 to-solar-300 bg-clip-text text-[15vw] text-transparent sm:text-[12vw] lg:text-[10vw]"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="mt-6 max-w-md font-editorial text-xl italic leading-snug text-white/85 sm:text-2xl"
          >
            {t.subtitleSport}.{' '}
            <span className="text-white">{t.subtitleProject}.</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
