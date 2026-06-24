import type {
	Experience,
	NavLink,
	StackCategory,
	Stat,
	AboutInfo,
	ContactLink,
} from "@/lib/types";
import {
	SITE_EMAIL,
	SITE_SOCIAL,
} from "@/lib/site";

export {
	PROJECTS,
	formatProjectNum,
} from "@/lib/projects";

export const STACK_CATEGORIES: StackCategory[] =
	[
		{
			icon: "earth",
			label: "Frontend",
			items: [
				"Next.js",
				"React",
				"TypeScript",
				"Tailwind CSS",
				"HTML",
				"CSS",
				"JavaScript",
			],
		},
		{
			icon: "cpu",
			label: "Backend",
			items: [
				"Node.js",
				"REST API",
				"Next.js",
			],
		},
		{
			icon: "database",
			label: "Base de données",
			items: [
				"PostgreSQL",
				"Prisma ORM",
			],
		},
		{
			icon: "terminal",
			label: "DevOps & Outils",
			items: [
				"Docker",
				"GitHub Actions",
				"Vercel",
				"Linux",
				"Git",
			],
		},
	];

export const TOOLS = [
	"VS Code",
	"Figma",
	"Notion",
	"Git",
	"GitHub",
];

export const EXPERIENCE: Experience[] =
	[
		{
			period: "Sep. 2025 — Sep. 2026",
			role: "Apprenti Lead Developer",
			company: "Fluidexpert",
			desc: "Pilote technique du développement d'un portail B2B from scratch avec Next.js, TypeScript, PostgreSQL. Intégration avec l'ERP et application interne, exploitation d'une base PostgreSQL existante avec typage strict, ainsi que maintenance et évolutions sur d'autres applications internes.",
		},
		{
			period: "2023 — 2024",
			role: "Titre professionnel Développeur intégrateur web",
			company: "OpenClassrooms",
			desc: "Formation axée sur le développement web front-end, la conception d'interfaces web, l'intégration de fonctionnalités dynamiques.",
		},
		{
			period: "Jan. 2025 — Août 2025",
			role: "Chauffeur livreur VL",
			company: "Drive to Home",
			desc: "Livraison de marchandises chez les clients dans le respect des délais convenus.",
		},
		{
			period: "Nov. 2024 — Déc. 2024",
			role: "Vendeur - Renfort fin d'année",
			company: "Boulanger",
			desc: "Accueil et accompagnement des clients afin de les orienter vers les produits adaptés à leurs besoins.",
		},
	];

export const NAV_LINKS: NavLink[] = [
	{ href: "/", label: "Accueil" },
	{
		href: "/projets",
		label: "Projets",
	},
	{
		href: "/a-propos",
		label: "À propos",
	},
];

export const STATS: Stat[] = [
	{ v: "3+", l: "Ans d'expérience" },
	{ v: "2", l: "Projets React" },
	{ v: "1", l: "Démo en ligne" },
	{ v: "100%", l: "Open-source" },
];

export const ABOUT_INFO: AboutInfo[] = [
	{
		l: "Spécialité",
		v: "Lead Developer Web",
		icon: "cpu",
	},
	{
		l: "Disponibilité",
		v: "Alternance",
		icon: "briefcase",
	},
	{
		l: "Langues",
		v: "FR / EN",
		icon: "languages",
	},
];

export const CONTACT_LINKS: ContactLink[] =
	[
		{
			label: "Mon Mail",
			href: `mailto:${SITE_EMAIL}`,
			icon: "mail",
		},
		{
			label: "Mon GitHub",
			href: SITE_SOCIAL.github,
			icon: "github",
		},
		{
			label: "Mon LinkedIn",
			href: SITE_SOCIAL.linkedin,
			icon: "linkedin",
		},
	];
