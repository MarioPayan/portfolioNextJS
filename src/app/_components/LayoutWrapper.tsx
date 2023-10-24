'use client'
// React
import {createContext, useEffect, useState} from 'react'
// NextJS
import {Nunito} from 'next/font/google'
// Data
import Data, {LANGUAGES, Misc} from '@/data/data'
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
      main: '#00bcd4',
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

export const DataContext = createContext<{
  language: LANGUAGES
  setLanguage: (language: LANGUAGES) => void
  data: Data
  misc: Misc
}>({
  language: LANGUAGES.EN,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setLanguage: (language: LANGUAGES) => {},
  data: Data(LANGUAGES.EN),
  misc: Misc(LANGUAGES.EN),
})

const LayoutWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN)
  const [data, setData] = useState<Data>(Data(LANGUAGES.EN))
  const [misc, setMisc] = useState<Misc>(Misc(LANGUAGES.EN))

  useEffect(() => {
    setData(Data(language))
    setMisc(Misc(language))
  }, [language])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <DataContext.Provider value={{data, misc, language, setLanguage}}>
          <CssBaseline />
          {children}
        </DataContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default LayoutWrapper
