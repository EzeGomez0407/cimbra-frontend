/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#225599",
        "yellow-primary": "#FFD700",
        placeholder: "#9e9e9e",
        "light-yellow": "#c7b75b",
        "blue-box-info": "#4477ff",
        info: "#405C4D",
        "important-info": "#003366",
      },
    },
  },
  plugins: [],
};
