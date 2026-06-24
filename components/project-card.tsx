"use client";

import {
	ExternalLink,
	Github,
	useGroupHoverIcon,
} from "@/components/animated-icons";
import { ProjectCover } from "@/components/project-cover";
import { Tag } from "@/components/ui/tag";
import { formatProjectNum } from "@/lib/projects";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
	project: Project;
};

export function ProjectCard({
	project,
}: ProjectCardProps) {
	const site = useGroupHoverIcon();
	const github = useGroupHoverIcon();

	return (
		<div className="group w-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_8px_48px_rgba(124,58,237,0.1)]">
			<div className="relative aspect-video overflow-hidden bg-secondary">
				<ProjectCover
					src={project.cover}
					alt={project.alt}
					title={project.title}
				/>
				<div className="absolute inset-0 bg-linear-to-t from-card/95 via-card/30 to-transparent" />
				<div className="absolute inset-0 bg-linear-to-br from-violet-900/15 to-transparent" />
				<div className="absolute right-4 bottom-3 left-4 flex items-end justify-between">
					<span className="font-mono text-[11px] tracking-widest text-text-violet-muted">
						{formatProjectNum(
							project.id,
						)}
					</span>
					<span className="font-mono text-[11px] text-muted-foreground-subtle">
						{project.category}
					</span>
				</div>
			</div>

			<div className="p-5">
				<div className="mb-1.5 font-mono text-[11px] tracking-wider text-text-violet-muted uppercase">
					{project.category}
				</div>
				<h3 className="mb-2.5 font-display text-lg font-bold text-foreground transition-colors group-hover:text-violet-100">
					{project.title}
				</h3>
				<p className="mb-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
					{project.description}
				</p>

				<div className="mb-4 flex flex-wrap gap-1.5">
					{project.stack.map((tech) => (
						<Tag
							key={tech}
							label={tech}
						/>
					))}
				</div>

				<div className="flex flex-wrap gap-2">
					{project.site && (
						<a
							href={project.site}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-medium text-white shadow-[0_0_14px_rgba(124,58,237,0.25)] transition-colors hover:bg-violet-500"
							{...site.groupProps}>
							<ExternalLink
								size={11}
								{...site.iconProps}
							/>
							Voir le projet
						</a>
					)}
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-violet-500/30 hover:text-foreground"
							{...github.groupProps}>
							<Github
								size={11}
								{...github.iconProps}
							/>
							Voir le code
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
