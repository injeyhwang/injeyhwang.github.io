import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import '../styles/switch.css';

class ThemeSwitch extends Component {

  render() {
    return (
      <div className='theme-switch bounce-diagonal' onClick={this.props.toggleTheme}>
        <FontAwesomeIcon icon={faLightbulb} />
        <div className='theme-switch-text'>Lights</div>
      </div>
    );
  }
}

export default ThemeSwitch;