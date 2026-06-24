import {
	THEME_STORAGE_KEY,
} from "@/lib/theme";

export function ThemeScript() {
	const script = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"){document.documentElement.classList.add("light");}else if(t==="dark"){document.documentElement.classList.remove("light");}else if(window.matchMedia("(prefers-color-scheme: light)").matches){document.documentElement.classList.add("light");}}catch(e){}})();`;

	return (
		<script
			dangerouslySetInnerHTML={{
				__html: script,
			}}
		/>
	);
}
