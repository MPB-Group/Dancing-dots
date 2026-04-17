/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dancingdots.co.uk',
      },
    ],
  },
}

module.exports = nextConfig
