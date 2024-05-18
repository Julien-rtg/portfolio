/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    spacing: {
      'negative-2': "-2rem",
    },
  },
  colors: {
    red: {
        100: "#ffcccc",
        200: "#ff9999",
        300: "#ff6666",
        400: "#ff3333",
        500: "#ff0000",
        600: "#cc0000",
        700: "#990000",
        800: "#660000",
        900: "#330000"
    },

    indigo: {
        100: "#e6e6e6",
        200: "#cccccc",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a"
    },
  }
};
export const plugins = [];