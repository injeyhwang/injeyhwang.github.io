import React, { Component } from 'react';

import Social from '../components/Social';

import photo from '../assets/profilephoto.jpeg'

import '../styles/header.css';

class Header extends Component {
  renderName = () => (
    <h1>
      <span className='letter letter-1'>M</span>
      <span className='letter letter-2'>I</span>
      <span className='letter letter-3'>C</span>
      <span className='letter letter-4'>H</span>
      <span className='letter letter-5'>A</span>
      <span className='letter letter-6'>E</span>
      <span className='letter letter-7'>L</span>
      <span className='big-space'>&nbsp;</span>
      <span className='letter letter-4'>H</span>
      <span className='letter letter-8'>W</span>
      <span className='letter letter-5'>A</span>
      <span className='letter letter-9'>N</span>
      <span className='letter letter-10'>G</span>
    </h1>
  );

  renderProfilePicture = () => (
    <img className='profile-pic' src={photo} alt='pic' />
  );

  renderSummary = () => (
    <div>
      <h2 className='summary'>I love to build and solve problems with code.</h2>
      <h2 className='summary'>Especially using Python and JavaScript!</h2>
    </div>
  );

  render() {
    return (
      <header>
        {this.renderName()}
        {this.renderProfilePicture()}
        {this.renderSummary()}
        <Social />
        <hr />
      </header>
    );
  }
}

export default Header;