import React, { Component } from 'react';

import SectionBlock from '../components/SectionBlock';

class Projects extends Component {
  renderHeading = () => (
    <h2>
      <span className='letter letter-1'>S</span>
      <span className='letter letter-2'>e</span>
      <span className='letter letter-3'>l</span>
      <span className='letter letter-4'>e</span>
      <span className='letter letter-5'>c</span>
      <span className='letter letter-6'>t</span>
      <span className='letter letter-7'>e</span>
      <span className='letter letter-8'>d</span>
      <span className='big-space'>&nbsp;</span>
      <span className='letter letter-9'>P</span>
      <span className='letter letter-10'>r</span>
      <span className='letter letter-1'>o</span>
      <span className='letter letter-2'>j</span>
      <span className='letter letter-3'>e</span>
      <span className='letter letter-4'>c</span>
      <span className='letter letter-5'>t</span>
      <span className='letter letter-6'>s</span>
    </h2>
  );

  render() {
    return (
      <section>
        {this.renderHeading()}
        <SectionBlock
          mainTitle={'CryptoTracker – React Native Cryptocurrency Ticker'}
          mainTitleLink={'https://github.com/michaelihwang/crypto-tracker'}
          bulletPoints={[
            'Developed a cryptocurrency tracker that lists top 100 cryptocurrencies by market cap with latest prices and 24-hour percent change using React Native, Redux, and CoinMarketCap API'
          ]}
        />
        <SectionBlock
          mainTitle={'SimplyCalculator – iOS 13 Calculator'}
          mainTitleLink={'https://github.com/michaelihwang/simply-calculator'}
          bulletPoints={[
            'Developed a clone of Apple calculator app as an exercise to learn Swift'
          ]}
        />
        <SectionBlock
          mainTitle={'Todolist – iOS 13 Todo List'}
          mainTitleLink={'https://github.com/michaelihwang/todolist'}
          bulletPoints={[
            'Implemented a todo list app capable of creating multiple color-coded lists featuring searchable, checkable, swipe-to-delete-able items; built with Swift, Cocoapods, and Realm'
          ]}
        />
        <SectionBlock
          mainTitle={'SwiftChat – iOS 13 Chat Messenger'}
          mainTitleLink={'https://github.com/michaelihwang/swift-chat'}
          bulletPoints={[
            'Designed a single-room chat app capable of communicating with multiple users simultaneously; built with Swift, Cocoapods, and Firebase'
          ]}
        />
      </section>
    );
  }
}

export default Projects;
