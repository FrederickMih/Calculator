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

  it('should subtract next number from the total', () => {
    expect(
      calculate({ total: '5', next: '1', operation: '-' }, '-').total,
    ).toEqual('4');
  });

  it('should compute incorect subtraction', () => {
    expect(
      calculate({ total: '7', next: '1', operation: '-' }, '-').total,
    ).not.toEqual('3');
  });

  it('should multiply next with the total', () => {
    expect(
      calculate({ total: '10', next: '7', operation: 'x' }, 'x').total,
    ).toEqual('70');
  });

  it('should compute falsy multiplication', () => {
    expect(
      calculate({ total: '4', next: '4', operation: 'x' }, 'x').total,
    ).not.toEqual('1');
  });

  it('should compute division', () => {
    expect(
      calculate({ total: '20', next: '2', operation: '÷' }, '÷').total,
    ).toEqual('10');
  });

  it('calculates incorrect division', () => {
    expect(
      calculate({ total: '88', next: '9', operation: '÷' }, '÷').total,
    ).not.toEqual('1');
  });
});
