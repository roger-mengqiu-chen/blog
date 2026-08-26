import createMDX from '@next/mdx';


/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: 'export',
    images: { unoptimized: true }
};

const withMDX = createMDX({
});

export default withMDX(nextConfig)
