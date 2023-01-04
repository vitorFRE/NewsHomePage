import React from 'react';
import { Footer } from '../../components/Footer/Index';
import { Header } from '../../components/Header/Index';
import { Main } from '../../components/Main/Index';
import { MostViewed } from '../../components/MostViewed/Index';

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <MostViewed />
      <Footer />
    </>
  );
};
