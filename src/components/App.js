import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

function App() {
  return (
    <div>
      <p>This is my first calculator app in React</p>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
