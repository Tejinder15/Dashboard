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
        "hero-bg": "url('/images/HeroBg.svg')",
        "mic-bg": "url('/images/MicBg.png')",
        "footer-bg": "url('/images/FooterBg.svg')",
        "sub-bg": "url('/images/SubBg.png')",
      },
      maxWidth: {
        custom: "68.12rem",
      },
      backgroundPosition: {
        "right-center": "right bottom 20rem",
        "footer-bottom": "top 5rem",
      },
      boxShadow: {
        "review-shadow": "0px 16px 40px 0px rgba(154, 148, 148, 0.25)",
      },
      borderColor: {
        "review-border": "rgba(225, 166, 255, 0.40)",
      },
      backgroundColor: {
        "arrow-btn": "rgba(225, 166, 255, 0.40)",
      },
    },
  },
  plugins: [],
};
