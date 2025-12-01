import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        'slate-navy': '#1A2430', // Rich Slate Navy - primary dark
        cream: '#F7F4EF', // Soft Matte Cream - light background
        'sharkspace-blue': '#4F7DF3', // Sharkspace Blue - primary brand
        saffron: '#F3A63A', // Burnt Saffron - light accents
        'forest-green': '#145C48', // Forest Green - highlight accents
      },
      // Typography
      fontFamily: {
        heading: ['SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      // Custom border radius
      borderRadius: {
        '14': '14px',
        '18': '18px',
      },
      // Custom spacing (if needed)
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      // Custom box shadows
      boxShadow: {
        soft: '0 4px 20px rgba(26, 36, 48, 0.08)',
        card: '0 8px 30px rgba(26, 36, 48, 0.12)',
      },
    },
  },
  plugins: [forms, typography],
};

export default config;
