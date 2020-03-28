import React from 'react';

import '../styles/highlight.css';

const TOTAL_NUM_OF_COLORS = 10;   // 10 different letter colors in .css file

type SectionHeadingProps = {
  headingTag: string;
  headingString: string;
};

export default function SectionHeading({ headingTag, headingString }: SectionHeadingProps) {
  function renderLetters() {
    return (
      <span>
        {headingString.split('').map((char: string, index: number) => (
          <span key={index}>
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
          </span>
        ))}
      </span>
    );
  }

  return (
    <div>
      {headingTag === 'h1' ? (
        <h1>{renderLetters()}</h1>
      ) : (
        <h2>{renderLetters()}</h2>
      )}
    </div>
  );
}
