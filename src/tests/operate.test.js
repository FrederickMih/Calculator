import operate from '../logic/operate';

describe('aritmetic operations', () => {
  it('should sum', () => {
    expect(JSON.stringify(operate(5, 6, '+'))).toStrictEqual(
      JSON.stringify('11'),
    );
  });
  it('calculate incorrect sum', () => {
    expect(JSON.stringify(operate(3, 4, '+'))).not.toEqual(JSON.stringify('4'));
  });
  it('should subtract', () => {
    expect(JSON.stringify(operate(10, -5, '-'))).toEqual(JSON.stringify('15'));
  });
  it('compute false subtraction', () => {
    expect(JSON.stringify(operate(4, 2, '-'))).not.toEqual(
      JSON.stringify('-5'),
    );
  });
  it('should multiply', () => {
    expect(JSON.stringify(operate(2, 3, 'x'))).toEqual(JSON.stringify('6'));
  });
  it('should compute false mulplication', () => {
    expect(JSON.stringify(operate(2, 3, 'x'))).not.toEqual(JSON.stringify('5'));
  });
  it('should compute division', () => {
    expect(JSON.stringify(operate(20, 2, '÷'))).toEqual(JSON.stringify('10'));
  });
  it('should compute false division', () => {
    expect(JSON.stringify(operate(20, 2, '÷'))).not.toEqual(
      JSON.stringify('5'),
    );
  });
});
