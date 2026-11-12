/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#D96B1E', // Ember flame
          600: '#B35212',
          700: '#8B2E0F', // Terracotta
          800: '#5C131E', // Wine
          900: '#1C120C', // Charcoal
          950: '#120905', // Deep night
        },
        gold: {
          400: '#fbbf24',
          500: '#FFA812',
        },
        cream: {
          50: '#ffffff',
          100: '#FDF6EE',
          200: '#F4EAE0',
          300: '#E6D7C8',
          400: '#C7B5A7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(217, 107, 30, 0.35)',
        'glow-lg': '0 0 60px -15px rgba(217, 107, 30, 0.45)',
      }
    },
  },
  plugins: [],
}
