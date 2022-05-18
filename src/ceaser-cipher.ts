const LOWERCASE_A = "a".charCodeAt(0);
const LOWERCASE_Z = "z".charCodeAt(0);
const UPPERCASE_A = "A".charCodeAt(0);
const UPPERCASE_Z = "Z".charCodeAt(0);

function isUppercaseLetter(charCode: number) {
  return charCode >= UPPERCASE_A && charCode <= UPPERCASE_Z;
}

function isLowercaseLetter(charCode: number) {
  return charCode >= LOWERCASE_A && charCode <= LOWERCASE_Z;
}

export function ceaserCipher(plaintext: string, shift: number) {
  shift = shift % 26;
  let result = "";
  for (let i = 0; i < plaintext.length; i++) {
    let charCode = plaintext.charCodeAt(i);
    const isUpperCaseLetter = isUppercaseLetter(charCode);
    const isLowerCaseLetter = isLowercaseLetter(charCode);
    const isLetter = isLowerCaseLetter || isUpperCaseLetter;

    if (!isLetter) {
      result += String.fromCharCode(charCode);
      continue;
    }

    if (
      (isUpperCaseLetter && charCode + shift > UPPERCASE_Z) ||
      (isLowerCaseLetter && charCode + shift > LOWERCASE_Z)
    ) {
      charCode = charCode + shift - 26;
    } else if (
      (isUpperCaseLetter && charCode + shift < UPPERCASE_A) ||
      (isLowerCaseLetter && charCode + shift < LOWERCASE_A)
    ) {
      charCode = charCode + shift + 26;
    } else {
      charCode = charCode + shift;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}
