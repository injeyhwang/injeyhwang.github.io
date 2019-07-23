import React, { Component } from 'react';

import renderSocial from './SocialLinks';

class Footer extends Component {

  renderCopyright = () => {
    return (
      <div className='copyright'>
        <p>
          © Copyright 2019 Michael Hwang
        </p>
      </div>
    );
  }

  render() {
    return (
      <footer className='footer'>
        {this.renderCopyright()}
      </footer>
    );
  }
}

export default Footer;
