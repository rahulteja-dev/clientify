"use client";

import type { JSX } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import { FAQItem } from "@/components/FAQItem";

export default function Component(): JSX.Element {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const faqs = [
		{
			id: "faq-1",
			question: "How is transparency maintained in the client onboarding process?",
			answer:
				"We ensure transparency through robust tracking mechanisms and real-time reporting tools, providing clients and teams complete visibility into the onboarding journey.",
		},
		{
			id: "faq-2",
			question: "Can the system be customised to fit specific business requirements?",
			answer:
				"Yes, our system is highly flexible and can be tailored to meet your unique business needs. We offer customizable workflows, fields, and processes to ensure the system aligns perfectly with your requirements.",
		},
		{
			id: "faq-3",
			question: "How is transparency maintained in the client onboarding process?",
			answer:
				"We maintain transparency through continuous communication, detailed progress tracking, and regular status updates throughout the onboarding process.",
		},
		{
			id: "faq-4",
			question: "What analytics and insights are available for monitoring onboarding performance?",
			answer:
				"Our platform provides comprehensive analytics including completion rates, time-to-completion metrics, bottleneck identification, and custom KPI tracking to help optimize your onboarding process.",
		},
		{
			id: "faq-5",
			question: "How does it support collaboration among teams during the onboarding process?",
			answer:
				"The platform facilitates seamless collaboration through shared workspaces, real-time notifications, task assignments, and integrated communication tools to keep all team members aligned.",
		},
		{
			id: "faq-6",
			question: "Can it be integrated with existing tools and systems used by our business?",
			answer:
				"Our system offers robust API integration capabilities and supports connections with major business tools, CRM systems, and custom solutions to ensure smooth workflow compatibility.",
		},
	];

	return (
		<div className="w-full bg-black text-white py-16">
			<div className="px-[5%] md:px-[20%]">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">You Ask We Answer</h2>
					<p className="text-lg text-gray-400">
						Here are some of the most frequently asked questions
					</p>
				</motion.div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<FAQItem
							key={faq.id}
							faq={faq}
							isOpen={openIndex === index}
							index={index}
							onToggle={() => {
								setOpenIndex(openIndex === index ? null : index);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
