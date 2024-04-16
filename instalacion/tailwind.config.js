/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Aqui podemos definir nuestras clases personalizadas
    extend: {
      // clases personalizadas
      fontFamily:{
        'arvo': ['moderna', 'sans-serif'],
        'ttl': ['Titillium Web', 'sans-serif'],
      },
      width:{
        '100pct': '100%',
      },
      height:{
        '100alto': '100vh',
        'altoSection': 'calc(100vh - 235px)',
      },

      color:{
        'color-1' : '[#151575]'
      }
    },
  },
  plugins: [],
}