import { HomePageContent } from "@/components/home-page-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import {
	SITE_DESCRIPTION,
	SITE_TITLE,
} from "@/lib/site";
import {
	pageStructuredData,
	webPageSchema,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	path: "/",
	keywords: [
		"portfolio",
		"accueil",
	],
});

export default function HomePage() {
	return (
		<>
			<StructuredData
				data={pageStructuredData(
					webPageSchema({
						name: SITE_TITLE,
						description:
							SITE_DESCRIPTION,
						path: "/",
					}),
				)}
			/>
			<HomePageContent />
		</>
	);
}
