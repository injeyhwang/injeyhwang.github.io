import React, { Component } from 'react';

import '../styles/footer.css';

class Footer extends Component {

  renderCopyright = () => (
    <p className='copyright'>
      © Copyright 2020 Michael Hwang
    </p>
  );

  render() {
    return (
      <footer>
        <hr />
        {this.renderCopyright()}
      </footer>
    );
  }
}

export default Footer;
