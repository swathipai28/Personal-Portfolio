// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A1128',
        'deep-blue': '#030712', // Very dark for background
        'light-blue-accent': '#00ADB5',
        'gray-text': '#ABB2BF',
        'light-gray-bg': '#1F2937', // For cards/sections
        'teal-accent': '#6EE7B7', // A nice vibrant green-blue accent
        'purple-accent': '#A78BFA', // Another vibrant accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A modern sans-serif font
        mono: ['Fira Code', 'monospace'], // For code snippets
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}