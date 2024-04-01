"use client";

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	return (
		<script
			src="https://beamanalytics.b-cdn.net/beam.min.js"
			data-token="6a077f15-152f-4940-b04e-e143a62b4ca1"
			async
		/>
	);
}
