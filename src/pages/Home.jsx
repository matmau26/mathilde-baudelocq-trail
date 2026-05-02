import CinemaCover from '../components/cinema/CinemaCover.jsx';
import ChapterCard from '../components/cinema/ChapterCard.jsx';
import VelocityMarquee from '../components/VelocityMarquee.jsx';
import NumbersTheatre from '../components/numbers/NumbersTheatre.jsx';
import PullQuote from '../components/PullQuote.jsx';
import TopPerf from '../components/Palmares.jsx';
import Gallery from '../components/Gallery.jsx';
import RaceResults from '../components/RaceResults.jsx';
import Calendar from '../components/Calendar.jsx';
import Partnership from '../components/Partnership.jsx';

const RACE_VIDEO =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto:eco,f_auto,w_1400,vc_h264/v1777299247/D696A555-9A4B-49A1-9954-3B65EC3ACB5B_xaeuo6.mp4';

export default function Home() {
  return (
    <main className="bg-black">
      {/* OUVERTURE */}
      <CinemaCover />

      {/* TICKER */}
      <VelocityMarquee />

      {/* CHAPITRE 01 — La trajectoire */}
      <ChapterCard
        number="01"
        title="Trajectoire"
        subtitle="Trois indicateurs structurent une saison. Suivre la progression."
        meta="Performance Dashboard · Saison 2025–26"
        videoSrc={RACE_VIDEO}
      />
      <NumbersTheatre />

      {/* CHAPITRE 02 — Le credo */}
      <ChapterCard
        number="02"
        title="Le credo"
        subtitle="Une discipline tenue jour après jour. Trois mots."
        meta="Simplicité · Intégrité · Loyauté"
        imageSrc="/Mathilde.jpeg"
      />
      <PullQuote />

      {/* CHAPITRE 03 — Référence saison */}
      <ChapterCard
        number="03"
        title="Référence"
        subtitle="Une percée au contact du peloton Élite, sur l’un des trails les plus relevés du Sud-Est."
        meta="GR Ventoux 2026 · 26 km · 1 100 m d+"
        imageSrc="/Ventoux1.jpeg"
      />
      <TopPerf />

      {/* CHAPITRE 04 — Sur le terrain */}
      <ChapterCard
        number="04"
        title="Sur le terrain"
        subtitle="Photos et vidéos brutes de course, sorties, entraînements."
        meta="Médias · HD sur demande"
        imageSrc="/Ventoux2025.jpeg"
      />
      <Gallery />

      {/* CHAPITRE 05 — Historique */}
      <ChapterCard
        number="05"
        title="Historique"
        subtitle="Les courses, les chronos, les classements. Le rang femmes comme indicateur de référence."
        meta="Résultats détaillés · 2022–2026"
        imageSrc="/VentouxOrigine2025.jpeg"
      />
      <RaceResults />

      {/* CHAPITRE 06 — 2026 */}
      <ChapterCard
        number="06"
        title="Cap 2026"
        subtitle="Deux objectifs majeurs. Un format vitesse pour clore la saison."
        meta="Mont-Blanc · Vercors · La SainteSprint"
        imageSrc="/Ventous2026.jpeg"
      />
      <Calendar />

      {/* CHAPITRE 07 — Le partenariat */}
      <ChapterCard
        number="07"
        title="Le partenariat"
        subtitle="Construire dans la durée. Un projet commun, pas une transaction."
        meta="Vision long terme · ADN de marque · Valeurs communes"
        imageSrc="/Ventoux2025-2.jpeg"
      />
      <Partnership />
    </main>
  );
}
