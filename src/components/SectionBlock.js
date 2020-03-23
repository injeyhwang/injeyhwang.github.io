import React from 'react';

import '../styles/block.css';

export default function SectionBlock({
  mainTitle,
  mainTitleLink,
  supportTitle,
  subTitle,
  rightJustified,
  bulletPoints
}) {
  function renderHeading(
    mainTitle,
    mainTitleLink,
    supportTitle = null,
    subTitle,
    rightJustified = null
  ) {
    return (
      <p className='block title-hover'>
        <span className='leftAlign'>
          <b>
            {mainTitleLink ? (
              <a className='block link' href={mainTitleLink}>
                {mainTitle}
              </a>
            ) : (
              <font>{mainTitle}</font>
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

  function renderDescription(bulletPoints) {
    return (
      <ul>
        {bulletPoints.map((description, index) => (
          <li className={`block bullet-hover${index}`} key={description}>
            {description}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      {renderHeading(
        mainTitle,
        mainTitleLink,
        supportTitle,
        subTitle,
        rightJustified
      )}
      {bulletPoints ? renderDescription(bulletPoints) : null}
    </div>
  );
}
