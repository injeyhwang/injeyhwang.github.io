import React, { Component } from 'react';

import ThemeSwitch from './components/ThemeSwitch';
import Header from './sections/Header';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Footer from './sections/Footer';

import theme from './util/Themes';

import './styles/App.css';

class App extends Component {
  state = {
    darkMode: localStorage.getItem('darkMode') === 'true'
  };

  toggleTheme = () => {
    this.setState(
      prevState => ({ darkMode: !prevState.darkMode }),
      () => {
        localStorage.setItem('darkMode', this.state.darkMode);
      }
    );
  };

  render() {
    const { darkMode } = this.state;
    return (
      <div style={darkMode ? theme.dark : theme.light}>
        <div className='container'>
          <ThemeSwitch toggleTheme={this.toggleTheme} />
          <Header />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
