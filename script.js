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

export function caesarCipher(str, key) {
  const arr = str.split("").map((char) => {
    charCode = char.charCodeAt(0);
    return String.fromCharCode(processCharCode(charCode, key));
  });
  return arr.join("");
}

// ansi codes A-Z 65-90; a-z 97-122
function processCharCode(charCode, key) {
  const LENGTH_OF_ALPHABET = 26;
  // no letter
  if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97))
    return charCode;
  // uppercase
  if (charCode >= 65 && charCode <= 90) {
    let newCharCode = charCode + (key % LENGTH_OF_ALPHABET);
    return newCharCode > 90 ? newCharCode - LENGTH_OF_ALPHABET : newCharCode;
  }
  // lowercase
  if (charCode >= 97 && charCode <= 122) {
    let newCharCode = charCode + (key % LENGTH_OF_ALPHABET);
    return newCharCode > 122 ? newCharCode - LENGTH_OF_ALPHABET : newCharCode;
  }
}
