import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Profile from './components/Profile.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-mountain-950">
      <Header />
      <main>
        <Hero />
        <Profile />
      </main>
    </div>
  );
}
