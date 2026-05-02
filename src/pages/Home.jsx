import Hero from '../components/Hero.jsx';
import VelocityMarquee from '../components/VelocityMarquee.jsx';
import AthleteStoryScroll from '../components/AthleteStoryScroll.jsx';
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
      <VelocityMarquee />
      <AthleteStoryScroll />
      <PullQuote />
      <TopPerf />
      <Gallery />
      <RaceResults />
      <Calendar />
      <Partnership />
    </main>
  );
}
