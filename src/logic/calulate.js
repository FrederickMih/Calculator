import operate from './operate';

const calculate = (calDataObj, btnName) => {
  // btnName is the clickable button
  let { total, next, operation } = calDataObj;
  const calNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const mathOperator = ['x', '+', '÷', '-', '='];
  if (btnName === '+/-') {
    if (next && next !== 0) {
      next *= -1;
      next = next.toString();
    } else {
      total *= -1;
      total = total.toString();
    }
  }

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (calNumbers.includes(btnName)) {
    if (!total) {
      total = btnName;
    } else if (total && !operation) {
      total += btnName;
    } else if (!next) {
      next = btnName;
    } else if (operation && total) {
      next += btnName;
    }
  }

  if (btnName === '%' && (next === null || next === '0')) {
    total /= 100;
  }
  if (mathOperator.includes(btnName)) {
    if (!total) {
      total = 0;
    }
    if (total && !next) {
      operation = btnName;
    }
    if (total && next && operation) {
      total = operate(total, next, operation).toString();
      next = null;
      operation = btnName;
    }
  }

  if (btnName === '.') {
    if (next && !next.includes('.')) {
      next += '.';
    } else if (total && !total.includes('.')) {
      total += '.';
    }
  }

  if (btnName === '=') {
    if (!total && !next) {
      total = '0';
    }
    if (total && next && operation) {
      total = operate(total, next, operation).toString();
      next = null;
    }
  }

  return { total, next, operation };
};

export default calculate;
