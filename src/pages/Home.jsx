import Hero from '../components/Hero.jsx';
import Profile from '../components/Profile.jsx';
import Performances from '../components/Performances.jsx';
import Palmares from '../components/Palmares.jsx';
import Gallery from '../components/Gallery.jsx';
import RaceResults from '../components/RaceResults.jsx';
import Calendar from '../components/Calendar.jsx';
import Partnership from '../components/Partnership.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <Performances />
      <Palmares />
      <Gallery />
      <RaceResults />
      <Profile />
      <Calendar />
      <Partnership />
    </main>
  );
}
