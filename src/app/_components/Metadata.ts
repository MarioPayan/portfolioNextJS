// NextJS
import {Metadata, Viewport} from 'next'
// Data
import Data from '@/data/data'

const images = {
  favicon: '/images/favicon.png',
  profilePixel: '/images/profile_pixel_LQ.png',
  profile: '/images/profile_LQ.jpg',
}

const data = Data()

const metadata: Metadata = {
  metadataBase: data.PERSONAL.url as unknown as URL,
  title: data.PERSONAL.meta_title,
  description: data.PERSONAL.meta_description,
  generator: data.PERSONAL.name,
  applicationName: data.PERSONAL.name,
  keywords: data.PERSONAL.keywords.join(', '),
  authors: [{name: data.PERSONAL.name, url: data.PERSONAL.url}],
  creator: data.PERSONAL.name,
  publisher: data.PERSONAL.name,

  icons: {
    icon: images.favicon,
    shortcut: images.favicon,
    apple: images.favicon,
  },

  openGraph: {
    title: data.PERSONAL.meta_title,
    description: data.PERSONAL.meta_description,
    url: data.PERSONAL.url,
    emails: data.CONTACTS.find(c => c.label.toLowerCase() === 'email')?.name || '',
    type: 'website',
    siteName: data.PERSONAL.name,
    images: [
      {
        url: images.profilePixel,
        width: 500,
        height: 500,
      },
      {
        url: images.profile,
        width: 400,
        height: 400,
      },
    ],
  },

  twitter: {
    site: data.PERSONAL.name,
    card: 'summary_large_image',
    title: data.PERSONAL.meta_title,
    description: data.PERSONAL.meta_description,
    creator: data.PERSONAL.name,
    images: [images.profilePixel],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    notranslate: false,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
      noarchive: false,
      nosnippet: false,
      noimageindex: false,
      notranslate: false,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: 'black',
}

export default metadata
