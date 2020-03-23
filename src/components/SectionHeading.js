import React from 'react';

import '../styles/highlight.css';

const TOTAL_NUM_OF_COLORS = 10;   // 10 different letter colors in .css file

export default function SectionHeading({ headingTag, headingString }) {
  function renderLetters(headingString) {
    return (
      <>
        {headingString.split('').map((char, index) => (
          <>
            {char === ' ' ? (
              <span className='big-space'>&nbsp;</span>
            ) : (
              <>
                {index >= TOTAL_NUM_OF_COLORS ? (
                  <span
                    className={`letter letter-${index - TOTAL_NUM_OF_COLORS}`}
                  >
                    {char}
                  </span>
                ) : (
                  <span className={`letter letter-${index}`}>{char}</span>
                )}
              </>
            )}
          </>
        ))}
      </>
    );
  }

  return (
    <div>
      {headingTag === 'h1' ? (
        <h1>{renderLetters(headingString)}</h1>
      ) : (
        <h2>{renderLetters(headingString)}</h2>
      )}
    </div>
  );
}
