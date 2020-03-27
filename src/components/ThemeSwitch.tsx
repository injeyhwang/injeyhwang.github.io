import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import '../styles/switch.css';

type ThemeSwitchProps = {
  onClick: () => void;
};

export default function ThemeSwitch({ onClick }: ThemeSwitchProps) {
  return (
    <div className='theme-switch bounce-diagonal' onClick={onClick}>
      <FontAwesomeIcon icon={faLightbulb} />
      <div className='theme-switch-text'>Lights</div>
    </div>
  );
}
