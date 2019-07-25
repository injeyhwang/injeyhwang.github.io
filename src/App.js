import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import theme from './util/Themes';

import './styles/app.css';

class App extends Component {
  state = {
    darkMode: true
  };

  toggleTheme = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  }

  render() {
    const themeMode = (this.state.darkMode) ? theme.dark : theme.light;
    
    return (
      <div style={themeMode}>
        <div className='container'>
          <Header />
          <About />
          <Portfolio />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
