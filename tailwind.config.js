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
        flame: {
          50: '#fff4ef',
          100: '#ffe2d4',
          200: '#ffbf9f',
          300: '#ff9968',
          400: '#ff7338',
          500: '#ff4d18',
          600: '#ee3500',
          700: '#c32700',
          800: '#9a2102',
          900: '#7c1e07',
        },
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
        solar: {
          200: '#ffe48a',
          300: '#ffd762',
          400: '#ffc83d',
          500: '#ffae00',
        },
        cream: {
          50: '#fffaf3',
          100: '#fff3e3',
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
        display: ['Oswald', 'Inter', 'sans-serif'],
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
