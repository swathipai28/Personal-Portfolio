// src/components/SectionHeader.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-light-blue-accent text-lg font-medium">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-light-blue-accent mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default SectionHeader;