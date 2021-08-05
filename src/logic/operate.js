import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  while (operation === '-') {
    return new Big(numberOne).minus(new Big(numberTwo));
  }
};

export default operate;
