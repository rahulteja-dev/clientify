import type { JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface FAQItemProps {
	faq: {
		id: string;
		question: string;
		answer: string;
	};
	isOpen: boolean;
	index: number;
	onToggle: () => void;
}

export function FAQItem({ faq, isOpen, index, onToggle }: FAQItemProps): JSX.Element {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1 }}
			className="border border-gray-800 rounded-lg"
		>
			<button onClick={onToggle} className="flex justify-between items-center w-full p-4 text-left">
				<span className="font-medium text-lg">{faq.question}</span>
				<motion.div
					initial={false}
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.2 }}
					className="ml-4 flex-shrink-0"
				>
					{isOpen ? (
						<Minus className="h-5 w-5 text-white" />
					) : (
						<Plus className="h-5 w-5 text-white" />
					)}
				</motion.div>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<div className="p-4 pt-0 text-gray-400">{faq.answer}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
