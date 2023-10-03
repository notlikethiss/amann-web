import type { NextPage } from 'next'
import Header from '../components/Header';
import MainPage from './main';
import { useState, useCallback } from 'react';
import { SelectChangeEvent } from '@mui/material';
import Footer from '../components/Footer';

export interface ILanguage {
  language: string
  handleLanguage: (event: SelectChangeEvent) => void
}

const Home: NextPage = () => {

  const [language, setLanguage] = useState("RU");

  const handleLanguage = useCallback((event: SelectChangeEvent) => {
    setLanguage(event.target.value as string)
  }, [setLanguage]);

  return (
    <>
      <Header language={language} handleLanguage={handleLanguage} />
      <MainPage />
      <Footer language={language} handleLanguage={handleLanguage} />
    </>
  )
}

export default Home;
