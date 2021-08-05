import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calulate';

const App = () => {
  const initCal = {
    total: '5 + 5',
    next: '5',
    operation: '',
  };
  return (

    <div>
      <Display result={calculate(initCal, '').total.toString()} />
      <ButtonPanel />
    </div>

  );
};

export default App;
