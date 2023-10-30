/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/es/:path*',
        destination: '/esp/:path*',
        locale: false,
      },
    ]
  },
}

module.exports = nextConfig
