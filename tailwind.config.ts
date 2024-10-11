import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)', 'sans-serif']
      },
      boxShadow: {
        buttonShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
      }
    }
  },
  plugins: []
};
export default config;
