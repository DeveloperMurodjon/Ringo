/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.2) -13.19%, rgba(0, 0, 0, 0.85) 94.01%)",
      },
      fontFamily: {
        raleway: ["raleway", "sans-serif"], // Raleway shriftini qo'shamiz
      },
      colors: {
        black: "#282B22",
        green: "#3D4A39",
        orange: "#AE7B3C",
        gray: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
