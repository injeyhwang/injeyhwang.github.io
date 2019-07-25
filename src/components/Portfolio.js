import React, { Component } from 'react';

// import '../styles/portfolio.css';

class Portfolio extends Component {

  renderHeading = () => {
    return (
      <h2>
        <span className='letter letter-1'>P</span>
        <span className='letter letter-2'>o</span>
        <span className='letter letter-3'>r</span>
        <span className='letter letter-4'>t</span>
        <span className='letter letter-5'>f</span>
        <span className='letter letter-2'>o</span>
        <span className='letter letter-6'>l</span>
        <span className='letter letter-7'>i</span>
        <span className='letter letter-2'>o</span>
      </h2>
    );
  }

  render() {
    return (
      <section className='portfolio'>
        {this.renderHeading()}
      </section>
    );
  }
}

export default Portfolio;
