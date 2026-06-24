"use client";

import {
	STACK_ICON_MAP,
	useGroupHoverIcon,
	type AnimatedIcon,
} from "@/components/animated-icons";
import { RevealItem } from "@/components/reveal";
import { STACK_CATEGORIES } from "@/lib/data";
import type { StackCategory } from "@/lib/types";

function StackCategoryCard({
	icon,
	label,
	items,
	index,
}: StackCategory & { index: number }) {
	const { groupProps, iconProps } =
		useGroupHoverIcon();
	const Icon: AnimatedIcon =
		STACK_ICON_MAP[icon];

	return (
		<RevealItem index={index}>
			<div
				className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-violet-500/25 hover:shadow-[0_4px_32px_rgba(124,58,237,0.07)]"
				{...groupProps}>
			<div className="mb-5 flex items-center gap-3">
				<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 transition-colors group-hover:bg-violet-500/15">
					<Icon
						size={16}
						className="text-violet-400"
						{...iconProps}
					/>
				</div>
				<span className="font-display font-semibold text-foreground">
					{label}
				</span>
			</div>
			<div className="space-y-2.5">
				{items.map((item) => (
					<div
						key={item}
						className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
						<div className="h-1 w-1 shrink-0 rounded-full bg-violet-500/40" />
						{item}
					</div>
				))}
			</div>
			</div>
		</RevealItem>
	);
}

export function StackCategories() {
	return (
		<div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{STACK_CATEGORIES.map(
				(category, index) => (
					<StackCategoryCard
						key={category.label}
						index={index}
						{...category}
					/>
				),
			)}
		</div>
	);
}
