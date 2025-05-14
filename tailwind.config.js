/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F1E4C', // Navy blue from the image
          light: '#1A2C64',
          dark: '#0A1635',
        },
        secondary: {
          DEFAULT: '#F0F4FF', // Light blue dots pattern
          dark: '#E0E8FF',
        },
        accent: {
          DEFAULT: '#FFD700', // Gold accent
          dark: '#FFC700',
        },
        navy: {
          900: '#0F1E4C',
          800: '#1A2C64',
          700: '#243875',
          600: '#2E448C',
        }
      },
      backgroundImage: {
        'dots-pattern': "url('/dots-pattern.png')",
      },
    },
  },
  plugins: [],
}
