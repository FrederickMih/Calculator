// import { operation } from 'retry';
// import operate from ',/operate';

const calculate = (calDataObj, btnName) => { // btnName is the clickable button
  let { total, next, operation } = calDataObj;
  const calNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  }

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (calNumbers.includes(btnName)) {
    if (total === '0') {
      total = btnName;
    } else if (!next) {
      total += btnName;
    }
    if (next) {
      next += btnName;
    }
  }

  if (btnName === '.') {
    if (next) {
      next += '.';
    } else {
      total += '.';
    }
  }

  return { total, next, operation };
};

export default calculate;
