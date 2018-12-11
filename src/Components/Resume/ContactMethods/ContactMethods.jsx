import React from 'react';

import './ContactMethods.scss'

const ContactMethods = ({ phone, email, address, linkedin }) => (
  <div>
    <div className='resume__contact'>{ phone }</div>
    <div className='resume__contact'>{ email }</div>
    <div className='resume__contact'>{ address }</div>
    <div className='resume__contact'>
      <a href={linkedin} target='_blank'>{ linkedin }</a>  </div>
  </div>
);

export default ContactMethods;
