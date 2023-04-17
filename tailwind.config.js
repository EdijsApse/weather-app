/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "dark-blue": "#0b131e",
        "darkish-blue": "#202b3b",
        "dark-cloud-blue": "#35455e",
        "pale-gray": "#828893",
        "cloud-blue": "#0095ff",
        "bright-gray": "#c4cad3",
      },
    },
  },
  plugins: [],
};
