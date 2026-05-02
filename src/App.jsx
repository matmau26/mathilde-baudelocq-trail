import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import CursorFlame from './components/CursorFlame.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Communiques from './pages/Communiques.jsx';
import CommuniqueDetail from './pages/CommuniqueDetail.jsx';

export default function App() {
  const location = useLocation();
  // La home est en mode présentation cinéma (plein écran, pas de scroll natif).
  // Smooth scroll, scroll-progress et header n'ont de sens que sur les autres routes.
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-cream-50 text-mountain-950">
      {!isHome && <SmoothScroll />}
      {!isHome && <ScrollProgress />}
      <CursorFlame />
      {!isHome && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/communiques" element={<Communiques />} />
        <Route path="/communiques/:slug" element={<CommuniqueDetail />} />
      </Routes>
    </div>
  );
}
