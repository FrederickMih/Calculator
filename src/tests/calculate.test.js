import calculate from '../logic/calulate';

describe('Testing arithmetic operations', () => {
  it('sum up', () => {
    expect(
      calculate({ total: '10', next: '11', operation: '+' }, '+').total,
    ).toEqual('21');
  });
});
