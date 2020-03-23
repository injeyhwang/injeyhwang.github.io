import React, { Component } from 'react';

import '../styles/highlight.css';

class SectionHeading extends Component {
  renderLetters = headingString => (
    <>
      {headingString.split('').map((char, index) => (
        <>
          {char === ' ' ? (
            <span className='big-space'>&nbsp;</span>
          ) : (
            <>
              {index > 9 ? (
                <span className={`letter letter-${index - 10}`}>{char}</span>
              ) : (
                <span className={`letter letter-${index}`}>{char}</span>
              )}
            </>
          )}
        </>
      ))}
    </>
  );

  render() {
    const { headingTag, headingString } = this.props;
    return (
      <div>
        {headingTag === 'h1' ? (
          <h1>{this.renderLetters(headingString)}</h1>
        ) : (
          <h2>{this.renderLetters(headingString)}</h2>
        )}
      </div>
    );
  }
}

export default SectionHeading;
