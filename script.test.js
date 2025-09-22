import { capitalize, reverse } from "./script";

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
  it.skip("add 2 and 3 to be 5", () => {
    expect(add(2, 3)).toBe(5);
  });
  it.skip("subtract 3 and 2 to be 1", () => {
    expect(subtract(3, 2)).toBe(1);
  });
  it.skip("multiply 2 and 3 to be 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  it.skip("divide 6 and 3 to be 2", () => {
    expect(divide(6, 3)).toBe(2);
  });
});

describe("Caesar cipher", () => {
  it.skip("'xyz' 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it.skip("'HeLLo' 3", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  it.skip("'Hello World!' 3", () => {
    expect(1).toBe(1);
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
