import operate from '../logic/operate';

describe('aritmetic operations', () => {
  it('should sum', () => {
    expect(JSON.stringify(operate(5, 6, '+'))).toStrictEqual(JSON.stringify('11'));
  });
  it('calculate falsy sum', () => {
    expect(JSON.stringify(operate(3, 4, '+'))).not.toEqual(JSON.stringify('4'));
  });
});
