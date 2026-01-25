import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const [theme, setTheme] = useState('dark');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList[savedTheme === 'light' ? 'add' : 'remove']('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('selected-theme', newTheme);
    document.body.classList.toggle('light-theme');
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clone sidebar prop to pass toggleTheme
  // Actually we need to pass it to Sidebar. We can do that by creating the Sidebar component properly.
  // Sidebar component:
  // <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} activeSection={activeSection} toggleTheme={toggleTheme} theme={theme} />

  // WAIT: The sidebar contains the theme button in the HTML structure.
  // I need to update the Sidebar component to accept toggleTheme and theme props.

  return (
    <div className="App">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeSection={activeSection}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <main className="main">
        <Home isLightTheme={theme === 'light'} />
        <About />
        <Skills />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
