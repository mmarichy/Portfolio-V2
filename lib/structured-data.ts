import { PROJECTS } from "@/lib/projects";
import {
	SITE_DESCRIPTION,
	SITE_EMAIL,
	SITE_JOB_TITLE,
	SITE_LANGUAGE,
	SITE_NAME,
	SITE_SKILLS,
	SITE_SOCIAL,
	SITE_TITLE,
	SITE_URL,
	absoluteUrl,
} from "@/lib/site";

type JsonLdObject = Record<string, unknown>;

export function personSchema(): JsonLdObject {
	return {
		"@type": "Person",
		"@id": `${SITE_URL}/#person`,
		name: SITE_NAME,
		givenName: "Mathis",
		familyName: "Marichy",
		jobTitle: SITE_JOB_TITLE,
		url: SITE_URL,
		image: absoluteUrl(
			"/presentation-picture.webp",
		),
		email: `mailto:${SITE_EMAIL}`,
		sameAs: [
			SITE_SOCIAL.github,
			SITE_SOCIAL.linkedin,
		],
		knowsAbout: [...SITE_SKILLS],
		knowsLanguage: ["fr", "en"],
		nationality: {
			"@type": "Country",
			name: "France",
		},
		worksFor: {
			"@type": "Organization",
			name: "Fluidexpert",
		},
	};
}

export function websiteSchema(): JsonLdObject {
	return {
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		name: SITE_TITLE,
		url: SITE_URL,
		description: SITE_DESCRIPTION,
		inLanguage: SITE_LANGUAGE,
		publisher: {
			"@id": `${SITE_URL}/#person`,
		},
		author: {
			"@id": `${SITE_URL}/#person`,
		},
	};
}

export function webPageSchema({
	name,
	description,
	path,
}: {
	name: string;
	description: string;
	path: string;
}): JsonLdObject {
	const url = absoluteUrl(path);

	return {
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name,
		description,
		isPartOf: {
			"@id": `${SITE_URL}/#website`,
		},
		about: {
			"@id": `${SITE_URL}/#person`,
		},
		inLanguage: SITE_LANGUAGE,
	};
}

export function breadcrumbSchema(
	items: {
		name: string;
		path: string;
	}[],
): JsonLdObject {
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map(
			(item, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: item.name,
				item: absoluteUrl(item.path),
			}),
		),
	};
}

export function profilePageSchema({
	description,
}: {
	description: string;
}): JsonLdObject {
	return {
		"@type": "ProfilePage",
		"@id": absoluteUrl("/a-propos#profile"),
		url: absoluteUrl("/a-propos"),
		name: `À propos — ${SITE_NAME}`,
		description,
		mainEntity: {
			"@id": `${SITE_URL}/#person`,
		},
		isPartOf: {
			"@id": `${SITE_URL}/#website`,
		},
		inLanguage: SITE_LANGUAGE,
	};
}

export function projectsCollectionSchema({
	description,
}: {
	description: string;
}): JsonLdObject {
	return {
		"@type": "CollectionPage",
		"@id": absoluteUrl(
			"/projets#collection",
		),
		url: absoluteUrl("/projets"),
		name: `Projets — ${SITE_NAME}`,
		description,
		isPartOf: {
			"@id": `${SITE_URL}/#website`,
		},
		inLanguage: SITE_LANGUAGE,
		mainEntity: {
			"@type": "ItemList",
			name: "Projets web",
			numberOfItems: PROJECTS.length,
			itemListElement: PROJECTS.map(
				(project, index) => ({
					"@type": "ListItem",
					position: index + 1,
					item: {
						"@type": "CreativeWork",
						name: project.title,
						description:
							project.description,
						url:
							project.site ??
							project.github ??
							absoluteUrl(
								"/projets",
							),
						image: absoluteUrl(
							project.cover,
						),
						author: {
							"@id": `${SITE_URL}/#person`,
						},
						keywords:
							project.stack.join(
								", ",
							),
					},
				}),
			),
		},
	};
}

export function contactPageSchema({
	description,
}: {
	description: string;
}): JsonLdObject {
	return {
		"@type": "ContactPage",
		"@id": absoluteUrl("/contact#contact"),
		url: absoluteUrl("/contact"),
		name: `Contact — ${SITE_NAME}`,
		description,
		isPartOf: {
			"@id": `${SITE_URL}/#website`,
		},
		inLanguage: SITE_LANGUAGE,
		mainEntity: {
			"@id": `${SITE_URL}/#person`,
		},
	};
}

export function globalStructuredData(): JsonLdObject {
	return {
		"@context": "https://schema.org",
		"@graph": [
			personSchema(),
			websiteSchema(),
		],
	};
}

export function pageStructuredData(
	...nodes: JsonLdObject[]
): JsonLdObject {
	return {
		"@context": "https://schema.org",
		"@graph": nodes,
	};
}
