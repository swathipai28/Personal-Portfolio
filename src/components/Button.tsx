// src/components/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  target = '_blank',
  variant = 'primary',
  className = '',
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  let variantClasses = "";

  switch (variant) {
    case 'primary':
      variantClasses = "bg-light-blue-accent text-dark-blue hover:bg-opacity-90 shadow-lg";
      break;
    case 'secondary':
      variantClasses = "bg-purple-accent text-deep-blue hover:bg-opacity-90 shadow-lg";
      break;
    case 'outline':
      variantClasses = "border-2 border-light-blue-accent text-light-blue-accent hover:bg-light-blue-accent hover:text-dark-blue";
      break;
    default:
      variantClasses = "bg-light-blue-accent text-dark-blue hover:bg-opacity-90 shadow-lg";
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;