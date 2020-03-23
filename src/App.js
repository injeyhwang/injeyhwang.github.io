import React from 'react';

import ThemeContainer from './components/ThemeContainer';
import Header from './sections/Header';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Footer from './sections/Footer';

export default function App() {
  return (
    <ThemeContainer>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </ThemeContainer>
  );
}
