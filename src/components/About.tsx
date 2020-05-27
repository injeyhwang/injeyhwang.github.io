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
        Hello! I'm a recent&nbsp;
        <span className='major highlight grow'>Computer Science</span>
        &nbsp;graduate from&nbsp;
        <span className='school highlight grow'>Columbia University</span>
        &nbsp;looking for full-time&nbsp;
        <span className='career highlight grow'>Software Engineering</span>
        &nbsp;opportunities. Specifically, I'd love to work as a&nbsp;
        <span className='full-stack-engineer highlight grow'>
          Full-Stack Engineer
        </span>
        &nbsp;or&nbsp;
        <span className='frontend-engineer highlight grow'>
          Frontend Engineer
        </span>
        .
      </p>
    );
  }

  function renderLookingFor() {
    return (
      <p className='sentence sentence-hover-glow'>
        I enjoy developing in&nbsp;
        <a className='react highlight grow' href='https://reactjs.org/'>
          React
        </a>
        &nbsp;with&nbsp;
        <span className='typescript highlight grow'>TypeScript</span>
        &nbsp;and love working with&nbsp;
        <a className='graphql highlight grow' href='https://graphql.org/'>
          GraphQL
        </a>
        &nbsp;and&nbsp;
        <a className='python highlight grow' href='https://www.python.org/'>
          Python
        </a>
        &nbsp;. That said, I'm also flexible; I'm eager to learn new
        technologies and take on challenges outside my domain.
      </p>
    );
  }

  function renderCurrentlyDoing() {
    return (
      <>
        <p className='sentence sentence-hover-glow'>
          Currently, I'm one of five founding engineers of a nonprofit project:&nbsp;
          <a className='openmeal highlight grow' href='https://www.openmeal.org/'>
            OpenMeal.org
          </a>
          . We built a platform that allow donors to purchase meals from local&nbsp;
          (NYC/SF) restaurants for individuals who are financially&nbsp;
          impacted by the COVID-19 pandemic.
        </p>
        <p className='sentence sentence-hover-glow'>
          We raised&nbsp;
          <span className='openmeal highlight grow'>{totalUSDRaised}</span>&nbsp;
          USD with&nbsp;
          <span className='openmeal highlight grow'>{totalMealsClaimed}</span>&nbsp;
          meals claimed as of <span className='openmeal highlight grow'>{
            new Date().toLocaleString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })
          }</span>. Please head on over if you haven't!
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
