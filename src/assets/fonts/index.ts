import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
});

export const fontHeading = localFont({
	src: "./AmsterdamOne.ttf",
	variable: "--font-heading",
});
