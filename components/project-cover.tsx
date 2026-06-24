"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectCoverProps = {
	src: string;
	alt: string;
	title: string;
};

export function ProjectCover({
	src,
	alt,
	title,
}: ProjectCoverProps) {
	const [hasError, setHasError] =
		useState(false);

	if (hasError) {
		return (
			<div className="absolute inset-0 flex items-center justify-center bg-secondary">
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(ellipse at 35% 30%, rgba(124,58,237,0.28) 0%, rgba(11,11,17,0.92) 65%)",
					}}
				/>
				<span className="relative font-display text-3xl font-black text-text-violet-soft">
					{title}
				</span>
			</div>
		);
	}

	return (
		<Image
			src={src}
			alt={alt}
			fill
			sizes="(max-width: 768px) 100vw, 430px"
			className="object-cover object-top opacity-55 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-75"
			onError={() => setHasError(true)}
		/>
	);
}
