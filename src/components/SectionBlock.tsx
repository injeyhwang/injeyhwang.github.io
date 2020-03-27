import React from 'react';

import '../styles/block.css';

type SectionBlockProps = {
  mainTitle: string;
  mainTitleLink?: string;
  supportTitle?: string;
  subTitle?: string;
  rightJustified?: string;
  bulletPoints?: string[];
};

export default function SectionBlock({
  mainTitle,
  mainTitleLink,
  supportTitle,
  subTitle,
  rightJustified,
  bulletPoints
}: SectionBlockProps) {
  function renderHeading() {
    return (
      <p className='block title-hover'>
        <span className='leftAlign'>
          <b>
            {mainTitleLink ? (
              <a className='block link' href={mainTitleLink}>
                {mainTitle}
              </a>
            ) : (
              mainTitle
            )}
          </b>
          {supportTitle}
        </span>
        <span className='rightAlign'>{rightJustified}</span>
        <br />
        <i>{subTitle}</i>
      </p>
    );
  }

  function renderDescription() {
    return (
      <ul>
        {bulletPoints ? bulletPoints.map((description, index) => (
          <li className={`block bullet-hover${index}`} key={description}>
            {description}
          </li>
        )) : null}
      </ul>
    );
  }

  return (
    <div>
      {renderHeading()}
      {renderDescription()}
    </div>
  );
}
