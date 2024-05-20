/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    spacing: {
      'negative-2': "-2rem",
      '15': "15rem"
    },
  },
  colors: {
    red: "rgb(237 83 97)",
  }
};
export const plugins = [];