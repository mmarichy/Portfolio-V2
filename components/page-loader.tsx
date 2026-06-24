"use client";

import { useEffect, useState } from "react";
import { PegtopLoader } from "@/components/pegtop-loader";

const MIN_DURATION_MS = 900;
const FADE_DURATION_MS = 450;

export function PageLoader() {
	const [visible, setVisible] = useState(true);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		const prefersReducedMotion =
			window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;

		if (prefersReducedMotion) {
			setVisible(false);
			return;
		}

		const startedAt = Date.now();
		let fadeTimer: ReturnType<
			typeof setTimeout
		>;
		let hideTimer: ReturnType<
			typeof setTimeout
		>;

		const hide = () => {
			const elapsed = Date.now() - startedAt;
			const remaining = Math.max(
				0,
				MIN_DURATION_MS - elapsed,
			);

			fadeTimer = setTimeout(() => {
				setFadeOut(true);
				hideTimer = setTimeout(
					() => setVisible(false),
					FADE_DURATION_MS,
				);
			}, remaining);
		};

		if (document.readyState === "complete") {
			hide();
		} else {
			window.addEventListener("load", hide, {
				once: true,
			});
		}

		return () => {
			window.removeEventListener("load", hide);
			clearTimeout(fadeTimer);
			clearTimeout(hideTimer);
		};
	}, []);

	if (!visible) return null;

	return (
		<div
			className={`page-loader${fadeOut ? " page-loader--hide" : ""}`}
			aria-hidden={fadeOut}>
			<PegtopLoader />
		</div>
	);
}
