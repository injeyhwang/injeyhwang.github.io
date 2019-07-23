import React, { Component } from 'react';

import renderSocial from './SocialLinks';

class Header extends Component {

  renderName = () => {
    return (
      <h1>
        <span className='full-name'>MICHAEL</span>
        <span className='big-space'>&nbsp;</span>
        <span className='full-name'>HWANG</span>
      </h1>
    );
  }

  renderPicture = () => {
    return (
      <div>
        <img
          className='profile-pic'
          src='https://avatars2.githubusercontent.com/u/6456602?s=460&v=4'
          alt='pic'
        />
      </div>
    );
  }

  render() {
    return (
      <header className='header'>
        {this.renderName()}
        {this.renderPicture()}
        <h2>
          I love to code, powerlift, run, and travel.
        </h2>
        <h2>
          Especially in React and React Native!
        </h2>
        {renderSocial()}
        <hr className='separator' />
      </header>
    );
  }
}

export default Header;