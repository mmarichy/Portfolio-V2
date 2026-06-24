"use client";

import { AvailabilityBadge } from "@/components/availability-badge";
import { HeroActions } from "@/components/hero-actions";
import { ProfilePhoto } from "@/components/profile-photo";
import { ProjectCard } from "@/components/project-card";
import { ProjectSectionLink } from "@/components/project-section-links";
import { Reveal, RevealItem } from "@/components/reveal";
import { SectionLabel } from "@/components/ui/tag";
import { PROJECTS } from "@/lib/data";

export function HomePageContent() {
	return (
		<div>
			<section
				className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
				aria-label="Présentation">
				<div
					className="pointer-events-none absolute inset-0 hero-radial-bg"
				/>
				<div className="pointer-events-none absolute inset-0 hero-grid-bg" />

				<div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-32">
					<div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
						<div>
							<Reveal>
								<AvailabilityBadge className="mb-10" />
							</Reveal>

							<Reveal delay={0.06}>
								<div className="mb-6 flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
									<h1
										className="min-w-0 w-full font-display leading-[0.95] font-black tracking-tight text-foreground md:flex-1"
										style={{
											fontSize:
												"clamp(2.75rem, 12vw, 8rem)",
										}}>
										MATHIS
										<br />
										<span
											className="bg-clip-text text-transparent"
											style={{
												backgroundImage:
													"linear-gradient(140deg, #c4b5fd 0%, #9b73f8 40%, #7c3aed 100%)",
											}}>
											MARICHY
										</span>
									</h1>
									<ProfilePhoto
										priority
										mirrored
										variant="portrait"
										className="mx-auto max-w-[150px] shrink-0 md:mx-0 md:max-w-[160px] lg:hidden"
									/>
								</div>
							</Reveal>

							<Reveal delay={0.12}>
								<p className="mb-7 font-mono text-sm tracking-[0.18em] text-muted-foreground">
									Lead Developer Web ·
									Next.js · TypeScript ·
									PostgreSQL
								</p>
							</Reveal>

							<Reveal delay={0.18}>
								<p className="mb-12 max-w-lg text-xl leading-relaxed text-foreground/70">
									Je conçois et développe
									des applications web
									performantes, de
									l&apos;architecture base
									de données jusqu&apos;à
									l&apos;interface
									utilisateur.
								</p>
							</Reveal>

							<Reveal delay={0.24}>
								<HeroActions />
							</Reveal>
						</div>

						<Reveal
							delay={0.1}
							className="mx-auto hidden max-w-[320px] lg:mx-0 lg:block lg:justify-self-end">
							<ProfilePhoto
								priority
								mirrored
								variant="portrait"
								className="max-w-[320px]"
							/>
						</Reveal>
					</div>
				</div>

				<div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-0 opacity-25">
					<div className="h-12 w-px bg-linear-to-b from-transparent to-violet-400" />
				</div>
			</section>

			<section
				className="mx-auto max-w-6xl px-6 py-24"
				aria-labelledby="projects-heading">
				<Reveal className="mb-12">
					<div className="flex items-end justify-between">
						<div>
							<SectionLabel>
								Sélection
							</SectionLabel>
							<h2
								id="projects-heading"
								className="font-display text-3xl font-bold text-foreground">
								Projets récents
							</h2>
						</div>
						<ProjectSectionLink variant="desktop" />
					</div>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2">
					{PROJECTS.slice(0, 2).map(
						(project, index) => (
							<RevealItem
								key={project.id}
								index={index}>
								<ProjectCard
									project={project}
								/>
							</RevealItem>
						),
					)}
				</div>

				<Reveal
					className="mt-8 text-center md:hidden"
					delay={0.1}>
					<ProjectSectionLink variant="mobile" />
				</Reveal>
			</section>
		</div>
	);
}
