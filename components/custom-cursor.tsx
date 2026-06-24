"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
	'a, button, [role="button"], input, textarea, select, label[for], summary, [data-cursor-hover], [role="menuitem"], .context-menu-item';

const RING_LERP = 0.14;
const TRAIL_LENGTH = 12;
const TRAIL_LERP = 0.28;

export function CustomCursor() {
	const dotRef = useRef<HTMLDivElement>(null);
	const ringRef = useRef<HTMLDivElement>(null);
	const trailRefs = useRef<(HTMLDivElement | null)[]>(
		[],
	);
	const mouse = useRef({ x: -100, y: -100 });
	const ring = useRef({ x: -100, y: -100 });
	const trail = useRef(
		Array.from({ length: TRAIL_LENGTH }, () => ({
			x: -100,
			y: -100,
		})),
	);
	const hovering = useRef(false);
	const visible = useRef(false);
	const frame = useRef<number | null>(null);

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const hasFinePointer = window.matchMedia(
			"(pointer: fine)",
		).matches;
		const isDesktopViewport = window.matchMedia(
			"(min-width: 768px)",
		).matches;

		if (
			prefersReducedMotion ||
			!hasFinePointer ||
			!isDesktopViewport
		) {
			return;
		}

		const root = document.documentElement;
		root.dataset.customCursor = "true";

		const setTrailOpacity = (opacity: string) => {
			for (const el of trailRefs.current) {
				if (el) el.style.opacity = opacity;
			}
		};

		const setVisible = (next: boolean) => {
			if (visible.current === next) return;
			visible.current = next;
			const opacity = next ? "1" : "0";
			if (dotRef.current) {
				dotRef.current.style.opacity = opacity;
			}
			if (ringRef.current) {
				ringRef.current.style.opacity = opacity;
			}
			setTrailOpacity(next ? "" : "0");
		};

		const setHovering = (next: boolean) => {
			if (hovering.current === next) return;
			hovering.current = next;
			ringRef.current?.classList.toggle(
				"is-hovering",
				next,
			);
			dotRef.current?.classList.toggle(
				"is-hovering",
				next,
			);
		};

		const tick = () => {
			ring.current.x +=
				(mouse.current.x - ring.current.x) *
				RING_LERP;
			ring.current.y +=
				(mouse.current.y - ring.current.y) *
				RING_LERP;

			if (ringRef.current) {
				ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
			}

			const points = trail.current;
			points[0].x +=
				(mouse.current.x - points[0].x) * 0.42;
			points[0].y +=
				(mouse.current.y - points[0].y) * 0.42;

			for (let i = 1; i < TRAIL_LENGTH; i++) {
				points[i].x +=
					(points[i - 1].x - points[i].x) *
					TRAIL_LERP;
				points[i].y +=
					(points[i - 1].y - points[i].y) *
					TRAIL_LERP;
			}

			for (let i = 0; i < TRAIL_LENGTH; i++) {
				const el = trailRefs.current[i];
				if (!el) continue;

				const { x, y } = points[i];
				const progress = i / (TRAIL_LENGTH - 1);
				const size = 5 - progress * 3.2;
				const opacity =
					(1 - progress * 0.92) *
					(hovering.current ? 0.55 : 0.7);

				el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
				el.style.width = `${size}px`;
				el.style.height = `${size}px`;
				el.style.opacity = visible.current
					? String(opacity)
					: "0";
			}

			if (dotRef.current) {
				dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
			}

			frame.current = requestAnimationFrame(tick);
		};

		const onPointerMove = (
			event: PointerEvent,
		) => {
			mouse.current.x = event.clientX;
			mouse.current.y = event.clientY;
			setVisible(true);

			const target = event.target;
			if (target instanceof Element) {
				setHovering(
					Boolean(
						target.closest(
							INTERACTIVE_SELECTOR,
						),
					),
				);
			}
		};

		const onPointerLeave = () => {
			setVisible(false);
		};

		const onDocumentEnter = () => {
			setVisible(true);
		};

		const onPointerDown = () => {
			ringRef.current?.classList.add("is-pressed");
			dotRef.current?.classList.add("is-pressed");
		};

		const onPointerUp = () => {
			ringRef.current?.classList.remove(
				"is-pressed",
			);
			dotRef.current?.classList.remove(
				"is-pressed",
			);
		};

		frame.current = requestAnimationFrame(tick);
		window.addEventListener(
			"pointermove",
			onPointerMove,
		);
		document.documentElement.addEventListener(
			"mouseleave",
			onPointerLeave,
		);
		document.documentElement.addEventListener(
			"mouseenter",
			onDocumentEnter,
		);
		window.addEventListener(
			"pointerdown",
			onPointerDown,
		);
		window.addEventListener(
			"pointerup",
			onPointerUp,
		);

		return () => {
			delete root.dataset.customCursor;
			if (frame.current !== null) {
				cancelAnimationFrame(frame.current);
			}
			window.removeEventListener(
				"pointermove",
				onPointerMove,
			);
			document.documentElement.removeEventListener(
				"mouseleave",
				onPointerLeave,
			);
			document.documentElement.removeEventListener(
				"mouseenter",
				onDocumentEnter,
			);
			window.removeEventListener(
				"pointerdown",
				onPointerDown,
			);
			window.removeEventListener(
				"pointerup",
				onPointerUp,
			);
		};
	}, []);

	return (
		<div aria-hidden className="custom-cursor">
			{Array.from({ length: TRAIL_LENGTH }).map(
				(_, index) => (
					<div
						key={index}
						ref={(element) => {
							trailRefs.current[index] =
								element;
						}}
						className="custom-cursor-trail"
					/>
				),
			)}
			<div
				ref={ringRef}
				className="custom-cursor-ring"
			/>
			<div
				ref={dotRef}
				className="custom-cursor-dot"
			/>
		</div>
	);
}
