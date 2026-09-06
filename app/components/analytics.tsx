"use client";
// import { GoogleAnalytics } from "@next/third-parties/google";

export function Analytics() {
	return (
		<>
			{/* Cloudflare Web Analytics */}
			<script
				type='module'
				src='https://static.cloudflareinsights.com/beacon.min.js'
				data-cf-beacon='{"token": "db5fcbdb8601465ab6c5c56724c7f5ff"}'></script>
			{/* <GoogleAnalytics gaId="G-18MSLYGHGM" />
			<script
				dangerouslySetInnerHTML={{
					__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-18MSLYGHGM');
            	`,
				}}
			/> */}
		</>
	);
}
