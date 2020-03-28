import React from 'react';

import SectionHeading from '../components/SectionHeading';
import SectionBlock from '../components/SectionBlock';

export default function Projects() {
  return (
    <section>
      <SectionHeading headingTag={'h2'} headingString={'Selected Projects'} />
      <SectionBlock
        mainTitle={'michaelihwang.com – Personal Website'}
        mainTitleLink={'https://github.com/michaelihwang/michaelihwang.github.io'}
        bulletPoints={[
          'Created a personal website using TypeScript, React, CSS, and GitHub Pages with a detailed README guide on GitHub'
        ]}
      />
      <SectionBlock
        mainTitle={'CryptoTracker – Cryptocurrency Ticker'}
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
