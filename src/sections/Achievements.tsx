// src/sections/Achievements.tsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { achievementsData } from '../data/portfolioData';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-deep-blue">
      <div className="container mx-auto px-6">
        <SectionHeader title="Achievements & Certifications" subtitle="My Milestones & Recognitions" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                className="bg-light-gray-bg p-6 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-[1.03]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {Icon && (
                  <div className="mb-4 text-light-blue-accent">
                    <Icon className="w-16 h-16 mx-auto" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-text text-sm">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;