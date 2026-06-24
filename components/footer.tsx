import { SocialLinks } from "./social-links";

const currentYear =
	new Date().getFullYear();
export function Footer() {
	return (
		<footer>
			<div className="border-t border-border">
				<div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-4 px-6 py-5 font-mono text-xs text-muted-foreground-subtle md:flex-row md:items-center md:justify-between">
					<span className="text-center md:text-left">
						© {currentYear} | Mathis
						Marichy | Lead Developer Web
					</span>
					<SocialLinks />
				</div>
			</div>
		</footer>
	);
}
