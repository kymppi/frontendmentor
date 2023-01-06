/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        '7b879d': '#7b879d',
        d6e2f0: '#d6e2f0',
        '1f3251': '#1f3251',
        f5f7ff: '#f5f7ff',
        e0e8ff: '#e0e8ff',
        '1f2f56': '#1f2f56',
        '3829e0': '#3829e0',
      },
      fontFamily: {
        redhatdisplay: 'Red Hat Display',
      },
    },
  },
  plugins: [],
};
