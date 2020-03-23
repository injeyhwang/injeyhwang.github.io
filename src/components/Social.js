import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

import '../styles/social.css';

class Social extends Component {
  render() {
    return (
      <div>
        <a
          className='social-links twitter-color bounce'
          href='https://www.twitter.com/michaelihwang'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className='social-links instagram-color bounce'
          href='https://www.instagram.com/michaelihwang/'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className='social-links linkedin-color bounce'
          href='https://www.linkedin.com/in/michaelihwang/'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className='social-links github-color bounce'
          href='https://github.com/michaelihwang'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  }
}

export default Social;
