import React, { useEffect, useState } from 'react';

import ThemeSwitch from './ThemeSwitch';

import theme from '../util/themes';

import '../styles/container.css';

type ThemeContainerProps = {
  children: React.ReactNode;
};

export default function ThemeContainer({ children }: ThemeContainerProps) {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true');

  function toggleTheme() {
    setDarkMode((prevMode => !prevMode));
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  return (
    <div style={darkMode ? theme.dark : theme.light}>
      <div className='container'>
        <ThemeSwitch onClick={toggleTheme} />
        {children}
      </div>
    </div>
  );
};
