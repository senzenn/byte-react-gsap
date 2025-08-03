import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Array font family
        'array-regular': ['var(--font-array-regular)'],
        'array-wide': ['var(--font-array-wide)'],
        'array-semibold': ['var(--font-array-semibold)'],
        'array-semibold-wide': ['var(--font-array-semibold-wide)'],
        'array-bold': ['var(--font-array-bold)'],
        'array-bold-wide': ['var(--font-array-bold-wide)'],

        // Author font family
        'author-extralight': ['var(--font-author-extralight)'],
        'author-light': ['var(--font-author-light)'],
        'author-regular': ['var(--font-author-regular)'],
        'author-medium': ['var(--font-author-medium)'],
        'author-semibold': ['var(--font-author-semibold)'],
        'author-bold': ['var(--font-author-bold)'],
        'author-variable': ['var(--font-author-variable)'],

        // Default fonts
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;
