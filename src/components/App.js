import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calulate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (btnName) => {
    setTotal(calculate(total, btnName));
    setNext(calculate(next, btnName));
    setOperation(calculate(operation, btnName));
  };

  let currentResult = total;
  if (next) {
    currentResult = next;
  }
  if (currentResult === null) {
    currentResult = '0';
  }

  return (
    <>
      <Display result={currentResult.toString()} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
