import React from 'react';

import ThemeContainer from './components/ThemeContainer';
import Header from './components/Header';
import HomeView from './views/HomeView';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeContainer>
      <Header />
      <HomeView />
      <Footer />
    </ThemeContainer>
  );
}
