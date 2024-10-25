"use client";
import { GoogleAnalytics } from '@next/third-parties/google'


export function Analytics() {
	const token = "6a077f15-152f-4940-b04e-e143a62b4ca1";
	return (
		<>
			<script
				src="https://beamanalytics.b-cdn.net/beam.min.js"
				data-token={token}
				async
			/>
			<GoogleAnalytics gaId="G-18MSLYGHGM" />
		</>
	);
}
