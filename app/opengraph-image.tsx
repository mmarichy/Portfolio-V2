import { ImageResponse } from "next/og";
import {
	SITE_DESCRIPTION,
	SITE_TITLE,
} from "@/lib/site";

export const alt = SITE_TITLE;
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "72px 80px",
					background: "#0b0b11",
					position: "relative",
					overflow: "hidden",
				}}>
				<div
					style={{
						position: "absolute",
						top: "-120px",
						right: "-80px",
						width: "520px",
						height: "520px",
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						bottom: "-160px",
						left: "-60px",
						width: "420px",
						height: "420px",
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
					}}
				/>

				<p
					style={{
						margin: "0 0 20px",
						fontSize: 18,
						fontWeight: 500,
						letterSpacing: "0.18em",
						textTransform: "uppercase",
						color: "#9490a2",
					}}>
					Lead Developer Web
				</p>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						lineHeight: 0.95,
						marginBottom: 28,
					}}>
					<span
						style={{
							fontSize: 88,
							fontWeight: 900,
							color: "#ebe8f5",
							letterSpacing: "-0.03em",
						}}>
						MATHIS
					</span>
					<span
						style={{
							fontSize: 88,
							fontWeight: 900,
							color: "#9b73f8",
							letterSpacing: "-0.03em",
						}}>
						MARICHY
					</span>
				</div>

				<p
					style={{
						margin: 0,
						maxWidth: 720,
						fontSize: 28,
						lineHeight: 1.45,
						color: "#a899e0",
					}}>
					{SITE_DESCRIPTION}
				</p>
			</div>
		),
		{ ...size },
	);
}
