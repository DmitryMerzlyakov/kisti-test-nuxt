/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundColor: {
        purple: "#822976",
        peach: "#FDF9F7",
        filter: "#F5DDD2",
      },
      content: {
        search: 'url("/assets/search.svg")',
      },
      colors: {
        mango: "#EFC6B4",
        purple: "#822976",
        ink: "#151321",
        pink: "#E280A8",
      },
    },
  },
  plugins: [],
};
