'use client'
// React
import {createContext, useEffect, useState} from 'react'
// NextJS
import {Nunito} from 'next/font/google'
// Data
import Data, {LANGUAGES, Misc, PALETTE} from '@/data/data'
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

const theme = (palette: PALETTE) =>
  createTheme({
    typography: {
      fontSize: 16,
      fontFamily: nunito.style.fontFamily,
      fontWeightRegular: 400,
    },
    palette: {
      mode: palette,
      primary: {
        main: '#00bcd4',
      },
      secondary: {
        main: '#9f69e7',
      },
      background: {default: {dark: 'rgb(0, 0, 0)', light: 'whitesmoke'}[palette]},
    },
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: {dark: 3, light: 0}[palette],
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
  palette: PALETTE
  setPalette: (palette: PALETTE) => void
  data: Data
  misc: Misc
    }>({
      language: LANGUAGES.EN,
      // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
      setLanguage: (language: LANGUAGES) => {},
      palette: PALETTE.DARK,
      // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
      setPalette: (palette: PALETTE) => {},
      data: Data(LANGUAGES.EN),
      misc: Misc(LANGUAGES.EN),
    })

const LayoutWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN)
  const [palette, setPalette] = useState<PALETTE>(PALETTE.DARK)
  const [data, setData] = useState<Data>(Data(LANGUAGES.EN))
  const [misc, setMisc] = useState<Misc>(Misc(LANGUAGES.EN))

  useEffect(() => {
    setData(Data(language))
    setMisc(Misc(language))
  }, [language])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(palette)}>
        <DataContext.Provider value={{data, misc, language, setLanguage, palette, setPalette}}>
          <CssBaseline />
          {children}
        </DataContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default LayoutWrapper
