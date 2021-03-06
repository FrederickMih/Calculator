import calculate from '../logic/calulate';

describe('Testing arithmetic operations', () => {
  it('calculate sum', () => {
    expect(
      calculate({ total: '10', next: '11', operation: '+' }, '+').total,
    ).toEqual('21');
  });

  it(' should calculate sum with a negative number', () => {
    expect(
      calculate({ total: '2', next: '-6', operation: '+' }, '+').total,
    ).toEqual('-4');
  });

  it('should calculate incorrect sum', () => {
    expect(
      calculate({ total: '100', next: '200', operation: '+' }, '+').total,
    ).not.toEqual('3');
  });

  it('should subtract next number from the total', () => {
    expect(
      calculate({ total: '5', next: '1', operation: '-' }, '-').total,
    ).toEqual('4');
  });

  it('should compute incorrect subtraction', () => {
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
  it('should test equality', () => {
    expect(
      calculate({ total: '5', next: '5', operation: '÷' }, '=').total,
    ).toEqual('1');
  });
});

describe('test other math operations', () => {
  it('(AC) sign', () => {
    expect(
      calculate({ total: '5000', next: '599', operation: '÷' }, 'AC').total,
    ).toBeFalsy();
    expect(
      calculate({ total: '797', next: '99', operation: '÷' }, 'AC').next,
    ).toBeFalsy();
  });

  it("test '+/-' operator", () => {
    expect(
      calculate({ total: '-60', next: null, operation: null }, '+/-').total,
    ).toEqual('60');
    expect(
      calculate({ total: '55', next: '33', operation: '÷' }, '+/-').next,
    ).toEqual('-33');
  });

  it('test (%) sign', () => {
    expect(
      calculate({ total: '77', next: null, operation: null }, '%').total,
    ).toEqual(0.77);
  });

  it("test '.' operator", () => {
    expect(
      calculate({ total: '5', next: '3', operation: null }, '.').total,
    ).not.toEqual('5.3');
    expect(
      calculate({ total: '55', next: '-33.', operation: '÷' }, '.').next,
    ).not.toEqual('-33..');
  });
  it("check '.' sign", () => {
    expect(
      calculate({ total: '55', next: null, operation: null }, '.').total,
    ).toEqual('55.');
    expect(
      calculate({ total: '55', next: '-33', operation: '÷' }, '.').next,
    ).toEqual('-33.');
  });
});
