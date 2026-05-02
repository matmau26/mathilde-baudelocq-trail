import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import CursorFlame from './components/CursorFlame.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Communiques from './pages/Communiques.jsx';
import CommuniqueDetail from './pages/CommuniqueDetail.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-mountain-950">
      <SmoothScroll />
      <ScrollProgress />
      <CursorFlame />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/communiques" element={<Communiques />} />
        <Route path="/communiques/:slug" element={<CommuniqueDetail />} />
      </Routes>
    </div>
  );
}
