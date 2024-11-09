import type { JSX } from "react";
import PricingSection from "@/containers/PricingSection";

export const metadata = {
	title: "Pricing | Your App Name",
	description: "Choose the perfect plan for your team's needs",
};

export default function PricingPage(): JSX.Element {
	return (
		<main className="min-h-screen">
			<PricingSection />
		</main>
	);
}
