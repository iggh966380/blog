module.exports = {
  darkMode: 'class', // 'media' 也可以
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // 如果是 Next.js 13 app router
    './pages/**/*.{js,ts,jsx,tsx}', // 如果還有 pages
    './components/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    screens: {
      lg: '1000px',
    },

    extend: {},
  },
  plugins: [],
};
