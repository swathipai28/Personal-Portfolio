// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // For mobile menu toggle

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-deep-blue bg-opacity-90 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="#hero" className="hover:text-light-blue-accent transition-colors duration-300">
            S.N.Pai
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                className={`relative text-lg font-medium transition-colors duration-300
                  ${activeSection === item.id ? 'text-light-blue-accent' : 'text-gray-text hover:text-white'}`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5 bg-light-blue-accent w-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-deep-blue bg-opacity-95 shadow-lg overflow-hidden"
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                className={`block text-xl font-medium py-2 px-4 rounded-lg
                  ${activeSection === item.id ? 'text-light-blue-accent bg-light-blue-accent bg-opacity-20' : 'text-gray-text hover:text-white hover:bg-gray-700'}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;