/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#082544',
        cyan: '#27D8E5',
        orange: '#FF7A1A',
        yellow: '#FFC61A',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #082544 0%, #27D8E5 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF7A1A 0%, #FFC61A 100%)',
      },
    },
  },
  plugins: [],
}
