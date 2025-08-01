// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind global styles are imported
import useScrollSpy from './hooks/useScrollSpy';

const App: React.FC = () => {
  // Define all section IDs for scroll spy
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact'];
  const activeSection = useScrollSpy(sectionIds, { rootMargin: '-40% 0px -60% 0px' }); // Adjust rootMargin as needed

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;