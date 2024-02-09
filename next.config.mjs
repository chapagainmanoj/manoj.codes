import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */


const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	output: 'export',
	experimental: {
		mdxRs: true,
	},
	assetPrefix: assetPrefix,
	basePath: basePath,
};

export default withContentlayer(nextConfig);
