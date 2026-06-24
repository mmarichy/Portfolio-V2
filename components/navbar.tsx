"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
	Mail,
	useGroupHoverIcon,
} from "@/components/animated-icons";
import { NAV_LINKS } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] =
		useState(false);
	const contact = useGroupHoverIcon();

	const isActive = (href: string) =>
		href === "/"
			? pathname === "/"
			: pathname.startsWith(href);

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
				<Link
					href="/"
					onClick={() => setOpen(false)}
					className="flex items-center transition-opacity hover:opacity-85"
					aria-label="Accueil">
					<Image
						src="/logo.png"
						alt="Mathis Marichy"
						width={655}
						height={437}
						className="h-10 w-auto md:h-14 lg:h-16"
						priority
					/>
				</Link>

				<nav
					className="hidden items-center gap-0.5 md:flex"
					aria-label="Navigation principale">
					{NAV_LINKS.map(
						({ href, label }) => (
							<Link
								key={href}
								href={href}
								className={`rounded-lg px-3.5 py-2 text-sm transition-all ${
									isActive(href)
										? "bg-violet-500/10 text-text-violet-soft"
										: "text-muted-foreground hover:bg-secondary hover:text-foreground"
								}`}>
								{label}
							</Link>
						),
					)}
				</nav>

				<div className="hidden items-center gap-4 md:flex">
					<ThemeToggle />
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 rounded-xl bg-violet-600/90 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500"
						{...contact.groupProps}>
						<Mail
							size={14}
							{...contact.iconProps}
						/>
						Contact
					</Link>
				</div>

				<div className="flex items-center gap-3 md:hidden">
					<ThemeToggle />
					<button
						type="button"
						className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
						onClick={() => setOpen(!open)}
						aria-label="Menu"
						aria-expanded={open}>
						<span
							className={`h-px w-5 origin-center bg-foreground/70 transition-all duration-300 ${
								open
									? "translate-y-[3px] rotate-45"
									: ""
							}`}
						/>
						<span
							className={`h-px w-5 bg-foreground/70 transition-all ${
								open ? "opacity-0" : ""
							}`}
						/>
						<span
							className={`h-px w-5 origin-center bg-foreground/70 transition-all duration-300 ${
								open
									? "translate-y-[3px] -rotate-45"
									: ""
							}`}
						/>
					</button>
				</div>
			</div>

			{open && (
				<div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
					<div className="mx-auto max-w-6xl space-y-0.5 px-6 py-3">
						{NAV_LINKS.map(
							({ href, label }) => (
								<Link
									key={href}
									href={href}
									onClick={() =>
										setOpen(false)
									}
									className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition-all ${
										isActive(href)
											? "bg-violet-500/10 text-text-violet-soft"
											: "text-muted-foreground hover:bg-secondary hover:text-foreground"
									}`}>
									{label}
								</Link>
							),
						)}
						<Link
							href="/contact"
							onClick={() => setOpen(false)}
							className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
								isActive("/contact")
									? "bg-violet-500 text-white"
									: "bg-violet-600/90 text-white hover:bg-violet-500"
							}`}
							{...contact.groupProps}>
							<Mail
								size={14}
								{...contact.iconProps}
							/>
							Contact
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
