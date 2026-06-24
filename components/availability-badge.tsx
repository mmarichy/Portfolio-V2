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
			className={`inline-flex items-center gap-2 rounded-full border border-[#fde68a]/35 bg-[#fde68a]/10 px-3.5 py-1.5 text-xs font-medium text-[#fde68a] ${className}`.trim()}>
			<div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#fde68a] shadow-[0_0_8px_2px_rgba(253,230,138,0.5)]" />
			{label}
		</div>
	);
}
