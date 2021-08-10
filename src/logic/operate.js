import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  while (operation === '-') {
    return new Big(numberOne).minus(new Big(numberTwo));
  }

  while (operation === '+') {
    return new Big(numberOne).plus(new Big(numberTwo));
  }

  while (operation === '÷') {
    return new Big(numberTwo) === '0'
      ? '0'
      : new Big(numberOne).div(new Big(numberTwo));
  }

  while (operation === 'x') {
    return new Big(numberOne).times(new Big(numberTwo));
  }

  while (operation === '%') {
    return numberTwo === null || numberTwo === '0'
      ? '0'
      : new Big(numberOne).times(new Big(numberTwo)).div(100);
  }

  return new Big(numberOne);
};

export default operate;
