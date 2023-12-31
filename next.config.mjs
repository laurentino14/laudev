import initIntl from 'next-intl/plugin'

/**
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'laudev.com.br'
      }
    ]
  }
}

const withNextIntl = initIntl('./app/i18n.ts')

export default withNextIntl(nextConfig)
