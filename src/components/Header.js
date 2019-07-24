import React, { Component } from 'react';

import renderSocial from './SocialLinks';

import '../styles/components/HeaderStyles.css';

class Header extends Component {

  renderName = () => {
    return (
      <h1>
        <span>MICHAEL</span>
        <span className='big-space'>&nbsp;</span>
        <span>HWANG</span>
      </h1>
    );
  }

  renderPicture = () => {
    return (
      <img
        className='profile-pic'
        src='https://avatars2.githubusercontent.com/u/6456602?s=460&v=4'
        alt='pic'
      />
    );
  }

  renderSummary = () => {
    return (
      <div>
        <h2>
          I love building and solving problems with code.
        </h2>
        <h2>
          Especially in JavaScript and Python.
        </h2>
      </div>
    );
  }

  render() {
    return (
      <header>
        {this.renderName()}
        {this.renderPicture()}
        {this.renderSummary()}
        {renderSocial()}
        <hr className='separator' />
      </header>
    );
  }
}

export default Header;