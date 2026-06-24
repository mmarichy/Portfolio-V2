import { AboutPageContent } from "@/components/about-page-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import {
	breadcrumbSchema,
	pageStructuredData,
	profilePageSchema,
	webPageSchema,
} from "@/lib/structured-data";

const description =
	"Découvrez le parcours, la stack technique et les compétences de Mathis Marichy, lead developer web en Next.js et TypeScript.";

export const metadata = createPageMetadata({
	title: "À propos",
	description,
	path: "/a-propos",
	keywords: [
		"parcours",
		"expérience",
		"stack technique",
		"compétences",
	],
	openGraphType: "profile",
});

export default function AboutPage() {
	return (
		<>
			<StructuredData
				data={pageStructuredData(
					breadcrumbSchema([
						{
							name: "Accueil",
							path: "/",
						},
						{
							name: "À propos",
							path: "/a-propos",
						},
					]),
					webPageSchema({
						name: "À propos — Mathis Marichy",
						description,
						path: "/a-propos",
					}),
					profilePageSchema({
						description,
					}),
				)}
			/>
			<AboutPageContent />
		</>
	);
}
