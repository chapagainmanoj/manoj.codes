import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	output: 'export',
	experimental: {
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);
