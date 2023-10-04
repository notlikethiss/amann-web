import '../styles/globals.scss'
import { useState, useCallback } from 'react'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SelectChangeEvent } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: "Raleway"
  }
})

export interface ILanguage {
  language: string
  handleLanguage: (event: SelectChangeEvent) => void
}

function App({ Component, pageProps }: AppProps) {

  const [language, setLanguage] = useState("RU");

  const handleLanguage = useCallback((event: SelectChangeEvent) => {
    setLanguage(event.target.value as string)
  }, [setLanguage]);

  return (
    <ThemeProvider theme={theme}>
      <Header language={language} handleLanguage={handleLanguage} />
      <Component {...pageProps} />
      <Footer language={language} handleLanguage={handleLanguage} />
    </ThemeProvider>
  )
}

export default App;
