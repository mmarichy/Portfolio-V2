import type { MetadataRoute } from "next";
import {
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_TITLE,
} from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE_TITLE,
		short_name: SITE_NAME,
		description: SITE_DESCRIPTION,
		start_url: "/",
		scope: "/",
		display: "standalone",
		lang: "fr",
		dir: "ltr",
		background_color: "#0b0b11",
		theme_color: "#0b0b11",
		icons: [
			{
				src: "/favicon/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/favicon/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
