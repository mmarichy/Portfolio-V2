"use client";

import {
	motion,
	useReducedMotion,
	type HTMLMotionProps,
} from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	y?: number;
} & Pick<
	HTMLMotionProps<"div">,
	"id"
>;

export function Reveal({
	children,
	className,
	delay = 0,
	y = 28,
	id,
}: RevealProps) {
	const reduceMotion = useReducedMotion();

	if (reduceMotion) {
		return (
			<div id={id} className={className}>
				{children}
			</div>
		);
	}

	return (
		<motion.div
			id={id}
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{
				once: true,
				margin: "-48px",
			}}
			transition={{
				duration: 0.55,
				delay,
				ease: [0.22, 1, 0.36, 1],
			}}>
			{children}
		</motion.div>
	);
}

type RevealItemProps = {
	children: ReactNode;
	className?: string;
	index?: number;
};

export function RevealItem({
	children,
	className,
	index = 0,
}: RevealItemProps) {
	const reduceMotion = useReducedMotion();

	if (reduceMotion) {
		return (
			<div className={className}>{children}</div>
		);
	}

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{
				once: true,
				margin: "-40px",
			}}
			transition={{
				duration: 0.5,
				delay: index * 0.08,
				ease: [0.22, 1, 0.36, 1],
			}}>
			{children}
		</motion.div>
	);
}
