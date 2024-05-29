import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-caprasimo)'],
      },
      colors: {
        'JJ-red': '#FF4742',
        'JJ-blue': '#42ABFF',
        'JJ-yellow': '#F9FF42',
        'JJ-lightGray': '#EAEAEA',
        'JJ-green': '#59AF62',
      },
    },
  },
  plugins: [],
};
export default config;
