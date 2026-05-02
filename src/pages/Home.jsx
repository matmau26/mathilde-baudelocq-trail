import Cover from '../components/cover/Cover.jsx';
import VelocityMarquee from '../components/VelocityMarquee.jsx';
import NumbersTheatre from '../components/numbers/NumbersTheatre.jsx';
import PullQuote from '../components/PullQuote.jsx';
import TopPerf from '../components/Palmares.jsx';
import Gallery from '../components/Gallery.jsx';
import RaceResults from '../components/RaceResults.jsx';
import Calendar from '../components/Calendar.jsx';
import Partnership from '../components/Partnership.jsx';

export default function Home() {
  return (
    <main>
      <Cover />
      <VelocityMarquee />
      <NumbersTheatre />
      <PullQuote />
      <TopPerf />
      <Gallery />
      <RaceResults />
      <Calendar />
      <Partnership />
    </main>
  );
}
