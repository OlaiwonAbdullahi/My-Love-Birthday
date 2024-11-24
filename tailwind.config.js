export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        Parkinsans: ["Parkinsans", "san-serif"],
        Montserrat: ["Montserrat", "serif"],
      },
      colors: {
        primary: "#FF69B4",
        secondary: "#07F0FF",
        text: "#CDCDCD",
      },
    },
  },
  plugins: [],
};