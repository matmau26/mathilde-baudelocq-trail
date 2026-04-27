import Hero from '../components/Hero.jsx';
import Athlete from '../components/Athlete.jsx';
import Palmares from '../components/Palmares.jsx';
import Gallery from '../components/Gallery.jsx';
import RaceResults from '../components/RaceResults.jsx';
import Calendar from '../components/Calendar.jsx';
import Partnership from '../components/Partnership.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <Athlete />
      <Palmares />
      <Gallery />
      <RaceResults />
      <Calendar />
      <Partnership />
    </main>
  );
}
