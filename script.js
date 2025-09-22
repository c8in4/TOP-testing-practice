export function capitalize(str) {
  const arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

export function reverse(str) {
  const arr = str.split("");
  return arr.reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
