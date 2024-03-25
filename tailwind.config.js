/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#004175', // Un ejemplo de azul marino más claro para las filas
          800: '#00325d', // Un ejemplo de azul marino más oscuro para la cabecera
        },
      },
    },
  },
  plugins: [],
}

