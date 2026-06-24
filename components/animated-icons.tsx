"use client";

import {
	ArrowRightIcon,
	BriefcaseBusinessIcon,
	ChevronRightIcon,
	CpuIcon,
	DatabaseIcon,
	EarthIcon,
	FileTextIcon,
	GithubIcon,
	LinkIcon,
	LinkedinIcon,
	LanguagesIcon,
	MapPinIcon,
	MessageSquareIcon,
	SendIcon,
	TerminalIcon,
} from "lucide-animated";
import {
	useRef,
	type ComponentType,
	type HTMLAttributes,
	type Ref,
} from "react";

export type AnimatedIconHandle = {
	startAnimation: () => void;
	stopAnimation: () => void;
};

export type AnimatedIconProps =
	HTMLAttributes<HTMLDivElement> & {
		size?: number;
		className?: string;
		animateOnHover?: boolean;
	};

export type AnimatedIcon =
	ComponentType<
		AnimatedIconProps & {
			ref?: Ref<AnimatedIconHandle>;
		}
	>;

export function useGroupHoverIcon() {
	const iconRef =
		useRef<AnimatedIconHandle>(null);

	return {
		groupProps: {
			onMouseEnter: () =>
				iconRef.current?.startAnimation(),
			onMouseLeave: () =>
				iconRef.current?.stopAnimation(),
		},
		iconProps: {
			ref: iconRef,
			animateOnHover: false as const,
		},
	};
}

export const STACK_ICON_MAP = {
	earth: EarthIcon,
	cpu: CpuIcon,
	database: DatabaseIcon,
	terminal: TerminalIcon,
} as const satisfies Record<
	string,
	AnimatedIcon
>;

export type StackIconName =
	keyof typeof STACK_ICON_MAP;

export const ABOUT_ICON_MAP = {
	cpu: CpuIcon,
	briefcase: BriefcaseBusinessIcon,
	languages: LanguagesIcon,
} as const satisfies Record<
	string,
	AnimatedIcon
>;

export {
	ArrowRightIcon as ArrowRight,
	ChevronRightIcon as ChevronRight,
	FileTextIcon as FileText,
	GithubIcon as Github,
	LinkedinIcon as Linkedin,
	SendIcon as Mail,
	LinkIcon as ExternalLink,
	MapPinIcon as MapPin,
	MessageSquareIcon as MessageSquare,
};
