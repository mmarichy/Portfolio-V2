"use client";

import { AvailabilityBadge } from "@/components/availability-badge";
import { ProfilePhoto } from "@/components/profile-photo";
import { SocialLinks } from "@/components/social-links";
import {
	MapPin,
} from "@/components/animated-icons";

export function AboutSidebar() {
	return (
		<div>
			<ProfilePhoto priority />
			<div className="mt-5 space-y-2.5">
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<MapPin
						size={13}
						className="shrink-0 text-text-violet-muted"
					/>
					France — disponible en remote
				</div>
				<AvailabilityBadge />
			</div>

			<SocialLinks
				variant="boxed"
				size={15}
				className="mt-5 flex gap-2.5"
			/>
		</div>
	);
}
