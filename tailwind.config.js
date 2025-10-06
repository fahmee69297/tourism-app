/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 🚨 This line is CRUCIAL. It tells Tailwind to scan all JS/JSX/TS/TSX files
    // inside the 'src' directory and its subdirectories.
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
