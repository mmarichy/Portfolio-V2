"use client";

import { ProjectCard } from "@/components/project-card";
import { Reveal, RevealItem } from "@/components/reveal";
import { SectionLabel } from "@/components/ui/tag";
import {
	PROJECTS,
	formatProjectNum,
} from "@/lib/data";

export function ProjectsPageContent() {
	return (
		<div className="mx-auto max-w-5xl px-6 py-20">
			<Reveal className="mb-20">
				<SectionLabel>Portfolio</SectionLabel>
				<h1 className="mb-4 font-display text-4xl font-black text-foreground md:text-5xl">
					Mes projets
				</h1>
				<p className="max-w-xl leading-relaxed text-muted-foreground">
					Une sélection de projets conçus et
					développés, du prototype à la
					production.
				</p>
			</Reveal>

			<div className="relative">
				<div
					className="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 md:block"
					style={{
						background:
							"linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.22) 6%, rgba(139,92,246,0.22) 94%, transparent 100%)",
					}}
				/>

				<div
					className="pointer-events-none absolute top-0 bottom-0 w-px md:hidden"
					style={{
						left: "5px",
						background:
							"linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.18) 4%, rgba(139,92,246,0.18) 96%, transparent 100%)",
					}}
				/>

				<div className="space-y-20 md:space-y-28">
					{PROJECTS.map((project, i) => {
						const isLeft = i % 2 === 0;

						return (
							<RevealItem
								key={project.id}
								index={i}>
								<div>
									<div
										className="hidden items-center md:grid"
										style={{
											gridTemplateColumns:
												"1fr 4rem 1fr",
										}}>
										<div
											className={
												isLeft
													? "flex justify-end pr-8"
													: "pr-8"
											}>
											{isLeft ? (
												<div className="w-full max-w-[430px]">
													<ProjectCard
														project={
															project
														}
													/>
												</div>
											) : (
												<div className="flex flex-col items-end">
													<div
														className="font-display leading-none font-black select-none"
														style={{
															fontSize:
																"clamp(3rem, 5vw, 4.5rem)",
															color:
																"rgba(139,92,246,0.09)",
														}}>
														{formatProjectNum(
															project.id,
														)}
													</div>
													<div className="mt-2 font-mono text-[11px] tracking-[0.22em] text-muted-foreground-subtle">
														{
															project.category
														}
													</div>
												</div>
											)}
										</div>

										<div className="relative z-10 flex items-center justify-center">
											<div
												className="absolute top-1/2 h-px w-9 -translate-y-1/2"
												style={{
													[isLeft
														? "right"
														: "left"]:
														"50%",
													background:
														isLeft
															? "linear-gradient(to left, rgba(139,92,246,0.45), transparent)"
															: "linear-gradient(to right, rgba(139,92,246,0.45), transparent)",
												}}
											/>
											<div className="h-[18px] w-[18px] rounded-full border-[2.5px] border-violet-500 bg-background shadow-[0_0_20px_rgba(139,92,246,0.6),0_0_40px_rgba(139,92,246,0.2)]" />
										</div>

										<div
											className={
												!isLeft
													? "flex justify-start pl-8"
													: "pl-8"
											}>
											{!isLeft ? (
												<div className="w-full max-w-[430px]">
													<ProjectCard
														project={
															project
														}
													/>
												</div>
											) : (
												<div className="flex flex-col items-start">
													<div
														className="font-display leading-none font-black select-none"
														style={{
															fontSize:
																"clamp(3rem, 5vw, 4.5rem)",
															color:
																"rgba(139,92,246,0.09)",
														}}>
														{formatProjectNum(
															project.id,
														)}
													</div>
													<div className="mt-2 font-mono text-[11px] tracking-[0.22em] text-muted-foreground-subtle">
														{
															project.category
														}
													</div>
												</div>
											)}
										</div>
									</div>

									<div className="flex items-start gap-5 md:hidden">
										<div className="relative z-10 mt-[1.35rem] shrink-0">
											<div className="h-[11px] w-[11px] rounded-full border-2 border-violet-500 bg-background shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
										</div>
										<div className="min-w-0 flex-1">
											<ProjectCard
												project={
													project
												}
											/>
										</div>
									</div>
								</div>
							</RevealItem>
						);
					})}
				</div>
			</div>
		</div>
	);
}
