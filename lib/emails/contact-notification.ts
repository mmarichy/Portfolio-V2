export type ContactEmailData = {
	name: string;
	email: string;
	message: string;
};

const colors = {
	background: "#0b0b11",
	card: "#14141f",
	field: "#1c1c2a",
	foreground: "#f4f2fa",
	label: "#c4b5fd",
	muted: "#b4afc4",
	link: "#ddd6fe",
	violetDark: "#7c3aed",
	border: "#3d2f66",
	borderSoft: "#2a2340",
};

function escapeHtml(
	value: string,
): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function fieldBlock(
	label: string,
	content: string,
): string {
	return `
    <tr>
      <td style="padding:0 0 12px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${colors.field};border:1px solid ${colors.border};border-radius:12px;">
          <tr>
            <td style="padding:14px 16px;">
              <p style="margin:0 0 8px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${colors.label};">
                ${label}
              </p>
              ${content}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

export function buildContactEmailText({
	name,
	email,
	message,
}: ContactEmailData): string {
	return [
		"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
		"  NOUVEAU MESSAGE — PORTFOLIO",
		"  Mathis Marichy",
		"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
		"",
		`Nom     : ${name}`,
		`Email   : ${email}`,
		"",
		"Message :",
		message,
		"",
		"— Répondez directement à cet email pour contacter l'expéditeur.",
	].join("\n");
}

export function buildContactEmailHtml({
	name,
	email,
	message,
}: ContactEmailData): string {
	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safeMessage = escapeHtml(
		message,
	).replace(/\n/g, "<br>");
	const replySubject =
		encodeURIComponent(
			`Re: Votre message — ${name}`,
		);

	return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark light" />
  <meta name="supported-color-schemes" content="dark light" />
  <title>Nouveau message — Portfolio</title>
</head>
<body style="margin:0;padding:0;background-color:${colors.background};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${colors.background};padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;background-color:${colors.card};border-radius:16px;overflow:hidden;border:1px solid ${colors.border};">
          <tr>
            <td style="padding:32px 32px 24px;background-color:${colors.card};">
              <p style="margin:0 0 10px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:${colors.label};">
                Contact
              </p>
              <h1 style="margin:0 0 10px;font-size:26px;font-weight:800;line-height:1.15;letter-spacing:-0.02em;color:${colors.foreground};">
                MATHIS <span style="color:${colors.label};">MARICHY</span>
              </h1>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.55;color:${colors.muted};">
                Nouveau message depuis le formulaire de contact
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0">
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px 32px;background-color:${colors.card};">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${fieldBlock(
									"Nom",
									`<p style="margin:0;font-size:16px;font-weight:700;color:${colors.foreground};">${safeName}</p>`,
								)}
                ${fieldBlock(
									"Email",
									`<p style="margin:0;font-size:16px;font-weight:600;"><a href="mailto:${safeEmail}" style="color:${colors.link};text-decoration:underline;">${safeEmail}</a></p>`,
								)}
                ${fieldBlock(
									"Message",
									`<p style="margin:0;font-size:16px;line-height:1.7;color:${colors.foreground};">${safeMessage}</p>`,
								)}
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:10px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=${replySubject}"
                      style="display:inline-block;padding:14px 28px;background-color:${colors.violetDark};color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;border-radius:12px;">
                      Répondre à ${safeName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 32px;border-top:1px solid ${colors.borderSoft};background-color:${colors.field};">
              <p style="margin:0;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12px;line-height:1.6;color:${colors.muted};text-align:center;">
                mathis.marichy · Portfolio · Lead developer web
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
