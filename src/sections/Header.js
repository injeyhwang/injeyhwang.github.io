import React, { Component } from 'react';

import SectionHeading from '../components/SectionHeading';
import Social from '../components/Social';

import photo from '../assets/profilephoto.jpeg'

import '../styles/header.css';

class Header extends Component {
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
        <SectionHeading headingTag={'h1'} headingString={'MICHAEL HWANG'} />
        {this.renderProfilePicture()}
        {this.renderSummary()}
        <Social />
        <hr />
      </header>
    );
  }
}

export default Header;