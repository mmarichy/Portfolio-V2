import type { Project } from "@/lib/types";

function asset(path: string): string {
	return path.replace(
		/^\.\.\/Portfolio\/assets\/projects\//,
		"/assets/projets/",
	);
}

function normalizeStack(
	labels: string[],
): string[] {
	return labels
		.map((label) => label.trim())
		.filter(Boolean);
}

const RAW_PROJECTS = [
	{
		id: "1",
		title: "Portail FluidExpert",
		category: "Lead Developer Web",
		description:
			"Portail web B2B de centralisation des données pour FluidExpert. Interface d'administration, suivi des activités et espace client dédié. Fonctionnalité hors ligne - Toujours en développement.",
		cover:
			"../Portfolio/assets/projects/fluidexpert/accueil.png",
		alt: "Page d'accueil du portail FluidExpert",
		altlang: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Vercel",
		],
		pictures: [
			"../Portfolio/assets/projects/fluidexpert/accueil.png",
		],
		site: "https://portal.fluidexpert.com/",
		github: null,
	},
	{
		id: "2",
		title: "Kasa",
		category: "React",
		description:
			"Site de location d'appartements avec interface réactive. Galerie de logements, pages dédiées par annonce via React Router, et page À propos présentant les valeurs du service.",
		cover:
			"../Portfolio/assets/projects/kasa/home.png",
		alt: "Page d'accueil du site Kasa",
		altlang: [
			"React",
			"SASS",
			"React Router",
		],
		pictures: [
			"../Portfolio/assets/projects/kasa/home.png",
			"../Portfolio/assets/projects/kasa/logement.png",
			"../Portfolio/assets/projects/kasa/about.png",
		],
		site: "https://mmarichy.github.io/kasa/",
		github:
			"https://github.com/mmarichy/kasa",
	},
	{
		id: "3",
		title: "Argent Bank",
		category: "React",
		description:
			"Frontend d'une application bancaire : authentification, gestion de profil, tableau de bord des comptes et intégration d'une API REST documentée via Swagger.",
		cover:
			"../Portfolio/assets/projects/argentBank/home.png",
		alt: "Page d'accueil du site Argent Bank",
		altlang: [
			"React",
			"Redux",
			"REST API",
		],
		pictures: [
			"../Portfolio/assets/projects/argentBank/home.png",
			"../Portfolio/assets/projects/argentBank/login.png",
			"../Portfolio/assets/projects/argentBank/profile.png",
		],
		site: null,
		github:
			"https://github.com/mmarichy/ArgentBank",
	},
] as const;

export const PROJECTS: Project[] =
	RAW_PROJECTS.map((project) => ({
		id: project.id,
		title: project.title,
		category: project.category,
		description: project.description,
		cover: asset(project.cover),
		alt: project.alt,
		stack: normalizeStack([
			...project.altlang,
		]),
		pictures:
			project.pictures.map(asset),
		site: project.site,
		github: project.github,
	}));

export function formatProjectNum(
	id: string,
): string {
	return id.padStart(2, "0");
}
