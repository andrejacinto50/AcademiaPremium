import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Structure from './pages/Structure';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import About from './pages/about';

function ScrollEffects() {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      document.body.classList.toggle('page-scrolled', window.scrollY > 20);
    };

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll('[data-reveal="true"]')
      .forEach((el) => reveal.observe(el));

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      reveal.disconnect();
    };
  }, [pathname]);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function MouseGlow() {
  useEffect(() => {
    const glow = document.querySelector('.mouse-glow');

    const move = (event) => {
      if (!glow) return;

      glow.style.setProperty('--x', `${event.clientX}px`);
      glow.style.setProperty('--y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', move);

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div className="mouse-glow" aria-hidden="true" />;
}

function MobileDetector() {
  useEffect(() => {
    function checkMobile() {
      const isMobile =
        window.innerWidth <= 768 ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        document.body.classList.add('react-mobile');
      } else {
        document.body.classList.remove('react-mobile');
      }
    }

    checkMobile();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
      document.body.classList.remove('react-mobile');
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <MobileDetector />
      <MouseGlow />
      <ScrollEffects />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estrutura" element={<Structure />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}