import React, { Component } from 'react';

import ThemeSwitch from './components/ThemeSwitch';
import Header from './sections/Header';
import About from './sections/About';
import Footer from './sections/Footer';

import theme from './util/Themes';

import './styles/App.css';

class App extends Component {
  state = {
    darkMode: false
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
          <ThemeSwitch toggleTheme={this.toggleTheme} />
          <Header />
          <About />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
