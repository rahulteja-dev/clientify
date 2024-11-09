import type { JSX } from "react";
import { Check } from "lucide-react";

import { Button } from "./Button";

interface PricingFeature {
	id: string;
	text: string;
}

interface PricingCardProps {
	title: string;
	price: string;
	features: PricingFeature[];
	isPopular?: boolean;
	additionalInfo?: string;
}

export function PricingCard({
	title,
	price,
	features,
	isPopular,
	additionalInfo,
}: PricingCardProps): JSX.Element {
	return (
		<div
			className={`relative flex flex-col p-6 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-800 mb-10 ${
				isPopular ? "md:transform md:-translate-y-4" : ""
			}`}
		>
			{isPopular && (
				<div className="absolute -top-4 left-0 right-0 flex justify-center">
					<div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
						🚀 Most Popular
					</div>
				</div>
			)}
			<h3 className="text-2xl font-bold mb-4">{title}</h3>
			<div className="flex items-start mb-4">
				<span className="text-5xl font-bold leading-none whitespace-nowrap">{price}</span>
				<div className="w-px bg-zinc-700 mx-3 h-12 self-center shrink-0"></div>
				<span className="text-sm text-zinc-400 mt-1">
					per team member/
					<br />
					month billed annually
				</span>
			</div>
			<Button className="mt-2 mb-6">Contact Sales</Button>
			<div className="space-y-4 flex-1">
				{additionalInfo && <p className="text-zinc-400">{additionalInfo}</p>}
				{features.map((feature, index) => {
					if (index < 3) {
						return (
							<div key={feature.id} className="flex items-center">
								<Check className="h-5 w-5 mr-2" />
								<span>{feature.text}</span>
							</div>
						);
					}
				})}
				{features.length > 3 && (
					<div className="flex items-center">
						<span className="text-zinc-400">Show all features!</span>
					</div>
				)}
			</div>
		</div>
	);
}
