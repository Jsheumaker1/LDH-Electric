module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        black: '2px solid #000000',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
