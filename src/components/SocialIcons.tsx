// src/components/SocialIcons.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolioData'; // Ensure path is correct

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-text hover:text-light-blue-accent transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 * index }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <link.icon className="w-8 h-8" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;