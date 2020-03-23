import React, { Component } from 'react';

import '../styles/block.css';

class SectionBlock extends Component {
  renderHeading = (
    mainTitle,
    mainTitleLink,
    supportTitle = null,
    subTitle,
    rightJustified = null
  ) => (
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

  renderDescription = bulletPoints => (
    <ul>
      {bulletPoints.map((description, index) => (
        <li className={`block bullet-hover${index}`} key={description}>
          {description}
        </li>
      ))}
    </ul>
  );

  render() {
    const {
      mainTitle,
      mainTitleLink,
      supportTitle,
      subTitle,
      rightJustified,
      bulletPoints
    } = this.props;
    return (
      <div>
        {this.renderHeading(
          mainTitle,
          mainTitleLink,
          supportTitle,
          subTitle,
          rightJustified
        )}
        {bulletPoints ? this.renderDescription(bulletPoints) : null}
      </div>
    );
  }
}

export default SectionBlock;
