import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calulate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state.total = 'null';
    this.state.next = 'null';
    this.state.operation = 'null';
  }

  render() {
    return (
      <div>
        <Display result={calculate('').total.toString()} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
