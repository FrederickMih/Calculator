import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calulate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const calDataObj = calculate(this.state, btnName);
    this.setState(calDataObj);
  }

  render() {
    const { total, next } = this.state;
    let currentResult = total;
    if (next) {
      currentResult = next;
    }
    if (currentResult === null) {
      currentResult = '0';
    }

    return (
      <div>
        <Display result={currentResult.toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
