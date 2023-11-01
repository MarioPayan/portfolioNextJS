/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const prod = process.env.PRODUCTION === 'TRUE'
const nextConfig = {
  i18n: {
    locales: ['en', prod ? 'es' : 'es-CO'],
    defaultLocale: 'en',
  },
  trailingSlash: true,

}

module.exports = nextConfig
