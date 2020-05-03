import React from 'react';

import SectionHeading from '../components/SectionHeading';
import SectionBlock from '../components/SectionBlock';

export default function ResumeView() {
  function Experience() {
    return (
      <section>
        <SectionHeading headingTag={'h2'} headingString={'Work Experience'} />
        <SectionBlock
          mainTitle={'OpenMeal.org'}
          supportTitle={', Remote'}
          subTitle={'Software Engineer'}
          rightJustified={'Apr 2020 - Present'}
          bulletPoints={[
            'One of five engineers of a nonprofit project building a marketplace that allows donors to purchase meals for individuals who are financially impacted by the COVID-19 pandemic',
            'Spearheaded the build of the frontend UI by translating Figma designs into React components and connecting data endpoints on a TypeScript/React, Python/Flask, and PostgreSQL stack',
          ]}
        />
        <SectionBlock
          mainTitle={'Wardrobe Technologies Inc'}
          supportTitle={', New York, NY'}
          subTitle={'Software Engineering Intern'}
          rightJustified={'Oct 2019 - Nov 2019'}
          bulletPoints={[
            'As the third engineer of the company, met aggressive app launch deadline by working directly with founder and designer to eliminate 30% of backlogged React Native bugs',
            'Established a first line of communication between end-users and the customer support team by building in-app messaging feature',
            'Led user research sessions identifying problems in the checkout flow, and personally implemented changes based on that feedback',
            'Revamped entire app UI to be responsive to all iOS platforms in React Native'
          ]}
        />
        <SectionBlock
          mainTitle={'Chain Intelligence LLC'}
          supportTitle={', New York, NY'}
          subTitle={'Research Analyst Intern'}
          rightJustified={'May 2018 - Aug 2018'}
          bulletPoints={[
            'Conducted and compiled research on masternode cryptocurrencies: DASH, PIVX, and ZCoin',
            'Led Sentinel.co’s copywriting team by overseeing and editing several Medium articles, including publishing 3 feature release articles',
            'Attended Consensus 2018 in New York'
          ]}
        />
      </section>
    );
  }

  function Projects() {
    return (
      <section>
        <SectionHeading headingTag={'h2'} headingString={'Selected Projects'} />
        <SectionBlock
          mainTitle={'michaelihwang.com – Personal Website'}
          mainTitleLink={'https://github.com/michaelihwang/michaelihwang.github.io'}
          bulletPoints={[
            'Created a personal website using TypeScript, React, HTML, CSS, and GitHub Pages; published a README guide on GitHub'
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
          mainTitle={'SwiftChat – iOS 13 Chat Messenger'}
          mainTitleLink={'https://github.com/michaelihwang/swift-chat'}
          bulletPoints={[
            'Designed a single-room chat app capable of communicating with multiple users simultaneously; built with Swift, Cocoapods, and Firebase'
          ]}
        />
      </section>
    );
  }

  function Education() {
    return (
      <section>
        <SectionHeading headingTag={'h2'} headingString={'Education'} />
        <SectionBlock
          mainTitle={'Columbia University'}
          mainTitleLink={'https://www.cs.columbia.edu/'}
          supportTitle={', New York, NY'}
          subTitle={'BA in Computer Science: Minor in Economics'}
          rightJustified={'May 2019'}
        />
      </section>
    );
  }

  return (
    <div>
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}
