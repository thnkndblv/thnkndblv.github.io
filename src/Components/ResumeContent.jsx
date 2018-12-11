import React from 'react';
import ContactMethods from './Resume/ContactMethods/ContactMethods';
import Skills from './Resume/Skills/Skills';

const ResumeContent = ({ contact, skills }) => (
  <div className="row resume--content">
    <div className="col-4">
      <ContactMethods
        phone={contact.phone}
        email={contact.email}
        address={contact.address}
        linkedin={contact.linkedin} />

      <Skills skills={skills} />
    </div>
    <div className="col-8 resume--content__right"></div>
  </div>
);

export default ResumeContent;
