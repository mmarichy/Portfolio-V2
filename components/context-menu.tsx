"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import {
	CONTACT_LINKS,
	NAV_LINKS,
} from "@/lib/data";

type MenuPosition = {
	x: number;
	y: number;
};

const MENU_WIDTH = 220;
const MENU_ITEM_HEIGHT = 36;
const MENU_PADDING = 8;
const MENU_HEADER_HEIGHT = 48;

const NAV_ITEMS = [
	...NAV_LINKS,
	{
		href: "/contact",
		label: "Contact",
	},
];

function clampPosition(
	x: number,
	y: number,
	itemCount: number,
): MenuPosition {
	const menuHeight =
		MENU_HEADER_HEIGHT +
		itemCount * MENU_ITEM_HEIGHT +
		MENU_PADDING * 2 +
		8;

	const maxX =
		window.innerWidth - MENU_WIDTH - 12;
	const maxY =
		window.innerHeight -
		menuHeight -
		12;

	return {
		x: Math.min(Math.max(12, x), maxX),
		y: Math.min(Math.max(12, y), maxY),
	};
}

function isEditableTarget(
	target: EventTarget | null,
): boolean {
	if (!(target instanceof Element)) {
		return false;
	}

	return Boolean(
		target.closest(
			"input, textarea, select, [contenteditable='true']",
		),
	);
}

export function ContextMenu() {
	const pathname = usePathname();
	const menuRef =
		useRef<HTMLDivElement>(null);
	const [open, setOpen] =
		useState(false);
	const [position, setPosition] =
		useState<MenuPosition>({
			x: 0,
			y: 0,
		});
	const [copied, setCopied] =
		useState(false);

	const close = useCallback(() => {
		setOpen(false);
		setCopied(false);
	}, []);

	const copyUrl =
		useCallback(async () => {
			try {
				await navigator.clipboard.writeText(
					window.location.href,
				);
				setCopied(true);
				window.setTimeout(() => {
					setCopied(false);
					setOpen(false);
				}, 900);
			} catch {
				setOpen(false);
			}
		}, []);

	useEffect(() => {
		const onContextMenu = (
			event: MouseEvent,
		) => {
			if (event.shiftKey) return;
			if (
				isEditableTarget(event.target)
			)
				return;

			event.preventDefault();
			setPosition(
				clampPosition(
					event.clientX,
					event.clientY,
					NAV_ITEMS.length +
						CONTACT_LINKS.length +
						1,
				),
			);
			setCopied(false);
			setOpen(true);
		};

		const onPointerDown = (
			event: PointerEvent,
		) => {
			if (
				menuRef.current?.contains(
					event.target as Node,
				)
			) {
				return;
			}
			close();
		};

		const onKeyDown = (
			event: KeyboardEvent,
		) => {
			if (event.key === "Escape") {
				close();
			}
		};

		const onScroll = () => {
			close();
		};

		window.addEventListener(
			"contextmenu",
			onContextMenu,
		);
		window.addEventListener(
			"pointerdown",
			onPointerDown,
		);
		window.addEventListener(
			"keydown",
			onKeyDown,
		);
		window.addEventListener(
			"scroll",
			onScroll,
			{
				capture: true,
			},
		);

		return () => {
			window.removeEventListener(
				"contextmenu",
				onContextMenu,
			);
			window.removeEventListener(
				"pointerdown",
				onPointerDown,
			);
			window.removeEventListener(
				"keydown",
				onKeyDown,
			);
			window.removeEventListener(
				"scroll",
				onScroll,
				true,
			);
		};
	}, [close]);

	if (!open) return null;

	return (
		<div
			ref={menuRef}
			role="menu"
			aria-label="Menu contextuel"
			className="context-menu"
			style={{
				left: position.x,
				top: position.y,
				width: MENU_WIDTH,
			}}>
			<div className="context-menu-header">
				<Image
					src="/logo.png"
					alt="Mathis Marichy"
					width={655}
					height={437}
					className="h-10 w-auto shrink-0 object-contain object-left"
				/>
				<span className="context-menu-hint">
					Maj + clic pour le menu natif
				</span>
			</div>

			<div className="context-menu-section">
				{NAV_ITEMS.map(
					({ href, label }) => {
						const isActive =
							href === "/"
								? pathname === "/"
								: pathname.startsWith(
										href,
									);

						return (
							<Link
								key={href}
								href={href}
								role="menuitem"
								onClick={close}
								className={`context-menu-item ${
									isActive
										? "is-active"
										: ""
								}`}>
								{label}
							</Link>
						);
					},
				)}
			</div>

			<div className="context-menu-divider" />

			<div className="context-menu-section">
				<button
					type="button"
					role="menuitem"
					onClick={copyUrl}
					className="context-menu-item w-full">
					{copied
						? "URL copiée"
						: "Copier l'URL"}
				</button>
			</div>

			<div className="context-menu-divider" />

			<div className="context-menu-section">
				{CONTACT_LINKS.map(
					({ href, label }) => (
						<a
							key={href}
							href={href}
							role="menuitem"
							target={
								href.startsWith("http")
									? "_blank"
									: undefined
							}
							rel={
								href.startsWith("http")
									? "noopener noreferrer"
									: undefined
							}
							onClick={close}
							className="context-menu-item">
							{label}
						</a>
					),
				)}
			</div>
		</div>
	);
}
