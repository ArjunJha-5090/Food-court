import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FoodStallsPage } from './pages/FoodStallsPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BanquetsPage } from './pages/BanquetsPage';
import { BlogPage } from './pages/BlogPage';
import { MenuPage } from './pages/MenuPage';

function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="font-sans text-text antialiased min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow relative">
          <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="fixed top-[40%] left-[-200px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="fixed bottom-[-100px] right-[20%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/stalls" element={<FoodStallsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/banquets" element={<BanquetsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
