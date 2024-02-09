/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  
  ],
  theme: {
    extend: {
      },
    screens: {
        'sm': '320px',

        'md': '768px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px'
    },

  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
