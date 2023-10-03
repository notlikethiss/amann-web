import type { NextPage } from 'next'
import Header from '../components/Header';
import MainPage from './main';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default Home;
