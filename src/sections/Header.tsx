import React from 'react';

import SectionHeading from '../components/SectionHeading';
import Social from '../components/Social';

import photo from '../assets/profilephoto.jpeg';

import '../styles/header.css';

export default function Header() {
  return (
    <header>
      <SectionHeading headingTag={'h1'} headingString={'MICHAEL HWANG'} />
      <img className='profile-pic' src={photo} alt='pic' />
      <div className='letter letter-5'>
        <h2>I love to build and solve problems with code.</h2>
        <h2>Especially using JavaScript and Python.</h2>
      </div>
      <Social />
      <hr />
    </header>
  );
}
