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
      <span className='big-space'>&nbsp;</span>
      <span className='letter letter-6'>M</span>
      <span className='letter letter-7'>e</span>
    </h2>
  );

  renderIntro = () => (
    <p>
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

  renderLookingFor = () => (
    <p>
      I enjoy developing in&nbsp;
      <a className='react highlight grow' href='https://reactjs.org/'>
        React
      </a>
      &nbsp;and love working with&nbsp;
      <a className='graphql highlight grow' href='https://graphql.org/'>
        GraphQL
      </a>
      &nbsp;and&nbsp;
      <a className='python highlight grow' href='https://www.python.org/'>
        Python
      </a>
      &nbsp;. That said, I'm also flexible; I'm eager to learn new technologies
      and take on challenges outside my domain.
    </p>
  );

  renderProject = () => (
    <p>
      And in case you were wondering, I built this website using&nbsp;
      <span className='react highlight grow'>React</span>
      ,&nbsp;
      <span className='css highlight grow'>CSS</span>, and&nbsp;
      <span className='github highlight grow'>GitHub Pages</span>. You can check
      out my other projects by going to my&nbsp;
      <a
        className='github highlight grow'
        href='https://github.com/michaelihwang'
      >
        GitHub
      </a>
      .
    </p>
  );

  renderInterests = () => (
    <p>
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

  render() {
    return (
      <section>
        {this.renderHeading()}
        {this.renderIntro()}
        {this.renderLookingFor()}
        {this.renderProject()}
        {this.renderInterests()}
      </section>
    );
  }
}

export default About;
