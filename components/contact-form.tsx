"use client";

import { useState } from "react";
import {
	ArrowRight,
	MessageSquare,
	useGroupHoverIcon,
} from "@/components/animated-icons";
import { AvailabilityBadge } from "@/components/availability-badge";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/ui/tag";

const inputClass =
	"w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-all placeholder:text-placeholder-foreground focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)] focus:outline-none";

const emptyForm = {
	name: "",
	email: "",
	message: "",
	website: "",
};

export function ContactForm() {
	const [form, setForm] =
		useState(emptyForm);
	const [status, setStatus] = useState<
		| "idle"
		| "loading"
		| "success"
		| "error"
	>("idle");
	const [
		errorMessage,
		setErrorMessage,
	] = useState("");
	const submit = useGroupHoverIcon();
	const reset = useGroupHoverIcon();

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>,
	) => {
		e.preventDefault();
		setStatus("loading");
		setErrorMessage("");

		try {
			const response = await fetch(
				"/api/contact",
				{
					method: "POST",
					headers: {
						"Content-Type":
							"application/json",
					},
					body: JSON.stringify(form),
				},
			);

			const data =
				(await response.json()) as {
					error?: string;
				};

			if (!response.ok) {
				throw new Error(
					data.error ??
						"Impossible d'envoyer le message.",
				);
			}

			setStatus("success");
		} catch (error) {
			setStatus("error");
			setErrorMessage(
				error instanceof Error
					? error.message
					: "Impossible d'envoyer le message.",
			);
		}
	};

	const handleReset = () => {
		setForm(emptyForm);
		setStatus("idle");
		setErrorMessage("");
	};

	return (
		<div className="relative mx-auto max-w-4xl px-6 py-20 lg:max-w-6xl">
			<Reveal>
				<AvailabilityBadge className="mb-8 lg:absolute lg:top-20 lg:right-6 lg:mb-0" />
			</Reveal>

			<Reveal
				className="mb-16"
				delay={0.05}>
				<SectionLabel>
					Contact
				</SectionLabel>
				<h1 className="mb-4 font-display text-4xl font-black text-foreground md:text-5xl">
					Travaillons ensemble
				</h1>
				<p className="max-w-xl leading-relaxed text-muted-foreground">
					Vous avez des questions ? Vous
					recherchez un alternant ?
					Contactez-moi pour en
					discuter.
				</p>
			</Reveal>

			<Reveal delay={0.1}>
				{status === "success" ? (
					<div className="flex flex-col items-center py-16 text-center">
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10">
							<MessageSquare
								size={22}
								className="text-text-violet-soft"
							/>
						</div>
						<h3 className="mb-2 font-display text-xl font-bold text-foreground">
							Message envoyé !
						</h3>
						<p className="mb-6 text-muted-foreground">
							Je vous répondrai dans les
							plus brefs délais.
						</p>
						<button
							type="button"
							onClick={handleReset}
							className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-violet-500/30 hover:bg-secondary/80"
							{...reset.groupProps}>
							Envoyer un autre message
							<ArrowRight
								size={16}
								{...reset.iconProps}
							/>
						</button>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="relative space-y-5">
						<div
							className="absolute left-[9999px] h-px w-px overflow-hidden opacity-0"
							aria-hidden="true">
							<label htmlFor="website">
								Ne pas remplir
							</label>
							<input
								id="website"
								type="text"
								name="website"
								tabIndex={-1}
								autoComplete="off"
								value={form.website}
								onChange={(e) =>
									setForm({
										...form,
										website:
											e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label
								htmlFor="name"
								className="mb-1.5 block text-sm font-medium text-foreground/80">
								Nom
							</label>
							<input
								id="name"
								type="text"
								value={form.name}
								onChange={(e) =>
									setForm({
										...form,
										name: e.target
											.value,
									})
								}
								placeholder="Votre nom"
								required
								disabled={
									status === "loading"
								}
								className={inputClass}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="mb-1.5 block text-sm font-medium text-foreground/80">
								Email
							</label>
							<input
								id="email"
								type="email"
								value={form.email}
								onChange={(e) =>
									setForm({
										...form,
										email:
											e.target.value,
									})
								}
								placeholder="votre@email.com"
								required
								disabled={
									status === "loading"
								}
								className={inputClass}
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="mb-1.5 block text-sm font-medium text-foreground/80">
								Message
							</label>
							<textarea
								id="message"
								value={form.message}
								onChange={(e) =>
									setForm({
										...form,
										message:
											e.target.value,
									})
								}
								placeholder="Décrivez votre projet ou votre question..."
								required
								rows={6}
								disabled={
									status === "loading"
								}
								className={`${inputClass} resize-none`}
							/>
						</div>
						{status === "error" && (
							<div
								role="alert"
								className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
								{errorMessage}
							</div>
						)}
						<button
							type="submit"
							disabled={
								status === "loading"
							}
							className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-[0_0_22px_rgba(124,58,237,0.32)] transition-colors hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
							{...submit.groupProps}>
							{status === "loading"
								? "Envoi en cours..."
								: "Envoyer le message"}{" "}
							<ArrowRight
								size={16}
								{...submit.iconProps}
							/>
						</button>
					</form>
				)}
			</Reveal>
		</div>
	);
}
