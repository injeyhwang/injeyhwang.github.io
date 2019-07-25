import React, { Component } from 'react';

import Social from './Social';

import '../styles/header.css';

class Header extends Component {

  renderName = () => {
    return (
      <h1>
        <span className='letter letter-M'>M</span>
        <span className='letter letter-I'>I</span>
        <span className='letter letter-C'>C</span>
        <span className='letter letter-H'>H</span>
        <span className='letter letter-A'>A</span>
        <span className='letter letter-E'>E</span>
        <span className='letter letter-L'>L</span>
        <span className='big-space'>&nbsp;</span>
        <span className='letter letter-H'>H</span>
        <span className='letter letter-W'>W</span>
        <span className='letter letter-A'>A</span>
        <span className='letter letter-N'>N</span>
        <span className='letter letter-G'>G</span>
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
          This website is interactive... try hovering over items!
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