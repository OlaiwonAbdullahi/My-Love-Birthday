export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Parkinsans: ["Parkinsans", "sans-serif"],
        Sevillana: ["Sevillana", "cursive"],
      },
      colors: {
        primary: "#FF69B4",
        secondary: "#283747",
        text: "#CDCDCD",
      },
    },
  },
  plugins: [],
};