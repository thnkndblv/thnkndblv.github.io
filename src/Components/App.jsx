import React, { Component } from 'react';
import ResumeHeader from './ResumeHeader';
import ResumeContent from './ResumeContent';
import { name, position, contact, skills } from '../data/resume.json';

const App = () => (
  <div>
    <ResumeHeader name={name} position={position} />
    <ResumeContent contact={contact} skills={skills} />
  </div>
);

export default App;
