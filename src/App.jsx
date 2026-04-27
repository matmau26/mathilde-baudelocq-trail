import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Profile from './components/Profile.jsx';
import Performances from './components/Performances.jsx';
import Palmares from './components/Palmares.jsx';
import Gallery from './components/Gallery.jsx';
import RaceResults from './components/RaceResults.jsx';
import Calendar from './components/Calendar.jsx';
import Partnership from './components/Partnership.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-mountain-950">
      <Header />
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
    </div>
  );
}
