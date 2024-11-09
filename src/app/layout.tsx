import type { Metadata } from "next";

import "./globals.css";

import { inter, plusJakartaSans } from "@/assets/fonts";
import FAQSection from "@/containers/FAQSection";
import { cn } from "@/helpers/utils";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TailwindIndicator } from "@/components/TailwindIndicator";

export const metadata: Metadata = {
	title: "Clientify",
	description: "Client Onboarding Simplified",
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
					"min-h-screen font-jakartaSans antialiased selection:bg-buttonbg selection:text-slate-50",
					plusJakartaSans.variable,
				)}
			>
				<Header />
				<div className="mx-auto min-h-screen px-1 py-12 md:px-4 md:py-20 lg:px-8 lg:py-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
					<div className="lg:flex lg:justify-between lg:flex-col">
						{children}
						<FAQSection />
					</div>
				</div>
				<Footer />
				<TailwindIndicator />
			</body>
		</html>
	);
}
