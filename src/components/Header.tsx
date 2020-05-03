import React from 'react';
import { Link } from 'react-router-dom';

import SectionHeading from './SectionHeading';
import Social from './Social';

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
      <div className='navContainer'>
        <Link className='navLinkText' to={'/'}>
          <h2>About</h2>
        </Link>
        <Link className='navLinkText' to={'/resume'}>
          <h2>Resume</h2>
        </Link>
      </div>
      <Social />
      <hr />
    </header>
  );
}
