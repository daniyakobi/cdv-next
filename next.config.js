/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['sun9-north.userapi.com'],
  },
}

module.exports = nextConfig