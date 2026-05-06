import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';

// Code splitting : seules la home + le header partent dans le bundle
// initial. Le reste se charge à la première navigation correspondante.
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Communiques = lazy(() => import('./pages/Communiques.jsx'));
const CommuniqueDetail = lazy(() => import('./pages/CommuniqueDetail.jsx'));

function RouteFallback() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center text-mountain-400">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-mountain-200 border-t-flame-500" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-mountain-950">
      <Header />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/communiques" element={<Communiques />} />
          <Route path="/communiques/:slug" element={<CommuniqueDetail />} />
        </Routes>
      </Suspense>
      <Analytics />
    </div>
  );
}
