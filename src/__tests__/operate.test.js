import operate from '../logic/operate';

describe("test operate function", () => {
  test('test 1 + 2 is 3', () => { 
    expect(operate(1, 2, "+")).toBe("3");
  })

  test('test 1 - 2 is -1', () => { 
    expect(operate(1, 2, "-")).toBe("-1");
  })

  test('test 1 x 2 is 2', () => { 
    expect(operate(1, 2, "x")).toBe("2");
  })

  test('test 4 ÷ 2 is 2', () => { 
    expect(operate(4, 2, "÷")).toBe("2");
  })

  test('test 4 ÷ 0 throws an exceptions', () => { 
    expect(operate(4, 0, "÷")).toBe("Can't divide by 0.");
  })
   
  test('test 3 % 2 is 1', () => { 
    expect(operate(1, 2, "%")).toBe("1");
  })

  test('test 4 % 0 throws an exceptions', () => { 
    expect(operate(4, 0, "%")).toBe("Can't find modulo as can't divide by 0.");
  })

  test('Invalid operator throws an exceptions', () => { 
    expect(() => operate(4, 0, "#")).toThrowError(/Unknown operation/);
  })  
});