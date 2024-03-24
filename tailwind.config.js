/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/*.{js,jsx}', './src/pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      transitionDuration: {
        default: '300ms',
      },
    },
  },
  plugins: [],
}
