import React from 'react';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';
import './App.css';

const Application = () => {
  return (
    <div className="Application">
      <NewGrudge />
      <Grudges />
    </div>
  );
};

export default Application;