import React, { Component } from 'react';

import '../styles/highlight.css';

class About extends Component {

  renderHeading = () => (
    <h2>
      <span className='letter letter-1'>A</span>
      <span className='letter letter-2'>b</span>
      <span className='letter letter-3'>o</span>
      <span className='letter letter-4'>u</span>
      <span className='letter letter-5'>t</span>
    </h2>
  );

  renderIntro = () => (
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
      &nbsp;opportunities. Specifically, I'd love to work as an&nbsp;
      <span className='apple highlight grow'>
        iOS Engineer
      </span>
      ,&nbsp;
      <span className='full-stack-engineer highlight grow'>
        Full-Stack Engineer
      </span>
      ,&nbsp;or&nbsp;
      <span className='frontend-engineer highlight grow'>
        Frontend Engineer
      </span>
      .
    </p>
  );

  renderCurrent = () => (
    <p>
      Currently, I'm using&nbsp;
      <a
        className='swift highlight grow'
        href='https://swift.org/'
      >
        Swift
      </a>
      &nbsp; to build&nbsp;
      <a
        className='apple highlight grow'
        href='https://www.apple.com/ios/'
      >
        iOS
      </a>
      &nbsp;apps. Coming from a &nbsp;
      <a
        className='react highlight grow'
        href='https://facebook.github.io/react-native/'
      >
        React Native
      </a>
      &nbsp;background, It's been a ton of fun learning native development!
    </p>
  );

  renderProject = () => (
    <p>
      And in case you were wondering, I built this website using&nbsp;
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

  renderClosing = () => (
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
      &nbsp;through the city, or taking cityscape&nbsp;
      <span className='photos highlight grow'>
        Photos
      </span>
      &nbsp;around the world!
    </p>
  );

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
