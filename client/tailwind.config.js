module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        skyblue: {
          '50':  '#f3f8f9',
          '100': '#daf1fa',
          '200': '#afe0f5',
          '300': '#7cc2e7',
          '400': '#009ddb',
          '500': '#357dc0',
          '600': '#2d62a9',
          '700': '#254a87',
          '800': '#1b3260',
          '900': '#101f3f'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
