import React, { Component } from 'react';

import SectionBlock from '../components/SectionBlock';

import '../styles/App.css';

class Education extends Component {
  renderHeading = () => (
    <h2>
      <span className='letter letter-1'>E</span>
      <span className='letter letter-2'>d</span>
      <span className='letter letter-3'>u</span>
      <span className='letter letter-4'>c</span>
      <span className='letter letter-5'>a</span>
      <span className='letter letter-6'>t</span>
      <span className='letter letter-7'>i</span>
      <span className='letter letter-8'>o</span>
      <span className='letter letter-9'>n</span>
    </h2>
  );

  render() {
    return (
      <section>
        {this.renderHeading()}
        <SectionBlock
          mainTitle={'Columbia University'}
          supportTitle={', New York, NY'}
          subTitle={'BA in Computer Science: Minor in Economics'}
          rightJustified={'May 2019'}
        />
      </section>
    );
  }
}

export default Education;
