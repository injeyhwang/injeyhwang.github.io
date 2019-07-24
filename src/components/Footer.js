import React, { Component } from 'react';

import '../styles/footer.css';
import '../styles/highlight.css';

class Footer extends Component {

  renderSummary = () => {
    return (
      <p>
        I built this website using&nbsp;
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
        .
        </p>
    );
  }

  renderCopyright = () => {
    return (
      <p className='copyright'>
        © Copyright 2019 Michael Hwang
      </p>
    );
  }

  render() {
    return (
      <footer>
        <hr />
        {this.renderSummary()}
        {this.renderCopyright()}
      </footer>
    );
  }
}

export default Footer;
