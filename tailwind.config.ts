import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1600px",
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
};
export default config;
