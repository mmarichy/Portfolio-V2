"use client";

import { useEffect, useState } from "react";
import {
	getStoredTheme,
	type Theme,
	THEME_STORAGE_KEY,
	transitionTheme,
} from "@/lib/theme";

const buttonClass =
	"inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-lg leading-none transition-all hover:border-violet-500/30 hover:text-foreground";

export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>("dark");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const stored = getStoredTheme();
		const resolved: Theme =
			stored ??
			(document.documentElement.classList.contains(
				"light",
			)
				? "light"
				: "dark");
		setTheme(resolved);
		setMounted(true);
	}, []);

	const toggleTheme = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		const nextTheme: Theme =
			theme === "dark" ? "light" : "dark";

		transitionTheme(
			nextTheme,
			{
				x: event.clientX,
				y: event.clientY,
			},
			() => {
				setTheme(nextTheme);
				try {
					localStorage.setItem(
						THEME_STORAGE_KEY,
						nextTheme,
					);
				} catch {
					/* localStorage indisponible */
				}
			},
		);
	};

	const label =
		theme === "dark"
			? "Activer le mode clair"
			: "Activer le mode sombre";

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className={buttonClass}
			aria-label={mounted ? label : "Changer de thème"}
			title={mounted ? label : undefined}>
			<span aria-hidden="true">
				{mounted
					? theme === "dark"
						? "☀️"
						: "🌑"
					: "☀️"}
			</span>
		</button>
	);
}
