import {
	globalStructuredData,
	pageStructuredData,
} from "@/lib/structured-data";

type StructuredDataProps = {
	data:
		| ReturnType<typeof globalStructuredData>
		| ReturnType<typeof pageStructuredData>;
};

export function StructuredData({
	data,
}: StructuredDataProps) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data),
			}}
		/>
	);
}
