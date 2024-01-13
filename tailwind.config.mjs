/** @type {import('tailwindcss').Config} */

//#f6f9fc
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "main-bg": "var(--main-background)",
      "secondary-bg": "var(--secondary-background)",
      "main-content": "var(--main-content)",
      "header-color": "var(--header-color)",
      "primary-color": "var(--primary-color)",
    },
    borderRadius: {
      DEFAULT: "1rem",
    },
    extend: {
      backgroundColor: {
        main: "#f6f9fc",
      },
    },
    extend: {
      margin: {
        section: "80px",
      },
      padding: {
        section: "80px",
      },
    },
  },
  plugins: [],
};
