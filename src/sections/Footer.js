import React from 'react';

import '../styles/footer.css';

export default function Footer() {
  function renderCopyright() {
    return <p className='copyright'>© Copyright 2020 Michael Hwang</p>;
  }

  return (
    <footer>
      <hr />
      {renderCopyright()}
    </footer>
  );
}
