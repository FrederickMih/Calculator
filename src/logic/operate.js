import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  while (operation === '-') {
    return new Big(numberOne).minus(new Big(numberTwo));
  }

  while (operation === '+') {
    return new Big(numberOne).plus(new Big(numberTwo));
  }

  while (operation === '/') {
    return new Big(numberOne).div(new Big(numberTwo));
  }

  while (operation === 'X') {
    return new Big(numberOne).times(new Big(numberTwo));
  }

  return (new Big(numberOne).times(new Big(numberTwo))).div(100);
};

export default operate;
