/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/momo-audio',
  assetPrefix: '/momo-audio/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
