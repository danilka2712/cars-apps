/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ['ubuntu-mono', 'Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

