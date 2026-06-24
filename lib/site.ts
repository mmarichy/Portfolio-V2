/** URL canonique du site (à surcharger via NEXT_PUBLIC_SITE_URL avant achat du domaine). */
export const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ??
	"https://mathis-marichy.fr";

export const SITE_NAME = "Mathis Marichy";

export const SITE_TITLE =
	"Mathis Marichy — Lead Developer Web";

export const SITE_DESCRIPTION =
	"Portfolio de Mathis Marichy, lead developer web spécialisé en Next.js, TypeScript et PostgreSQL. Disponible pour une alternance dès septembre 2026.";

export const SITE_LOCALE = "fr_FR";
export const SITE_LANGUAGE = "fr-FR";

export const SITE_EMAIL = "marichy.pro@gmail.com";

export const SITE_JOB_TITLE = "Lead Developer Web";

export const SITE_KEYWORDS = [
	"Mathis Marichy",
	"développeur web",
	"lead developer",
	"développeur Next.js",
	"TypeScript",
	"PostgreSQL",
	"React",
	"portfolio développeur",
	"alternance développeur web",
	"développeur full stack",
	"France",
	"remote",
] as const;

export const SITE_SOCIAL = {
	github: "https://github.com/mmarichy",
	linkedin:
		"https://www.linkedin.com/in/mathis-marichy/",
} as const;

/** Fichier PDF dans public/cv/ — servi en statique, ouvert dans un nouvel onglet */
export const SITE_CV_PATH = "/cv/mathis_marichy-cv.pdf";

export const SITE_SKILLS = [
	"Next.js",
	"React",
	"TypeScript",
	"PostgreSQL",
	"Node.js",
	"Tailwind CSS",
	"Prisma",
] as const;

export type SiteRoute = {
	path: string;
	label: string;
	priority: number;
	changeFrequency:
		| "weekly"
		| "monthly"
		| "yearly";
};

/** Routes indexables (hors API et assets). */
export const SITE_ROUTES: SiteRoute[] = [
	{
		path: "/",
		label: "Accueil",
		priority: 1,
		changeFrequency: "weekly",
	},
	{
		path: "/projets",
		label: "Projets",
		priority: 0.9,
		changeFrequency: "monthly",
	},
	{
		path: "/a-propos",
		label: "À propos",
		priority: 0.9,
		changeFrequency: "monthly",
	},
	{
		path: "/contact",
		label: "Contact",
		priority: 0.8,
		changeFrequency: "yearly",
	},
];

export function absoluteUrl(path = ""): string {
	return new URL(path, SITE_URL).toString();
}
