import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueOfButton' : '#1D5B95',
        'hoverOfButton' : '#318FE7',
        'resultDiv' : '#95B5F5',
        'borderDiv' : '#6685C4',
        'header' : '#38599D',
        'blueText' : '#435497',
        'borderLine' : '#B1B1B1',
        'blueHeader' : '#8096C4',
        'purpleOfButton' : '#bfb0d9'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "my-image" : "https://png.pngtree.com/background/20210715/original/pngtree-blue-pink-gradient-background-picture-image_1285876.jpg"
        },
    },
  },
  plugins: [

  ],
};
export default config;
