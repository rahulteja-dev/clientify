import type { JSX } from "react";

export default function PricingLoading(): JSX.Element {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
		</div>
	);
}
