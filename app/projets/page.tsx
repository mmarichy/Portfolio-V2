import { ProjectsPageContent } from "@/components/projects-page-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import {
	breadcrumbSchema,
	pageStructuredData,
	projectsCollectionSchema,
	webPageSchema,
} from "@/lib/structured-data";

const description =
	"Projets web réalisés par Mathis Marichy : applications Next.js, React, TypeScript et PostgreSQL.";

export const metadata = createPageMetadata({
	title: "Projets",
	description,
	path: "/projets",
	keywords: [
		"projets web",
		"portfolio projets",
		"FluidExpert",
		"Kasa",
		"Argent Bank",
	],
});

export default function ProjectsPage() {
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
							name: "Projets",
							path: "/projets",
						},
					]),
					webPageSchema({
						name: "Projets — Mathis Marichy",
						description,
						path: "/projets",
					}),
					projectsCollectionSchema({
						description,
					}),
				)}
			/>
			<ProjectsPageContent />
		</>
	);
}
