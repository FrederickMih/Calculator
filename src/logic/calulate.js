import { operation } from 'retry';
import operate from ',/operate';

function calculate(calDataObj, btnName) {
  let { total, next, operation } = calDataObj;
  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  }

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  return { total, next, operation };
}

export default calculate;
