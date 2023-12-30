const withNextIntl = require('next-intl/plugin')('./app/i18n.js')
const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.laudev.com.br'],
  },
}

module.exports = withNextIntl(nextConfig)
