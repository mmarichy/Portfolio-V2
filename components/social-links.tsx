"use client";

import {
	FileText,
	Github,
	Linkedin,
	Mail,
	useGroupHoverIcon,
	type AnimatedIcon,
} from "@/components/animated-icons";
import { CONTACT_LINKS } from "@/lib/data";
import type { ContactIcon } from "@/lib/types";

const ICON_MAP = {
	mail: Mail,
	github: Github,
	linkedin: Linkedin,
	cv: FileText,
} as const satisfies Record<
	ContactIcon,
	AnimatedIcon
>;

type SocialLinksProps = {
	size?: number;
	className?: string;
	iconClassName?: string;
	variant?: "plain" | "boxed";
};

function SocialLink({
	href,
	label,
	icon,
	external = false,
	size,
	className,
}: {
	href: string;
	label: string;
	icon: ContactIcon;
	external?: boolean;
	size: number;
	className: string;
}) {
	const { groupProps, iconProps } =
		useGroupHoverIcon();
	const Icon = ICON_MAP[icon];
	const opensInNewTab =
		external || href.startsWith("http");

	return (
		<a
			href={href}
			className={className}
			aria-label={label}
			{...(opensInNewTab
				? {
						target: "_blank",
						rel: "noopener noreferrer",
					}
				: {})}
			{...groupProps}>
			<Icon
				size={size}
				{...iconProps}
			/>
		</a>
	);
}

export function SocialLinks({
	size = 17,
	className = "flex items-center gap-5",
	iconClassName,
	variant = "plain",
}: SocialLinksProps) {
	const resolvedIconClassName =
		iconClassName ??
		(variant === "boxed"
			? "rounded-xl border border-border bg-secondary p-2.5 text-muted-foreground transition-all hover:border-violet-500/30 hover:text-foreground"
			: "text-muted-foreground transition-colors hover:text-foreground");

	return (
		<div className={className}>
			{CONTACT_LINKS.map((link) => (
				<SocialLink
					key={link.href}
					{...link}
					size={size}
					className={
						resolvedIconClassName
					}
				/>
			))}
		</div>
	);
}
