import React from 'react';

import SectionHeading from './SectionHeading';
import Social from './Social';

import photo from '../assets/memoji.jpeg';

import '../styles/header.css';

export default function Header() {
  return (
    <header>
      <SectionHeading headingTag={'h1'} headingString={'MICHAEL HWANG'} />
      <img className='profile-pic' src={photo} alt='pic' />
      <div className='letter letter-5'>
        <h2>I love to build and solve problems with code.</h2>
        <h2>Especially using TypeScript and Python!</h2>
      </div>
      <Social />
      <hr />
    </header>
  );
}
