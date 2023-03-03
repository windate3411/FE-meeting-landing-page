/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#4D96A9",
      "purple-dark": "#855FB1",
      "purple-light": "#D9B8FF",
      "gray-dark": "#28283D",
      "gray-light": "#87879D",
      "blue-light": "#8FE3F9",
      "white-light": "#FAFAFA",
    },
    fontFamily: {
      redhat: ["Red Hat Display", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "footer-mobile": "url('/src/assets/mobile/image-footer.jpg')",
        "footer-desktop": "url('/src/assets/desktop/image-footer.jpg')",
        "footer-tablet": "url('/src/assets/tablet/image-footer.jpg')",
      },
    },
  },
  plugins: [],
};
