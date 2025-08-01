// src/sections/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLaptopCode } from 'react-icons/fa';
import { heroData } from '../data/portfolioData';
import Button from '../components/Button';
import SocialIcons from '../components/SocialIcons';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-deep-blue overflow-hidden">
      {/* Background gradient/pattern (optional, for visual flair) */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-dark-blue to-light-gray-bg opacity-30"></div>
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('/noise.svg')", backgroundSize: "cover" }}></div>


      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.img
            src="/assets/images/profile2.jpg" // Make sure this path is correct
            alt="Swathi N Pai"
            className="w-36 h-36 rounded-full object-cover border-4 border-light-blue-accent shadow-xl mb-6"
            variants={itemVariants}
          />
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-light-blue-accent">{heroData.name}</span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-text mb-6 font-medium"
            variants={itemVariants}
          >
            {heroData.tagline}
          </motion.p>
          <motion.p
            className="text-md sm:text-lg text-gray-text max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            {heroData.shortIntro}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            variants={itemVariants}
          >
            <Button href="#projects" variant="primary">
              <FaLaptopCode /> View Projects
            </Button>
            <Button href={heroData.resumeUrl} target="_blank" variant="outline">
              <FaDownload /> Download Resume
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialIcons />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;