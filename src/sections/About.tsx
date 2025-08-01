// src/sections/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { aboutData } from '../data/portfolioData';

const About: React.FC = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-dark-blue">
      <div className="container mx-auto px-6">
        <SectionHeader title="About Me" subtitle="Get to Know My Journey" />

        <div className="max-w-4xl mx-auto text-lg leading-relaxed">
          <motion.p
            className="text-gray-text mb-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={paragraphVariants}
          >
            {aboutData.intro}
          </motion.p>
          <motion.p
            className="text-gray-text mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={paragraphVariants}
            transition={{ delay: 0.2 }}
          >
            {aboutData.paragraph1}
          </motion.p>
          <motion.p
            className="text-gray-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={paragraphVariants}
            transition={{ delay: 0.4 }}
          >
            {aboutData.paragraph2}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;