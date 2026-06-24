import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import {
	Inter,
	JetBrains_Mono,
	Onest,
} from "next/font/google";
import { ContextMenu } from "@/components/context-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageLoader } from "@/components/page-loader";
import { StructuredData } from "@/components/structured-data";
import { ThemeScript } from "@/components/theme-script";
import { rootMetadata } from "@/lib/metadata";
import { globalStructuredData } from "@/lib/structured-data";
import "./globals.css";

const onest = Onest({
	subsets: ["latin"],
	variable: "--font-onest",
	weight: [
		"300",
		"400",
		"500",
		"600",
		"700",
		"800",
		"900",
	],
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	weight: ["400", "500"],
});

export const metadata = rootMetadata;

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f8f7fc" },
		{ media: "(prefers-color-scheme: dark)", color: "#0b0b11" },
	],
	colorScheme: "light dark",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="fr"
			suppressHydrationWarning
			className={`${onest.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
			<body className="min-h-screen bg-background font-sans text-foreground antialiased">
				<ThemeScript />
				<PageLoader />
				<StructuredData
					data={globalStructuredData()}
				/>
				<CustomCursor />
				<ContextMenu />
				<Navbar />
				<main className="pt-16">
					{children}
				</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
