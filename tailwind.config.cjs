/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        '7b879d': '#7b879d',
        d6e2f0: '#d6e2f0',
        '1f3251': '#1f3251',
      },
    },
  },
  plugins: [],
};
