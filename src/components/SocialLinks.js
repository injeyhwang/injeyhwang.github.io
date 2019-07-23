import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const renderSocial = () => {
  return (
    <div className='social-links'>
      <a href='https://www.twitter.com/michaelihwang'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href='https://www.instagram.com/michaelihwang/'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href='https://www.linkedin.com/in/michaelihwang/'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://github.com/michaelihwang'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default renderSocial;
