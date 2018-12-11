import React, { Component } from 'react';
import ResumeHeader from './ResumeHeader';
import ResumeContent from './ResumeContent';
import { name, position } from '../data/resume.json';

const App = () => (
  <div>
    <ResumeHeader name={name} position={position} />
    <ResumeContent />
  </div>
);

export default App;
