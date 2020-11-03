import React, { useEffect, useState } from 'react';
import { getTotalDonations, getTotalMealsClaimed } from '../util/APICaller';

import SectionHeading from './SectionHeading';

import '../styles/heading.css';
import '../styles/highlight.css';

export default function About() {
  const [totalUSDRaised, setTotalUSDRaised] = useState('Loading...');
  useEffect(() => {
    getTotalDonations(setTotalUSDRaised);
  }, [totalUSDRaised]);

  const [totalMealsClaimed, setTotalMealsClaimed] = useState('Loading...');
  useEffect(() => {
    getTotalMealsClaimed(setTotalMealsClaimed);
  }, [totalMealsClaimed]);

  function renderIntro() {
    return (
      <p className='sentence sentence-hover-glow'>
        <span className='hello highlight grow'>
          Hello!
        </span>
         &nbsp;I'm a 🇨🇦&nbsp;
        <span className='full-stack-engineer highlight grow'>
          Full-Stack Engineer
        </span>
        &nbsp;and&nbsp;
        <span className='major highlight grow'>Computer Science</span>
        &nbsp;graduate from&nbsp;
        <span className='school highlight grow'>Columbia University</span>
        .
      </p>
    );
  }

  function renderLookingFor() {
    return (
      <p className='sentence sentence-hover-glow'>
        I enjoy building with&nbsp;
        <a className='react highlight grow' href='https://reactjs.org/'>
          React
        </a>
        &nbsp;,&nbsp;
        <span className='typescript highlight grow'>TypeScript</span>
        &nbsp;, and&nbsp;
        <a className='tailwind highlight grow' href='https://tailwindcss.com/'>
          Tailwind CSS
        </a>
        &nbsp;and love working with&nbsp;
        <a className='python highlight grow' href='https://www.python.org/'>
          Python
        </a>
        . That said, I'm also flexible; I'm eager to learn new
        technologies and take on challenges outside my domain!
      </p>
    );
  }

  function renderCurrentlyDoing() {
    return (
      <>
        <p className='sentence sentence-hover-glow'>
          Currently, I am a&nbsp;
          <span className='co-founder highlight grow'>Co-Founder</span>
          &nbsp;and&nbsp;
          <span className='fe-lead highlight grow'>Frontend Lead</span>
          &nbsp;at&nbsp;
          <a className='openmeal highlight grow' href='https://www.openmeal.org/'>
            OpenMeal
          </a>
          , an online <span className='metric highlight grow'>501(c)(3) nonprofit</span>
          &nbsp;platform where donors can purchase meals for individuals
          financially impacted by COVID-19 from our partnered restaurants.
        </p>
        <p className='sentence sentence-hover-glow'>
          Since our launch May 2020, we distributed&nbsp;
          <span className='metric highlight grow'>{totalUSDRaised}</span>
          &nbsp;USD to our partnered restaurants and helped individuals and families claim&nbsp;
          <span className='metric highlight grow'>{totalMealsClaimed}</span>
          &nbsp;meals as of <span className='metric highlight grow'>{
            new Date().toLocaleString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })
          }</span>!
        </p>
      </>
    );
  }

  function renderInterests() {
    return (
      <p className='sentence sentence-hover-glow'>
        When I'm not&nbsp;
        <span className='coding highlight grow'>Coding</span>, I nerd over&nbsp;
        <span className='finance highlight grow'>Personal Finance</span>
        , go for a&nbsp;
        <span className='running highlight grow'>Run</span>
        &nbsp;around the city, or take cityscape&nbsp;
        <span className='photos highlight grow'>Photography</span>
        &nbsp;and&nbsp;
        <span className='travel highlight grow'>Travel</span>!
      </p>
    );
  }

  return (
    <section>
      <div className='heading'>
        <SectionHeading headingTag={'h2'} headingString={'About Me'} />
        <SectionHeading headingTag={'a'} headingString={'Resume'} />
      </div>
      {renderIntro()}
      {renderLookingFor()}
      {renderCurrentlyDoing()}
      {renderInterests()}
    </section>
  );
}
