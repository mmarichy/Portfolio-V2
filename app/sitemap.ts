import type { MetadataRoute } from "next";
import {
	SITE_ROUTES,
	SITE_URL,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return SITE_ROUTES.map(
		({
			path,
			priority,
			changeFrequency,
		}) => ({
			url: new URL(path, SITE_URL).toString(),
			lastModified,
			changeFrequency,
			priority,
		}),
	);
}
