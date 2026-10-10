import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { pine: "#25443A", sage: "#DCE4D8", cream: "#F8F5EE", clay: "#C77B62", ink: "#24312D" }, fontFamily: { sans: ["DM Sans", "Arial", "sans-serif"], serif: ["Cormorant Garamond", "Georgia", "serif"] } } },
  plugins: [],
};
export default config;
