'use client'
// NextJS
import {Nunito} from 'next/font/google'
// Utils
import images from '@/utils/images'
// Data
import DATA from '@/data/data'
// Material UI
import CssBaseline from '@mui/material/CssBaseline'
import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import {StyledEngineProvider} from '@mui/material/styles'

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  fallback: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
})

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
    fontWeightRegular: 400,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(0,188,212)',
    },
    secondary: {
      main: '#9f69e7',
    },
    background: {default: 'rgb(22, 28, 36)', paper: 'rgb(33, 43, 54)'},
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang='en'>
          <head>
            <link rel='icon' href={images.favicon} sizes='any' />
            <link rel='apple-touch-icon' href={images.favicon} />

            <title>{DATA.PERSONAL.name}</title>
            <meta name='title' content={DATA.PERSONAL.name} />
            <meta
              name='description'
              content={DATA.PERSONAL.description.BUSINESS}/>

            <meta property='og:type' content='website' />
            <meta property='og:url' content={DATA.PERSONAL.url} />
            <meta property='og:title' content={DATA.PERSONAL.name} />
            <meta
              property='og:description'
              content={DATA.PERSONAL.description.BUSINESS}/>
            <meta property='og:image' content={images.profilePixel} />

            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={DATA.PERSONAL.url} />
            <meta property='twitter:title' content={DATA.PERSONAL.name} />
            <meta
              property='twitter:description'
              content={DATA.PERSONAL.description.BUSINESS}/>
            <meta property='twitter:image' content={images.profilePixel} />

            <link rel='shortcut icon' href={images.favicon} />
          </head>
          <body suppressHydrationWarning>{children}</body>
        </html>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
