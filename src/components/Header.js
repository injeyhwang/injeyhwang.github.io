import React, { Component } from 'react';

import Social from './Social';

import '../styles/header.css';

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
        <h2 className='summary'>
          I love to code and use software to solve problems.
        </h2>
        <h2 className='summary'>
          I also like to drink coffee and eat Sweetgreen.
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
        <Social />
        <hr />
      </header>
    );
  }
}

export default Header;