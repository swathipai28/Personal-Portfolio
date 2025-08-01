// src/sections/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import { skillsData } from '../data/portfolioData';

const Skills: React.FC = () => {
  const skillCategories = [
    { name: 'Languages', skills: skillsData.filter(s => s.category === 'Languages') },
    { name: 'Frameworks & Tools', skills: skillsData.filter(s => s.category === 'Frameworks & Tools') },
    { name: 'Databases', skills: skillsData.filter(s => s.category === 'Databases') },
    { name: 'Dev Tools', skills: skillsData.filter(s => s.category === 'Dev Tools') },
    { name: 'Soft Skills', skills: skillsData.filter(s => s.category === 'Soft Skills') },
    { name: 'Spoken Languages', skills: skillsData.filter(s => s.category === 'Spoken Languages') },
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-deep-blue">
      <div className="container mx-auto px-6">
        <SectionHeader title="My Skills" subtitle="Technologies & Capabilities" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="bg-dark-blue p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-light-blue-accent pb-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                  >
                    <SkillBadge name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;