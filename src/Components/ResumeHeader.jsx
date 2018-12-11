import React, { Component } from 'react';

const ResumeHeader = ({ name, position }) => (
  <div className="row resume--header">
    <div className="header--name">{name}</div>
    <div className="header--position">{position}</div>
  </div>
);

export default ResumeHeader;
