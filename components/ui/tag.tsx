import type { ReactNode } from "react";

export function Tag({
	label,
}: {
	label: string;
}) {
	return (
		<span className="inline-flex items-center rounded border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[11px] leading-5 text-text-violet-soft">
			{label}
		</span>
	);
}

export function SectionLabel({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="mb-3 font-mono text-[11px] tracking-[0.25em] text-text-violet-muted uppercase">
			{children}
		</div>
	);
}
