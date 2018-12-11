import React from 'react';

import './Skills.scss';

const Skills = ({ skills }) => (
  <div className="right">
    {skills.map(skill => {
      return <div className='skills__item'>{ skill }</div>;
    })}
  </div>
);

export default Skills;
