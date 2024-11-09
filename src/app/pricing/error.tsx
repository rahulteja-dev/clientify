"use client";

import type { JSX } from "react";
import { useEffect } from "react";

export default function PricingError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}): JSX.Element {
	useEffect(() => {
		// Optionally log the error to an error reporting service
		// console.error(error);
	}, [error]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
			<h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
			<button
				onClick={reset}
				className="bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
			>
				Try again
			</button>
		</div>
	);
}
