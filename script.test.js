import { capitalize, reverse, calculator, caesarCipher } from "./script";

describe("String manipulation", () => {
  it("Capitalize 'test'", () => {
    expect(capitalize("test")).toBe("Test");
  });
  it("Capitalize 'string'", () => {
    expect(capitalize("string")).toBe("String");
  });

  it("Reverse 'test'", () => {
    expect(reverse("test")).toBe("tset");
  });
  it("Reverse 'string'", () => {
    expect(reverse("string")).toBe("gnirts");
  });
});

describe("Calculator", () => {
  it("add 2 and 3 to be 5", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  it("subtract 3 and 2 to be 1", () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  it("multiply 2 and 3 to be 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  it("divide 6 and 3 to be 2", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });
});

describe("Caesar cipher", () => {
  it("'xyz' 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("'HeLLo' 3", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  it("'Hello World!' 3", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  it("Big key", () => {
    expect(caesarCipher("abcABC xyzXYZ", 45)).toBe("tuvTUV qrsQRS");
  });
});

describe("Analyze Array", () => {
  const object = [[1, 8, 3, 4, 2, 6]];
  const result = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  it.skip("[1,8,3,4,2,6]", () => {
    expect(analyzeArray(object)).toBe(result);
  });
});
