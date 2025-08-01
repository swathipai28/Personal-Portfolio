// src/components/Footer.tsx
import React from 'react';
import SocialIcons from './SocialIcons';
// Import only the specific icon you need directly
import { FaHeart } from 'react-icons/fa'; // <--- Keep this as the direct import

const Footer: React.FC = () => {
  // Now, inside the component, alias it to avoid potential naming conflicts or TS issues
  // This is a common pattern for handling icons as components
  const HeartIcon = FaHeart; // <--- Add this line

  return (
    <footer className="bg-deep-blue py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <SocialIcons />
        <p className="text-gray-text mt-6 text-sm">
          Designed & Built with <HeartIcon className="inline text-red-500 mx-1" /> by Swathi N Pai
          {/* Use HeartIcon here ^^^^^^^^^ */}
        </p>
        <p className="text-gray-text text-xs mt-2">
          &copy; {new Date().getFullYear()} Swathi N Pai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;