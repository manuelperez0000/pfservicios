/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'primary': '#1E68FA',
        'secondary': '#4B69A5',
        'black': '#000000',
        'third':'#FC3D19',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

