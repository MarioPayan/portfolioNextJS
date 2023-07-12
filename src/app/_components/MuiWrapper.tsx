'use client'
// NextJS
import {Nunito} from 'next/font/google'
// Material UI
import createTheme from '@mui/material/styles/createTheme'
import {StyledEngineProvider} from '@mui/material/styles'
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

const MuiWrapper = ({children}: {children: React.ReactNode}) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
)

export default MuiWrapper
