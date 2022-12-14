/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef4444",
      },
      height: {
        400: "400px",
      },
      width: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
