"use client";

import type { JSX } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "./Button";

export default function Component(): JSX.Element {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	return (
		<>
			<header className="bg-[#1F2419] px-4 py-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-[1600px]">
					<div className="flex items-center justify-between">
						<Link href="/" className="flex items-center gap-3">
							<div className="h-8 w-8 rounded-full bg-[#6B4D32] sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
							<span className="text-lg font-medium text-white sm:text-xl lg:text-2xl">stealth</span>
						</Link>

						<nav className="hidden lg:block">
							<div className="rounded-full bg-white/10 px-6 py-2">
								<ul className="flex items-center space-x-8">
									<li>
										<Link href="#" className="text-white hover:text-gray-300">
											Home
										</Link>
									</li>
									<li>
										<Link href="#" className="text-white/70 hover:text-white">
											Pricing
										</Link>
									</li>
									<li>
										<Link href="#" className="text-white/70 hover:text-white">
											About Us
										</Link>
									</li>
									<li>
										<Link href="#" className="text-white/70 hover:text-white">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
						</nav>

						<div className="hidden lg:block">
							<Button className="rounded-full bg-white px-6 text-black hover:bg-white/90">
								Join Waitlist
							</Button>
						</div>

						<Button
							variant="ghost"
							size="icon"
							className="text-white lg:hidden"
							onClick={() => {
								setIsMenuOpen(true);
							}}
						>
							<Menu className="h-8 w-8" />
							<span className="sr-only">Open menu</span>
						</Button>
					</div>
				</div>
			</header>

			<div
				className={`fixed inset-0 z-50 bg-black/90 transition-opacity duration-300 ease-in-out lg:hidden ${
					isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<div
					className={`flex h-full flex-col p-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
						isMenuOpen ? "translate-y-0" : "-translate-y-full"
					}`}
				>
					<div className="flex justify-end">
						<Button
							variant="ghost"
							size="icon"
							className="text-white"
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							<X className="h-8 w-8" />
							<span className="sr-only">Close menu</span>
						</Button>
					</div>
					<nav className="mt-8 flex flex-col space-y-8 text-center">
						<Link
							href="#"
							className="text-2xl font-medium text-white"
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							Home
						</Link>
						<Link
							href="#"
							className="text-2xl font-medium text-white/70"
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							Pricing
						</Link>
						<Link
							href="#"
							className="text-2xl font-medium text-white/70"
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							About Us
						</Link>
						<Link
							href="#"
							className="text-2xl font-medium text-white/70"
							onClick={() => {
								setIsMenuOpen(false);
							}}
						>
							Contact Us
						</Link>
					</nav>
					<div className="mt-auto pb-8 text-center text-sm text-white/60">
						We&apos;re committed to shaping the future of client
					</div>
				</div>
			</div>
		</>
	);
}
