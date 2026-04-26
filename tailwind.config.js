/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mountain: {
          50: '#f4f7fa',
          100: '#e6eef5',
          200: '#c9dae8',
          300: '#9cbcd2',
          400: '#6896b6',
          500: '#47789c',
          600: '#365f81',
          700: '#2d4d68',
          800: '#284158',
          900: '#1f3144',
          950: '#0f1c29',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'bounce-slow': 'bounceSlow 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
