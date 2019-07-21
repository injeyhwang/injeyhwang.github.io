import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default App;
