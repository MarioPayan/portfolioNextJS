'use client'
// Components
import {Head} from '@/components'
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
            <Head />
          </head>
          <body suppressHydrationWarning>{children}</body>
        </html>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
