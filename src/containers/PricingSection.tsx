import type { JSX } from "react";

import { PricingCard } from "@/components/PricingCard";

const standardFeatures = [
	{ id: "std-custom-domains", text: "Custom domains" },
	{ id: "std-hubspot", text: "Hubspot integration" },
	{ id: "std-partners", text: "Partners" },
	{ id: "std-jira", text: "Jira integration" },
	{ id: "std-slack", text: "Slack integration" },
	{ id: "std-smart-fill", text: "Smart Fill" },
	{ id: "std-merge", text: "Merge templates" },
	{ id: "std-project-status", text: "Project custom status" },
];

const premiumFeatures = [
	{ id: "prem-financial", text: "Financial management" },
	{ id: "prem-resource", text: "Resource management" },
	{ id: "prem-auto-alloc", text: "Auto allocation" },
	{ id: "prem-skill", text: "Skill based resourcing" },
	{ id: "prem-capacity", text: "Capacity Management" },
	{ id: "prem-utilization", text: "Utilization tracking" },
	{ id: "prem-salesforce", text: "Salesforce integration" },
	{ id: "prem-workato", text: "Workato Integration" },
	{ id: "prem-key-events", text: "Key events and Intervals" },
	{ id: "prem-interval", text: "Interval IQ report" },
	{ id: "prem-email", text: "Custom email domain" },
];

const enterpriseFeatures = [
	{ id: "ent-support", text: "Premium support" },
	{ id: "ent-onboarding", text: "Custom onboarding and training" },
	{ id: "ent-sso", text: "Single Sign-On (SSO)" },
	{ id: "ent-currencies", text: "Multi-currencies" },
	{ id: "ent-automations", text: "Unlimited automations for salesforce integration" },
	{ id: "ent-planning", text: "Soft allocations / tentative planning" },
];

export default function PricingSection(): JSX.Element {
	return (
		<section className={`w-full py-12 text-white`}>
			<div className="container px-4 md:px-6">
				<h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
					<PricingCard title="Standard" price="$39" features={standardFeatures} />
					<PricingCard
						title="Premium"
						price="$59"
						features={premiumFeatures}
						isPopular={true}
						additionalInfo="Everything in Standard +"
					/>
					<PricingCard
						title="Enterprise"
						price="$79"
						features={enterpriseFeatures}
						additionalInfo="Everything in Premium +"
					/>
				</div>
			</div>
		</section>
	);
}
