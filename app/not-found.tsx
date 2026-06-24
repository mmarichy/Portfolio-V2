import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Page introuvable",
	description:
		"La page demandée n'existe pas ou a été déplacée.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function NotFound() {
	return (
		<section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
			<p className="mb-3 font-mono text-sm tracking-[0.18em] text-muted-foreground">
				404
			</p>
			<h1 className="mb-4 font-display text-4xl font-black text-foreground">
				Page introuvable
			</h1>
			<p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
				Cette page n&apos;existe pas ou
				n&apos;est plus disponible.
			</p>
			<Link
				href="/"
				className="rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500">
				Retour à l&apos;accueil
			</Link>
		</section>
	);
}
