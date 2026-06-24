"use client";

import { AboutInfoGrid } from "@/components/about-info-grid";
import { AboutSidebar } from "@/components/about-sidebar";
import { Reveal, RevealItem } from "@/components/reveal";
import { StackCategories } from "@/components/stack-categories";
import { SectionLabel } from "@/components/ui/tag";
import { EXPERIENCE, TOOLS } from "@/lib/data";

export function AboutPageContent() {
	return (
		<div className="mx-auto max-w-5xl px-6 py-20">
			<Reveal className="mb-16">
				<SectionLabel>À propos</SectionLabel>
				<h1 className="font-display text-4xl font-black text-foreground md:text-5xl">
					Mathis{" "}
					<span
						className="bg-clip-text text-transparent"
						style={{
							backgroundImage:
								"linear-gradient(140deg, #c4b5fd 0%, #9b73f8 40%, #7c3aed 100%)",
						}}>
						MARICHY
					</span>
				</h1>
			</Reveal>

			<Reveal className="mb-20" delay={0.05}>
				<div className="grid gap-12 md:grid-cols-[260px_1fr]">
					<AboutSidebar />

					<div>
						<p className="mb-5 text-lg leading-relaxed text-foreground/80">
							Je suis lead developer web
							passionné par la création
							d&apos;applications web
							robustes et performantes. En
							alternance, je conçois des
							produits de A à Z — de la
							modélisation de la base de
							données jusqu&apos;à
							l&apos;interface.
						</p>
						<AboutInfoGrid />
					</div>
				</div>
			</Reveal>

			<Reveal className="mb-20">
				<h2 className="mb-8 font-display text-2xl font-bold text-foreground">
					Parcours
				</h2>
				<div className="space-y-8">
					{EXPERIENCE.map((entry, index) => (
						<RevealItem
							key={entry.period}
							index={index}>
							<div className="relative border-l border-border pl-7">
								<div className="absolute top-1.5 left-[5px] h-2.5 w-2.5 rounded-full border-2 border-violet-500 bg-background shadow-[0_0_9px_rgba(139,92,246,0.45)]" />
								<div className="mb-1 font-mono text-[11px] tracking-widest text-text-violet-muted">
									{entry.period}
								</div>
								<div className="font-display font-semibold text-foreground">
									{entry.role}
								</div>
								<div className="mb-2 text-sm text-text-violet-soft">
									{entry.company}
								</div>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{entry.desc}
								</p>
							</div>
						</RevealItem>
					))}
				</div>
			</Reveal>

			<Reveal id="stack">
				<SectionLabel>Technologies</SectionLabel>
				<h2 className="mb-4 font-display text-2xl font-bold text-foreground">
					Stack & Outils
				</h2>
				<p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">
					L&apos;écosystème technique que
					j&apos;utilise au quotidien pour
					concevoir et livrer des applications
					robustes.
				</p>

				<StackCategories />

				<Reveal className="mb-16" delay={0.05}>
					<h3 className="mb-5 font-display text-xl font-bold text-foreground">
						Outils du quotidien
					</h3>
					<div className="flex flex-wrap gap-2.5">
						{TOOLS.map((tool, index) => (
							<RevealItem
								key={tool}
								index={index}
								className="inline-flex">
								<span className="cursor-default rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-violet-500/25 hover:text-foreground">
									{tool}
								</span>
							</RevealItem>
						))}
					</div>
				</Reveal>

				<Reveal delay={0.08}>
					<div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
						<div
							className="pointer-events-none absolute top-0 right-0 h-80 w-80"
							style={{
								background:
									"radial-gradient(ellipse at top right, rgba(124,58,237,0.08), transparent 60%)",
							}}
						/>
						<div className="relative">
							<SectionLabel>
								Philosophie
							</SectionLabel>
							<h3 className="mb-4 font-display text-2xl font-bold text-foreground">
								Qualité avant tout
							</h3>
							<p className="max-w-2xl leading-relaxed text-muted-foreground">
								Je privilégie des
								architectures claires et
								maintenables, du code
								TypeScript strict, et des
								bases de données bien
								modélisées. Chaque choix
								technique est justifié par
								les besoins du produit et
								les connaissances acquises
								pas par l&apos;effet de
								mode. Je me forme
								constamment pour rester à
								jour et être en mesure de
								fournir les meilleures
								solutions possibles.
							</p>
						</div>
					</div>
				</Reveal>
			</Reveal>
		</div>
	);
}
