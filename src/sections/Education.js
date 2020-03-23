import React from 'react';

import SectionHeading from '../components/SectionHeading';
import SectionBlock from '../components/SectionBlock';

export default function Education() {
  return (
    <section>
      <SectionHeading headingTag={'h2'} headingString={'Education'} />
      <SectionBlock
        mainTitle={'Columbia University'}
        supportTitle={', New York, NY'}
        subTitle={'BA in Computer Science: Minor in Economics'}
        rightJustified={'May 2019'}
      />
    </section>
  );
}
