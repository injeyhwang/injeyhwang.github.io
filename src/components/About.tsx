import React, { useEffect, useState } from 'react';
import { getTotalDonations, getTotalMealsClaimed } from '../util/APICaller';

import SectionHeading from './SectionHeading';

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
        &nbsp;and a&nbsp;
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
          React Hooks
        </a>
        &nbsp;,&nbsp;
        <span className='typescript highlight grow'>TypeScript</span>
        &nbsp;, and&nbsp;
        <a className='tailwind highlight grow' href='https://tailwindcss.com/'>
          Tailwind CSS
        </a>
        &nbsp; and love working with&nbsp;
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
          , an online 501(c)(3) nonprofit platform that allows donors to purchase meals
          for individuals financially impacted by COVID-19 from our partnered restaurants.
        </p>
        <p className='sentence sentence-hover-glow'>
          Since our launch May 2020, we fundraised&nbsp;
          <span className='openmeal highlight grow'>{totalUSDRaised}</span>
          &nbsp;USD with&nbsp;
          <span className='openmeal highlight grow'>16 </span>
          &nbsp;partnered restaurants and helped individuals claim&nbsp;
          <span className='openmeal highlight grow'>{totalMealsClaimed}</span>
          &nbsp;meals as of <span className='openmeal highlight grow'>{
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
        <span className='coding highlight grow'>Coding</span>, you can find
        me&nbsp;
        <span className='powerlifting highlight grow'>Powerlifting</span>
        &nbsp;at the gym,&nbsp;
        <span className='running highlight grow'>Running</span>
        &nbsp;through the city, or taking cityscape&nbsp;
        <span className='photos highlight grow'>Photos</span>
        &nbsp;around the world!
      </p>
    );
  }

  return (
    <section>
      <SectionHeading headingTag={'h2'} headingString={'About Me'} />
      {renderIntro()}
      {renderLookingFor()}
      {renderCurrentlyDoing()}
      {renderInterests()}
    </section>
  );
}
