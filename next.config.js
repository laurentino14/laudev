const withNextIntl = require('next-intl/plugin')('./app/i18n.ts')

/**
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'laudev.com.br',
      },
      {
        protocol: 'https',
        hostname: 'cdn.laudev.com.br',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
