'use client'
// NextJS
import {Nunito} from 'next/font/google'
// Material UI
import createTheme from '@mui/material/styles/createTheme'

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

export default theme
