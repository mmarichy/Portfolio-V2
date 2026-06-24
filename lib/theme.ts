export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEME_COLORS: Record<Theme, string> = {
	dark: "#0b0b11",
	light: "#f8f7fc",
};

type TransitionPoint = {
	x: number;
	y: number;
};

function getRevealRadius({
	x,
	y,
}: TransitionPoint): number {
	return Math.hypot(
		Math.max(x, window.innerWidth - x),
		Math.max(y, window.innerHeight - y),
	);
}

function setTransitionOrigin(
	point: TransitionPoint,
) {
	const root = document.documentElement;
	const radius = getRevealRadius(point);

	root.style.setProperty(
		"--theme-transition-x",
		`${point.x}px`,
	);
	root.style.setProperty(
		"--theme-transition-y",
		`${point.y}px`,
	);
	root.style.setProperty(
		"--theme-transition-radius",
		`${radius}px`,
	);
}

function runOverlayFallback(
	nextTheme: Theme,
	point: TransitionPoint,
	apply: () => void,
) {
	const overlay =
		document.createElement("div");
	overlay.setAttribute("aria-hidden", "true");
	overlay.className =
		"theme-transition-fallback";
	overlay.style.setProperty(
		"--theme-transition-x",
		`${point.x}px`,
	);
	overlay.style.setProperty(
		"--theme-transition-y",
		`${point.y}px`,
	);
	overlay.style.setProperty(
		"--theme-transition-radius",
		`${getRevealRadius(point)}px`,
	);
	overlay.style.backgroundColor =
		THEME_COLORS[nextTheme];
	document.body.appendChild(overlay);

	requestAnimationFrame(() => {
		apply();
		overlay.classList.add(
			"theme-transition-fallback--active",
		);
	});

	overlay.addEventListener(
		"transitionend",
		() => overlay.remove(),
		{ once: true },
	);
}

export function applyTheme(theme: Theme) {
	const root = document.documentElement;
	root.classList.toggle("light", theme === "light");

	const meta = document.querySelector(
		'meta[name="theme-color"]',
	);
	if (meta) {
		meta.setAttribute(
			"content",
			THEME_COLORS[theme],
		);
	}
}

export function transitionTheme(
	nextTheme: Theme,
	origin: TransitionPoint,
	applyState: () => void,
) {
	const prefersReducedMotion =
		window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

	const run = () => {
		applyState();
		applyTheme(nextTheme);
	};

	if (prefersReducedMotion) {
		run();
		return;
	}

	setTransitionOrigin(origin);

	if (
		typeof document.startViewTransition ===
		"function"
	) {
		document.startViewTransition(run);
		return;
	}

	runOverlayFallback(
		nextTheme,
		origin,
		run,
	);
}

export function getStoredTheme(): Theme | null {
	try {
		const stored = localStorage.getItem(
			THEME_STORAGE_KEY,
		);
		if (stored === "light" || stored === "dark") {
			return stored;
		}
	} catch {
		/* localStorage indisponible */
	}
	return null;
}

export function resolveTheme(): Theme {
	if (typeof window === "undefined") {
		return "dark";
	}

	const stored = getStoredTheme();
	if (stored) return stored;

	return window.matchMedia(
		"(prefers-color-scheme: light)",
	).matches
		? "light"
		: "dark";
}
