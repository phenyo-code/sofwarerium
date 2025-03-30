/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enables class-based dark mode
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#6393FF', // Custom primary color
          primaryHover: '#537CFF', // Custom hover color
          secondary: '', // Custom primary color
          Border: '#537CFF', // Custom hover color
        },
        animation: {
          fadeIn: "fadeIn 1s ease-in-out", // Custom fade-in animation
          pulseSlow: "pulse 2s ease-in-out infinite", // Optional slow pulse animation
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  };
  