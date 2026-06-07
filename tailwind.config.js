/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#070D22',
        cyan: '#315BEA',
        orange: '#F06A9A',
        yellow: '#EAF3FF',
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #070D22 0%, #111936 100%)',
        'gradient-accent': 'linear-gradient(135deg, #315BEA 0%, #5D78F0 100%)',
      },
    },
  },
  plugins: [],
}
