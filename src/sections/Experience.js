import React, { Component } from 'react';

import SectionHeading from '../components/SectionHeading';
import SectionBlock from '../components/SectionBlock';

class Experience extends Component {
  render() {
    return (
      <section>
        <SectionHeading headingTag={'h2'} headingString={'Work Experience'} />
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
}

export default Experience;
