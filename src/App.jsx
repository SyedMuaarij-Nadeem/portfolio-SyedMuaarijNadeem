import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ParticleBackground from './components/ParticleBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Floating orbs background component
const BgOrbs = () => {
  const orbsRef = useRef();

  useEffect(() => {
    const orbs = orbsRef.current?.querySelectorAll('.orb');
    if (!orbs) return;

    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        x: `random(-40, 40)`,
        y: `random(-50, 50)`,
        duration: `random(15, 25)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 2,
      });
    });

    // Mouse parallax on orbs
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xFrac = (clientX / window.innerWidth - 0.5);
      const yFrac = (clientY / window.innerHeight - 0.5);
      orbs.forEach((orb, i) => {
        const depth = (i + 1) * 8;
        gsap.to(orb, {
          x: `+=${xFrac * depth}`,
          y: `+=${yFrac * depth}`,
          duration: 1.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-orbs" ref={orbsRef}>
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />
      <span className="orb orb-4" />
      <span className="orb orb-5" />
    </div>
  );
};

// Main Portfolio Page Layout
const PortfolioPage = ({ isSidebarOpen, setIsSidebarOpen, activeSection }) => {
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeSection={activeSection}
      />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/project/');

  // Initialize Lenis smooth scroll (only on main portfolio page)
  useEffect(() => {
    if (isDetailPage) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const rafCallback = (time) => { lenis.raf(time * 1000); };
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after Lenis is ready
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
    };
  }, [isDetailPage]);

  // Scroll spy
  useEffect(() => {
    if (isDetailPage) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDetailPage]);

  return (
    <div className="App">
      <BgOrbs />
      <ParticleBackground />
      <Routes>
        <Route
          path="/"
          element={
            <PortfolioPage
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              activeSection={activeSection}
            />
          }
        />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
