type AvailabilityBadgeProps = {
	label?: string;
	className?: string;
};

export function AvailabilityBadge({
	label = "Disponible dès septembre 2026",
	className = "",
}: AvailabilityBadgeProps) {
	return (
		<div
			className={`inline-flex items-center gap-2 rounded-full border border-availability-border bg-availability-background px-3.5 py-1.5 text-xs font-medium text-availability-foreground ${className}`.trim()}>
			<div
				className="h-1.5 w-1.5 animate-pulse rounded-full bg-availability-dot shadow-[0_0_8px_2px_var(--availability-dot-glow)]"
				aria-hidden="true"
			/>
			{label}
		</div>
	);
}
