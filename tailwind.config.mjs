/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["'Clash Display'", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ibm: ["var(--font-ibm-plex-sans)", "sans-serif"],
        open: ["var(--font-open-sans)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"], // Adds Manrope as a custom font family
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
