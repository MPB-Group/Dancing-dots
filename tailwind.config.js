/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink:     '#E8629A',
          peach:    '#F4A261',
          lavender: '#9B8EC4',
          mint:     '#52B788',
          sky:      '#74C0E8',
          cream:    '#FFF8F0',
          dark:     '#2D1B4E',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'cursive'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'float':    'float 4s ease-in-out infinite',
        'float2':   'float 5s ease-in-out infinite 0.8s',
        'float3':   'float 6s ease-in-out infinite 1.6s',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'fade-up':  'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
