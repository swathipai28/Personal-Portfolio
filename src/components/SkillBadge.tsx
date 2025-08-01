// src/components/SkillBadge.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon?: React.ElementType;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon: Icon }) => {
  return (
    <motion.div
      className="bg-light-gray-bg text-gray-text px-4 py-2 rounded-full flex items-center space-x-2 text-sm shadow-md"
      whileHover={{ scale: 1.05, backgroundColor: '#00ADB5' }} // light-blue-accent
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {Icon && <Icon className="w-5 h-5 text-light-blue-accent" />}
      <span>{name}</span>
    </motion.div>
  );
};

export default SkillBadge;