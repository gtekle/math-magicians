import calculate from '../logic/calculate';

describe('unit test calculate function', () => {
  const obj = {
    total: '10',
    next: '4',
    operation: '+',
  };

  test('test button AC', () => {
    expect(calculate(obj, 'AC').total).toBe(null);
  });

  test('test button 0 and next 0', () => {
    obj.total = '100';
    obj.next = '0';
    expect(calculate(obj, '0')).toStrictEqual({});
  });

  test('test button 0 and next is non-zero number', () => {
    obj.total = '100';
    obj.next = '5';
    expect(calculate(obj, '0').next).toBe('50');
  });

  test('test where button->number, operation->not null and next-> null', () => {
    obj.total = '100';
    obj.next = null;
    expect(calculate(obj, '6').next).toBe('6');
  });

  test('test where button->number, operation-> null and next-> not null', () => {
    obj.total = '100';
    obj.next = '6';
    obj.operation = null;
    expect(calculate(obj, '5').next).toBe('65');
    expect(calculate(obj, '5').total).toBe(null);
  });

  test('test where button->dotand next-> includes dot', () => {
    obj.total = '100';
    obj.next = '0.6';
    obj.operation = null;
    expect(calculate(obj, '.').next).toBe('0.6');
  });

  test('test where button->dotand next-> does not include dot', () => {
    obj.total = '100';
    obj.next = '6';
    obj.operation = null;
    expect(calculate(obj, '.').next).toBe('6.');
  });

  test('test where button->dot and operation not null', () => {
    obj.total = '100';
    obj.next = null;
    obj.operation = '+';
    expect(calculate(obj, '.').next).toBe('0.');
  });

  test('test where button->dot, total includes dot and operation & next are null', () => {
    obj.total = '100.5';
    obj.next = null;
    obj.operation = null;
    expect(calculate(obj, '.')).toStrictEqual({});
  });

  test('test where button is dot, total includes dot and operation & next are null', () => {
    obj.total = '100';
    obj.next = null;
    obj.operation = null;
    expect(calculate(obj, '.').total).toBe('100.');
  });

  test('test where button is = and operation & next are not null', () => {
    obj.total = '100';
    obj.next = '7';
    obj.operation = '-';
    expect(calculate(obj, '=').total).toBe('93');
    expect(calculate(obj, '=').next).toBe(null);
    expect(calculate(obj, '=').operation).toBe(null);
  });

  test('test where button is = and operation or next are null', () => {
    obj.total = '100';
    obj.next = '7';
    obj.operation = null;
    expect(calculate(obj, '=')).toStrictEqual({});
  });

  test('test where button is +/- and next is not null', () => {
    obj.total = '100';
    obj.next = '7';
    obj.operation = null;
    expect(calculate(obj, '+/-').next).toBe('-7');
  });

  test('test where button is +/- and next is null', () => {
    obj.total = '100';
    obj.next = null;
    obj.operation = null;
    expect(calculate(obj, '+/-').total).toBe('-100');
  });

  test('test where button is + and next & operation are null', () => {
    obj.total = '100';
    obj.next = null;
    obj.operation = '-';
    expect(calculate(obj, '+').operation).toBe('+');
    expect(calculate(obj, '+').total).toBe('100');
  });

  test('test where button is + and next & operation are null', () => {
    obj.total = '100';
    obj.next = '8';
    obj.operation = '-';
    expect(calculate(obj, '+').total).toBe('92');
    expect(calculate(obj, '+').operation).toBe('+');
    expect(calculate(obj, '+').next).toBe(null);
  });
});
