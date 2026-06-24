"use client";

import {
	ABOUT_ICON_MAP,
	useGroupHoverIcon,
	type AnimatedIcon,
} from "@/components/animated-icons";
import { RevealItem } from "@/components/reveal";
import { ABOUT_INFO } from "@/lib/data";
import type { AboutInfo } from "@/lib/types";

function AboutInfoCard({
	l,
	v,
	icon,
	index,
}: AboutInfo & { index: number }) {
	const { groupProps, iconProps } =
		useGroupHoverIcon();
	const Icon: AnimatedIcon =
		ABOUT_ICON_MAP[icon];

	return (
		<RevealItem index={index}>
			<div
				className="group rounded-xl border border-border bg-secondary/60 p-3.5 transition-all hover:border-violet-500/25"
				{...groupProps}>
			<div className="mb-2 flex items-center gap-2">
				<Icon
					size={14}
					className="text-text-violet-soft"
					{...iconProps}
				/>
				<div className="font-mono text-[11px] text-muted-foreground">
					{l}
				</div>
			</div>
			<div className="text-sm font-medium text-foreground">
				{v}
			</div>
			</div>
		</RevealItem>
	);
}

export function AboutInfoGrid() {
	return (
		<div className="mt-8 grid grid-cols-2 gap-3">
			{ABOUT_INFO.map((info, index) => (
				<AboutInfoCard
					key={info.l}
					index={index}
					{...info}
				/>
			))}
		</div>
	);
}
