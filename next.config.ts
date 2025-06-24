/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-cdn.contentstack.com',
      },
      {
        protocol: 'https',
        hostname: 'eu-images.contentstack.com',
      },
    ],
  },
};

module.exports = nextConfig;