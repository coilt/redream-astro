/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      boxShadow: {
        xl: "0px 0px 25px -5px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sans: ["Kanit"],
        serif: ["Playfair Display"],
      },
      colors: {
        gunmetal: {
          50: "#626262",
          100: "#585858",
          200: "#434343",
          300: "#2F2F2F",
          400: "#1A1A1A",
          500: "#060606",
          600: "#020202",
          700: "#010101",
          800: "#0A0A0A",
          900: "#000000",
        },
        "red-devil": {
          DEFAULT: "#81001B",
          50: "#FF3A63",
          100: "#FF2553",
          200: "#FB0035",
          300: "#D3002C",
          400: "#AA0024",
          500: "#81001B",
          600: "#49000F",
          700: "#110004",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
