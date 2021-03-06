import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calulate';
import '../styles/App.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (btnName) => {
    const result = calculate({ total, next, operation }, btnName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  let currentResult = total;
  if (next) {
    currentResult = next;
  }
  if (currentResult === null) {
    currentResult = '0';
  }

  return (
    <div className="app-main">
      <div className="app">
        <Display result={currentResult.toString()} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
      <h3 className="fred">Fred’s Calculator</h3>
    </div>
  );
};

export default App;
