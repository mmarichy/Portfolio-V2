import {
  buildContactEmailHtml,
  buildContactEmailText,
} from "@/lib/emails/contact-notification";
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Tous les champs sont requis." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Le message est trop long (5000 caractères max)." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL ?? "marichy.pro@gmail.com";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  const contactData = { name, email, message };

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[Priorité haute] Nouveau message de ${name} — Portfolio`,
    text: buildContactEmailText(contactData),
    html: buildContactEmailHtml(contactData),
    headers: {
      "X-Priority": "1",
      Priority: "urgent",
      Importance: "high",
      "X-MSMail-Priority": "High",
    },
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message. Réessayez plus tard." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
