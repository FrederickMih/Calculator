import calculate from '../logic/calulate';

describe('Testing arithmetic operations', () => {
  it('sum up', () => {
    expect(
      calculate({ total: '10', next: '11', operation: '+' }, '+').total,
    ).toEqual('21');
  });

  it('negate sum', () => {
    expect(
      calculate({ total: '2', next: '-6', operation: '+' }, '+').total,
    ).toEqual('-4');
  });

  it('falsy sum', () => {
    expect(
      calculate({ total: '100', next: '200', operation: '+' }, '+').total,
    ).not.toEqual('3');
  });
});
