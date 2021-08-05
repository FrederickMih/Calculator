function calculate(calDataObj, btnName) {
  let { total, next } = calDataObj;
  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  }
  return { total, next };
}

export default calculate;
