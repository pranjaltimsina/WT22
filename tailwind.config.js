module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DelaGothic: ['Dela Gothic One', 'cursive'],
        Sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'yearPattern': "url('/src/assets/2022.svg')",
      }
    },
  },
  plugins: [],
}
