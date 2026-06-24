import { ContactForm } from "@/components/contact-form";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import {
	breadcrumbSchema,
	contactPageSchema,
	pageStructuredData,
	webPageSchema,
} from "@/lib/structured-data";

const description =
	"Contactez Mathis Marichy pour discuter d'une alternance, d'un projet web ou d'une collaboration.";

export const metadata = createPageMetadata({
	title: "Contact",
	description,
	path: "/contact",
	keywords: [
		"contact",
		"alternance",
		"collaboration",
		"recrutement",
	],
});

export default function ContactPage() {
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
							name: "Contact",
							path: "/contact",
						},
					]),
					webPageSchema({
						name: "Contact — Mathis Marichy",
						description,
						path: "/contact",
					}),
					contactPageSchema({
						description,
					}),
				)}
			/>
			<ContactForm />
		</>
	);
}
