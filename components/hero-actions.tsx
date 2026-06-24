"use client";

import Link from "next/link";
import {
	ArrowRight,
	Mail,
	useGroupHoverIcon,
} from "@/components/animated-icons";

export function HeroActions() {
	const projects = useGroupHoverIcon();
	const contact = useGroupHoverIcon();

	const buttonClass =
		"inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-xl px-8 py-3.5 sm:w-auto sm:max-w-none";

	return (
		<div className="mb-24 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-start sm:justify-start">
			<Link
				href="/projets"
				className={`${buttonClass} bg-violet-600 font-semibold text-white shadow-[0_0_32px_rgba(124,58,237,0.38)] transition-colors hover:bg-violet-500`}
				{...projects.groupProps}>
				Voir mes projets
				<ArrowRight
					size={16}
					{...projects.iconProps}
				/>
			</Link>
			<Link
				href="/contact"
				className={`${buttonClass} border border-border font-medium text-foreground/80 transition-all hover:border-violet-500/40 hover:bg-secondary/50 hover:text-foreground`}
				{...contact.groupProps}>
				<Mail
					size={16}
					{...contact.iconProps}
				/>
				Me contacter
			</Link>
		</div>
	);
}
