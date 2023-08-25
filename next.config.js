/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.redlands.edu',
        port: '',
      },
    ]
  }
}

module.exports = nextConfig
