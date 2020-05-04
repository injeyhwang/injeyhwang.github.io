import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import SectionHeading from './SectionHeading';
import Social from './Social';

import photo from '../assets/memoji.jpeg';

import '../styles/header.css';

export default function Header() {
  const location = useLocation();
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
          {location.pathname === '/' ? <h2><b>About</b></h2> : <h2>About</h2>}
        </Link>
        <Link className='navLinkText' to={'/resume'}>
          {location.pathname === '/resume' ? <h2><b>Resume</b></h2> : <h2>Resume</h2>}
        </Link>
      </div>
      <Social />
      <hr />
    </header>
  );
}
