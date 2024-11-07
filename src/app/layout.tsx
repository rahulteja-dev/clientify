import type { Metadata } from "next";

import "./globals.css";

import { fontHeading, inter } from "@/assets/fonts";
import { cn } from "@/helpers/utils";
import { TailwindIndicator } from "@/ui/tailwindIndicator";

export const metadata: Metadata = {
	title: "Add Some Title",
	description: "Add Some Description",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): React.ReactElement {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-inter antialiased selection:bg-buttonbg selection:text-slate-50",
					inter.variable,
					fontHeading.variable,
				)}
			>
				{children}
				<TailwindIndicator />
			</body>
		</html>
	);
}
