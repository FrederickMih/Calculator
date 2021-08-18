import operate from '../logic/operate';

describe('aritmetic operations', () => {
  it('should sum', () => {
    expect(JSON.stringify(operate(5, 6, '+'))).toStrictEqual(JSON.stringify('11'));
  });
});
