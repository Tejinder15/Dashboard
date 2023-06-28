/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ghost: "#7A3199",
        "danger-start": "#4776E6",
        "danger-end": "#8E54E9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        ten: "10px",
      },
      backgroundImage: {
        "custom-linear": " linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
      },
      maxWidth: {
        custom: "68.12rem",
      },
    },
  },
  plugins: [],
};
