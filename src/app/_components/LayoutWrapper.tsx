'use client'
// React
import {createContext, useState} from 'react'
// NextJS
import {Nunito} from 'next/font/google'
// Data
import {LANGUAGES} from '@/data/data'
// Material UI
import {StyledEngineProvider} from '@mui/material/styles'
import createTheme from '@mui/material/styles/createTheme'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

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

export const LangContext = createContext<{
  language: LANGUAGES
  setLanguage: (language: LANGUAGES) => void
    }>({
      language: LANGUAGES.EN,
      // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
      setLanguage: (language: LANGUAGES) => {},
    })

const LayoutWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LangContext.Provider value={{language, setLanguage}}>
          <CssBaseline />
          {children}
        </LangContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default LayoutWrapper
