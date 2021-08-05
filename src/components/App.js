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

    this.handleClick = () => `${this.total},${this.next}. ${this.operation}`;
  }

  handleClick(btnName) {
    const calDataObj = calculate(this.state, btnName);
    this.setState(
      calDataObj,
    );
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Display result={calculate('').total.toString()} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
