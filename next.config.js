/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'es-CO'],
    defaultLocale: 'en-US',
  },
  trailingSlash: true,
}

module.exports = nextConfig
