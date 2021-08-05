import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calulate';

const App = () => {
  const initCal = {
    total: '0',
    next: '0',
    operation: '',
  };

    <div>
      <Display result="calculations" />
      <ButtonPanel />
    </div>;
};

export default App;
