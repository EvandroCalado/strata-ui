import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
        destructive: colors.red,
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
