import type { ButtonHTMLAttributes, JSX } from "react";
import { cn } from "@/helpers/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "ghost";
	size?: "default" | "icon";
	className?: string;
	children: React.ReactNode;
}

export function Button({
	variant = "default",
	size = "default",
	className = "",
	children,
	onClick,
}: ButtonProps): JSX.Element {
	return (
		<button
			className={cn(
				// Base styles
				"inline-flex items-center justify-center font-medium transition-colors",
				// Variant styles
				variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
				variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
				// Size styles
				size === "default" && "h-10 px-4 py-2",
				size === "icon" && "h-10 w-10",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
