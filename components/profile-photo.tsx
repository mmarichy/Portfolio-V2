import Image from "next/image";

const PHOTO_WIDTH = 2252;
const PHOTO_HEIGHT = 4000;

type ProfilePhotoProps = {
	className?: string;
	priority?: boolean;
	variant?: "square" | "portrait";
	mirrored?: boolean;
};

export function ProfilePhoto({
	className = "",
	priority = false,
	variant = "square",
	mirrored = false,
}: ProfilePhotoProps) {
	const frameClass =
		"rounded-2xl border-2 border-violet-500/30 bg-card p-1.5 shadow-[0_0_28px_rgba(124,58,237,0.12)]";
	const mirrorClass = mirrored
		? "-scale-x-100"
		: "";

	if (variant === "portrait") {
		return (
			<div
				className={`w-fit max-w-full ${frameClass} ${className}`.trim()}>
				<div className="relative overflow-hidden rounded-xl">
					<Image
						src="/presentation-picture.webp"
						alt="Mathis Marichy"
						width={PHOTO_WIDTH}
						height={PHOTO_HEIGHT}
						sizes="(max-width: 1024px) 160px, 320px"
						className={`block h-auto w-auto max-w-full ${mirrorClass}`.trim()}
						priority={priority}
					/>
					<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-card/40 via-transparent to-transparent" />
				</div>
			</div>
		);
	}

	return (
		<div
			className={`relative aspect-square w-full max-w-[260px] ${frameClass} ${className}`.trim()}>
			<div className="relative h-full w-full overflow-hidden rounded-xl">
				<Image
					src="/presentation-picture.webp"
					alt="Mathis Marichy"
					fill
					sizes="260px"
					className={`object-cover object-top ${mirrorClass}`.trim()}
					priority={priority}
				/>
				<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-card/40 via-transparent to-transparent" />
			</div>
		</div>
	);
}
