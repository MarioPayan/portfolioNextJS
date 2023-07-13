// NextJS
import {Metadata} from 'next'
// Data
import DATA from '@/data/data'

const images = {
  favicon: '/images/favicon.png',
  profilePixel: '/images/profile_pixel_LQ.png',
  profile: '/images/profile_LQ.jpg',
}

const metadata: Metadata = {
  metadataBase: DATA.PERSONAL.url as any,
  title: DATA.PERSONAL.meta_title,
  description: DATA.PERSONAL.meta_description,
  generator: DATA.PERSONAL.name,
  applicationName: DATA.PERSONAL.name,
  keywords: DATA.PERSONAL.keywords.join(', '),
  authors: [{name: DATA.PERSONAL.name, url: DATA.PERSONAL.url}],
  colorScheme: 'dark',
  creator: DATA.PERSONAL.name,
  publisher: DATA.PERSONAL.name,
  themeColor: 'black',

  icons: {
    icon: images.favicon,
    shortcut: images.favicon,
    apple: images.favicon,
  },

  openGraph: {
    title: DATA.PERSONAL.meta_title,
    description: DATA.PERSONAL.meta_description,
    url: DATA.PERSONAL.url,
    emails:
      DATA.CONTACTS.find(c => c.label.toLowerCase() === 'email')?.name || '',
    type: 'website',
    siteName: DATA.PERSONAL.name,
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
    site: DATA.PERSONAL.name,
    card: 'summary_large_image',
    title: DATA.PERSONAL.meta_title,
    description: DATA.PERSONAL.meta_description,
    creator: DATA.PERSONAL.name,
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

export default metadata
