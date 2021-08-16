import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calulate';

const App = () => {
  const [total, setTotal] = useState(undefined);
  const [next, setNext] = useState(undefined);
  const [operation, setOperation] = useState(undefined);

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
    <>
      <Display result={currentResult.toString()} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
