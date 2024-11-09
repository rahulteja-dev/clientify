import type { JSX } from "react";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Component(): JSX.Element {
	return (
		<footer className="w-full bg-zinc-900 text-white">
			<div className="mx-auto max-w-md rounded-xl bg-zinc-900 px-6 py-8 sm:max-w-xl md:container md:max-w-none md:px-8 md:py-12 md:rounded-none lg:px-12">
				<div className="md:flex md:justify-between md:space-x-12 lg:space-x-24">
					{/* Brand Section */}
					<div className="mb-8 md:mb-0 md:max-w-sm lg:max-w-md">
						<h2 className="text-3xl font-bold mb-4">stealth</h2>
						<p className="text-zinc-400 mb-4">
							Seamless Integration, Unmatched Transparency, Customer-Centric Efficiency, and
							Innovation Redefined.
						</p>
						<div className="space-y-2 text-zinc-400">
							<p>Call: 1234567890</p>
							<p>Email: contact@gmail.com</p>
						</div>
					</div>

					<div className="space-y-8">
						{/* Quick Links */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Quick Links</h3>
							<nav className="flex flex-wrap gap-x-6 gap-y-2">
								<Link href="/" className="hover:text-zinc-400">
									Home
								</Link>
								<Link href="/pricing" className="hover:text-zinc-400">
									Pricing
								</Link>
								<Link href="/about" className="hover:text-zinc-400">
									About Us
								</Link>
								<Link href="/contact" className="hover:text-zinc-400">
									Contact Us
								</Link>
							</nav>
						</div>

						{/* Socials */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Socials</h3>
							<div className="flex space-x-4">
								<Link href="#" className="hover:text-zinc-400">
									{/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
									<Instagram className="h-6 w-6" />
									<span className="sr-only">Instagram</span>
								</Link>
								<Link href="#" className="hover:text-zinc-400">
									{/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
									<Twitter className="h-6 w-6" />
									<span className="sr-only">Twitter</span>
								</Link>
								<Link href="#" className="hover:text-zinc-400">
									{/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
									<Linkedin className="h-6 w-6" />
									<span className="sr-only">LinkedIn</span>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
					<p>Copyright © [Product Name]. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
