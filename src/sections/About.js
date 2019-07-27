import React, { Component } from 'react';

import '../styles/highlight.css';

class About extends Component {

  renderHeading = () => {
    return (
      <h2>
        <span className='letter letter-1'>A</span>
        <span className='letter letter-2'>b</span>
        <span className='letter letter-3'>o</span>
        <span className='letter letter-4'>u</span>
        <span className='letter letter-5'>t</span>
      </h2>
    );
  }

  renderIntro = () => {
    return (
      <p>
        I'm a new&nbsp;
        <span className='major highlight grow'>
          Computer Science
        </span>
        &nbsp;graduate from&nbsp;
        <span className='school highlight grow'>
          Columbia University
        </span>
        &nbsp;looking for full-time&nbsp;
        <span className='career highlight grow'>
          Software Engineering
        </span>
        &nbsp;opportunities. Specifically, I'd love to work as a&nbsp;
        <span className='full-stack-dev highlight grow'>
          Full-Stack Developer
        </span>
        &nbsp;or&nbsp;
        <span className='mobile-dev highlight grow'>
          React Native Developer
        </span>
        .
      </p>
    );
  }

  renderCurrent = () => {
    return (
      <p>
        Currently, I'm building&nbsp;
        <a
          className='react highlight grow'
          href='https://reactjs.org/'
        >
          React
        </a>
        &nbsp;and&nbsp;
        <a 
          className='react highlight grow'
          href='https://facebook.github.io/react-native/'
        >
          React Native
        </a>
        &nbsp;applications with&nbsp;
        <a
          className='redux highlight grow'
          href='https://redux.js.org/'
        >
          Redux
        </a>
        &nbsp;and&nbsp;
        <a
          className='node highlight grow'
          href='https://nodejs.org/'
        >
          Node
        </a>
        . It's been a ton of&nbsp;
        <span className='fun highlight grow'>
          Fun
        </span>
        !
      </p>
    );
  }

  renderProject = () => {
    return (
      <p>
        And in case you were wondering,
        I built this website from the grounds up using&nbsp;
        <span className='react highlight grow'>
          React
        </span>
        ,&nbsp;
        <span className='css highlight grow'>
          CSS
        </span>
        , and&nbsp;
        <span className='github highlight grow'>
          GitHub Pages
        </span>
        . You can check out my other projects by going to my&nbsp;
        <a
          className='github highlight grow'
          href='https://github.com/michaelihwang'
        >
          GitHub
        </a>
        .
      </p>
    );
  }

  renderClosing = () => {
    return (
      <p>
        When I'm not&nbsp;
        <span className='coding highlight grow'>
          Coding
        </span>
        , you can find me&nbsp;
        <span className='powerlifting highlight grow'>
          Powerlifting
        </span>
        &nbsp;at the gym,&nbsp;
        <span className='running highlight grow'>
          Running
        </span>
        &nbsp;by the Hudson, or taking&nbsp;
        <span className='photos highlight grow'>
          Photos
        </span>
        &nbsp;around New York City!
      </p>
    );
  }

  render() {
    return (
      <section className='about'>
        {this.renderHeading()}
        {this.renderIntro()}
        {this.renderCurrent()}
        {this.renderProject()}
        {this.renderClosing()}
      </section>
    );
  }
}

export default About;
