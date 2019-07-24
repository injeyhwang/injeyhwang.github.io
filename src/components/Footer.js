import React, { Component } from 'react';

import '../styles/components/FooterStyles.css';

class Footer extends Component {

  renderSummary = () => {
    return (
      <p>
        I built this website using&nbsp;
        <span className='react'>
          Create React App
        </span>
        ,&nbsp;
        <span className='css'>
          CSS
        </span>
        , and&nbsp;
        <span className='github'>
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
