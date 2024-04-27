/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const prod = process.env.PRODUCTION === 'TRUE'
const nextConfig = {
  i18n: prod ? {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  } : undefined,
  trailingSlash: true,

}

module.exports = nextConfig
