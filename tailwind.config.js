/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      'envited-grey-50': '#BDBDBD',
      'envited-grey-100': '#F2F2F2',
      'envited-grey-200': '#E0E0E0',
      'envited-grey-300': '#BDBDBD',
      'envited-grey-400': '#828282',
      'envited-grey-500': '#4F4F4F',
      'envited-pink': '#E87BF8',
      'envited-purple-50': '#F6F2FF',
      'envited-purple-100': '#EDE5FF',
      'envited-purple-200': '#CCB6FF',
      'envited-purple-300': '#8456EC',
      'envited-purple-400': '#501FC1',
      'envited-purple-500': '#240D57',
      'envited-purple-gradient-50': `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)`,
      'envited-purple-gradient-100': `linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);`,
      'envited-green-50': '#D3FFE2',
      'envited-green-100': '#00805E',
      'envited-red-50': '#FFD7E0',
      'envited-red-100': '#E61445',
    },
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
