import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ThemeContainer from './components/ThemeContainer';
import Header from './components/Header';
import HomeView from './views/HomeView';
import ResumeView from './views/ResumeView';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Switch>
        <ThemeContainer>
          <Header />
          <Route path="/" component={HomeView} exact />
          <Route path="/resume" component={ResumeView} />
          <Footer />
        </ThemeContainer>
      </Switch>
    </Router>
  );
}
