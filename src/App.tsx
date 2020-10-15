import React from 'react';
import ReactGA from 'react-ga';

import ThemeContainer from './components/ThemeContainer';
import Header from './components/Header';
import HomeView from './views/HomeView';
import Footer from './components/Footer';

function googleAnalytics() {
  ReactGA.initialize(`${process.env.REACT_APP_GA}`);
  ReactGA.pageview('/');
}

export default function App() {
  googleAnalytics()
  return (
    <ThemeContainer>
      <Header />
      <HomeView />
      <Footer />
    </ThemeContainer>
  );
}
