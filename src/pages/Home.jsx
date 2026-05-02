import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import Athlete from '../components/Athlete.jsx';
import PullQuote from '../components/PullQuote.jsx';
import TopPerf from '../components/Palmares.jsx';
import Gallery from '../components/Gallery.jsx';
import RaceResults from '../components/RaceResults.jsx';
import Calendar from '../components/Calendar.jsx';
import Partnership from '../components/Partnership.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Athlete />
      <PullQuote />
      <TopPerf />
      <Gallery />
      <RaceResults />
      <Calendar />
      <Partnership />
    </main>
  );
}
