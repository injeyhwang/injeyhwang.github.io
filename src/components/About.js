import React, { Component } from 'react';

import '../styles/highlight.css';

class About extends Component {

  renderHeading = (title) => {
    return (
      <h2>
        {title}
      </h2>
    );
  }
  
  renderIntro = () => {
    return (
      <p>
        I'm a new&nbsp;
        <span className='major highlight'>
          Computer Science
        </span>
        &nbsp;graduate from&nbsp;
        <span className='school highlight'>
          Columbia University
        </span>
        &nbsp;looking for full-time&nbsp;
        <span className='job highlight'>
          Software Engineering
        </span>
        &nbsp;opportunities.
      </p>
    );
  }

  renderSkills = () => {
    return (
      <p>
        Currently, I'm building&nbsp;
        <a className='react highlight' href='https://reactjs.org/'>
          React
        </a>
        &nbsp;and&nbsp;
        <a className='react highlight' href='https://facebook.github.io/react-native/'>
          React Native
        </a>
        &nbsp;applications with&nbsp;
        <a className='redux highlight' href='https://redux.js.org/'>
          Redux
        </a>
        &nbsp;and&nbsp;
        <a className='node highlight' href='https://nodejs.org/'>
          Node
        </a>
        , and it's been a ton of fun!
        You can take a look at my projects by checking out my&nbsp;
        <a className='github highlight' href='https://github.com/michaelihwang'>
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
        <span className='coding highlight'>
          Coding
        </span>
        , you can find me&nbsp;
        <span className='powerlifting highlight'>
          Powerlifting
        </span>
        &nbsp;at the gym,&nbsp;
        <span className='running highlight'>
          Running
        </span>
        &nbsp;by the Hudson, or taking&nbsp;
        <span className='photos highlight'>
          Photos
        </span>
        &nbsp;in New York City!
      </p>
    );
  }

  render() {
    return (
      <section className='about'>
        {this.renderHeading('About {')}
        {this.renderIntro()}
        {this.renderSkills()}
        {this.renderClosing()}
        {this.renderHeading('}')}
      </section>
    );
  }
}

export default About;
