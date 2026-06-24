import type { Metadata } from "next";
import {
	SITE_DESCRIPTION,
	SITE_EMAIL,
	SITE_JOB_TITLE,
	SITE_KEYWORDS,
	SITE_LANGUAGE,
	SITE_LOCALE,
	SITE_NAME,
	SITE_SOCIAL,
	SITE_TITLE,
	SITE_URL,
	absoluteUrl,
} from "@/lib/site";

type PageMetadataOptions = {
	title: string;
	description?: string;
	path?: string;
	keywords?: string[];
	noIndex?: boolean;
	openGraphType?: "website" | "profile";
};

const defaultRobots: Metadata["robots"] = {
	index: true,
	follow: true,
	googleBot: {
		index: true,
		follow: true,
		"max-video-preview": -1,
		"max-image-preview": "large",
		"max-snippet": -1,
	},
};

function buildKeywords(
	extra: string[] = [],
): string[] {
	return [
		...new Set([...SITE_KEYWORDS, ...extra]),
	];
}

export function createPageMetadata({
	title,
	description = SITE_DESCRIPTION,
	path = "",
	keywords = [],
	noIndex = false,
	openGraphType = "website",
}: PageMetadataOptions): Metadata {
	const pageTitle =
		title === SITE_TITLE
			? SITE_TITLE
			: `${title} | ${SITE_NAME}`;
	const url = absoluteUrl(path);
	const mergedKeywords =
		buildKeywords(keywords);

	const metadata: Metadata = {
		title,
		description,
		keywords: mergedKeywords,
		authors: [
			{
				name: SITE_NAME,
				url: SITE_URL,
			},
		],
		creator: SITE_NAME,
		publisher: SITE_NAME,
		applicationName: SITE_NAME,
		category: "technology",
		alternates: {
			canonical: url,
			languages: {
				[SITE_LANGUAGE]: url,
			},
		},
		openGraph: {
			type: openGraphType,
			locale: SITE_LOCALE,
			url,
			siteName: SITE_NAME,
			title: pageTitle,
			description,
			images: [
				{
					url: "/opengraph-image",
					width: 1200,
					height: 630,
					alt: SITE_TITLE,
					type: "image/png",
				},
			],
			...(openGraphType === "profile"
				? {
						firstName: "Mathis",
						lastName: "Marichy",
					}
				: {}),
		},
		twitter: {
			card: "summary_large_image",
			title: pageTitle,
			description,
			images: ["/opengraph-image"],
		},
	};

	if (noIndex) {
		metadata.robots = {
			index: false,
			follow: false,
		};
	} else {
		metadata.robots = defaultRobots;
	}

	const googleVerification =
		process.env.GOOGLE_SITE_VERIFICATION;
	if (googleVerification) {
		metadata.verification = {
			google: googleVerification,
		};
	}

	return metadata;
}

export const rootMetadata: Metadata = {
	...createPageMetadata({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		path: "/",
	}),
	metadataBase: new URL(SITE_URL),
	title: {
		default: SITE_TITLE,
		template: `%s | ${SITE_NAME}`,
	},
	icons: {
		icon: [
			{
				url: "/favicon/favicon.ico",
				sizes: "any",
			},
			{
				url: "/favicon/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/favicon/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
		],
	},
	other: {
		"job-title": SITE_JOB_TITLE,
		"contact:email": SITE_EMAIL,
		"contact:linkedin": SITE_SOCIAL.linkedin,
		"contact:github": SITE_SOCIAL.github,
	},
};
