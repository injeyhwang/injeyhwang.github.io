import React, { useEffect, useState } from 'react';

import ThemeSwitch from './ThemeSwitch';

import theme from '../util/Themes';

import '../styles/container.css';

export default function ThemeContainer({ children }) {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div style={darkMode ? theme.dark : theme.light}>
      <div className='container'>
        <ThemeSwitch toggleTheme={toggleTheme} />
        {children}
      </div>
    </div>
  );
};
