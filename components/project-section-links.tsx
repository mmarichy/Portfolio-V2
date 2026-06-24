"use client";

import Link from "next/link";
import {
	ArrowRight,
	useGroupHoverIcon,
} from "@/components/animated-icons";

type ProjectSectionLinksProps = {
	variant: "desktop" | "mobile";
};

export function ProjectSectionLink({
	variant,
}: ProjectSectionLinksProps) {
	const { groupProps, iconProps } =
		useGroupHoverIcon();

	if (variant === "desktop") {
		return (
			<Link
				href="/projets"
				className="hidden items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-text-violet-soft md:inline-flex"
				{...groupProps}>
				Tout voir{" "}
				<ArrowRight
					size={14}
					{...iconProps}
				/>
			</Link>
		);
	}

	return (
		<Link
			href="/projets"
			className="inline-flex items-center gap-2 text-sm text-muted-foreground"
			{...groupProps}>
			Voir tous les projets{" "}
			<ArrowRight
				size={14}
				{...iconProps}
			/>
		</Link>
	);
}
