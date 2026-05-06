import Hero from '../components/Hero.jsx';
import Athlete from '../components/Athlete.jsx';
import TopPerf from '../components/Palmares.jsx';
import Gallery from '../components/Gallery.jsx';
import RaceResults from '../components/RaceResults.jsx';
import Calendar from '../components/Calendar.jsx';
import Partnership from '../components/Partnership.jsx';

// content-visibility: auto + une hauteur estimée laissent au navigateur la
// possibilité de sauter le layout/paint des sections hors viewport jusqu'à
// ce qu'elles s'approchent. Énorme gain de TTI sur mobile.
const deferred = 'content-visibility-auto';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={deferred} style={{ containIntrinsicSize: '900px' }}>
        <Athlete />
      </div>
      <div className={deferred} style={{ containIntrinsicSize: '900px' }}>
        <TopPerf />
      </div>
      <div className={deferred} style={{ containIntrinsicSize: '1200px' }}>
        <Gallery />
      </div>
      <div className={deferred} style={{ containIntrinsicSize: '900px' }}>
        <RaceResults />
      </div>
      <div className={deferred} style={{ containIntrinsicSize: '900px' }}>
        <Calendar />
      </div>
      <div className={deferred} style={{ containIntrinsicSize: '900px' }}>
        <Partnership />
      </div>
    </main>
  );
}
