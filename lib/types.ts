export type StackIconName =
	| "earth"
	| "cpu"
	| "database"
	| "terminal";

export type Project = {
	id: string;
	title: string;
	category: string;
	description: string;
	cover: string;
	alt: string;
	stack: string[];
	pictures: string[];
	site: string | null;
	github: string | null;
};

export type StackCategory = {
	icon: StackIconName;
	label: string;
	items: string[];
};

export type Experience = {
	period: string;
	role: string;
	company: string;
	desc: string;
};

export type NavLink = {
	href: string;
	label: string;
};

export type AboutIconName =
	| "cpu"
	| "briefcase"
	| "languages";

export type AboutInfo = {
	l: string;
	v: string;
	icon: AboutIconName;
};

export type ContactIcon =
	| "mail"
	| "github"
	| "linkedin"
	| "cv";

export type ContactLink = {
	label: string;
	href: string;
	icon: ContactIcon;
	/** Ouvre le lien dans un nouvel onglet */
	external?: boolean;
};
