'use client'
// Data
import DATA from '@/data/data'
// Utils
import {images} from '@/utils/images'
// Material UI
import {StyledEngineProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/app/theme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang='en'>
          <head>
            <title>{DATA.PERSONAL.name}</title>
            <meta name='title' content={DATA.PERSONAL.name} />
            <meta
              name='description'
              content={DATA.PERSONAL.description.BUSINESS}/>
            <meta name='author' content={DATA.PERSONAL.name} />
            <meta name='keywords' content={DATA.PERSONAL.keywords.join(', ')} />
            <meta name='theme-color' content='#000000' />
            <meta name='application-name' content={DATA.PERSONAL.name} />
            <link rel='canonical' href={DATA.PERSONAL.url} />
            <meta charSet='utf-8'></meta>

            {/* Favicons */}
            <link rel='icon' href={images.favicon} sizes='any' />
            <link rel='shortcut icon' href={images.favicon} />
            <link rel='apple-touch-icon' href={images.favicon} />

            {/* Open Graph / Facebook */}
            <meta property='og:title' content={DATA.PERSONAL.name} />
            <meta
              property='og:description'
              content={DATA.PERSONAL.description.BUSINESS}/>
            <meta property='og:url' content={DATA.PERSONAL.url} />
            <meta property='og:type' content='website' />
            <meta property='og:image' content={images.profilePixel} />

            {/* Twitter */}
            <meta property='twitter:title' content={DATA.PERSONAL.name} />
            <meta
              property='twitter:description'
              content={DATA.PERSONAL.description.BUSINESS}/>
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={DATA.PERSONAL.url} />
            <meta property='twitter:image' content={images.profilePixel} />

            {/* Crawlers */}
            <meta name='robots' content='all' />
            <meta name='googlebot' content='all' />
          </head>
          <body suppressHydrationWarning>{children}</body>
        </html>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
