// NextJS
import {Metadata} from 'next'
// Data
import DATA from '@/data/data'
// Utils
import {images} from '@/utils/images'

export const Head: React.FC = () => (
  <>
    <title>{DATA.PERSONAL.name}</title>
    <meta name='title' content={DATA.PERSONAL.name} />
    <meta name='description' content={DATA.PERSONAL.description.BUSINESS} />
    <meta name='author' content={DATA.PERSONAL.name} />
    <meta name='keywords' content={DATA.PERSONAL.keywords.join(', ')} />
    <meta name='theme-color' content='#000000' />
    <meta name='application-name' content={DATA.PERSONAL.name} />
    <link rel='canonical' href={DATA.PERSONAL.url} />
    <meta charSet='utf-8'></meta>

    <link rel='icon' href={images.favicon} sizes='any' />
    <link rel='shortcut icon' href={images.favicon} />
    <link rel='apple-touch-icon' href={images.favicon} />

    <meta property='og:title' content={DATA.PERSONAL.name} />
    <meta
      property='og:description'
      content={DATA.PERSONAL.description.BUSINESS}/>
    <meta property='og:url' content={DATA.PERSONAL.url} />
    <meta property='og:type' content='website' />
    <meta property='og:image' content={images.profilePixel} />

    <meta property='twitter:title' content={DATA.PERSONAL.name} />
    <meta
      property='twitter:description'
      content={DATA.PERSONAL.description.BUSINESS}/>
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={DATA.PERSONAL.url} />
    <meta property='twitter:image' content={images.profilePixel} />

    <meta name='robots' content='all' />
    <meta name='googlebot' content='all' />
  </>
)

export const metadata: Metadata = {
  title: DATA.PERSONAL.name,
  description: DATA.PERSONAL.description.BUSINESS,
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
    title: DATA.PERSONAL.name,
    description: DATA.PERSONAL.description.BUSINESS,
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
    title: DATA.PERSONAL.name,
    description: DATA.PERSONAL.description.BUSINESS,
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
