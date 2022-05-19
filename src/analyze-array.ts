function getAvergae(input: Array<number>): number {
  if (input.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const number of input) {
    sum += number;
  }
  return sum / input.length;
}

function getMin(input: Array<number>): number {
  if (input.length === 0) {
    return 0;
  }
  let min = input[0];
  for (const number of input) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}

function getMax(input: Array<number>): number {
  if (input.length === 0) {
    return 0;
  }
  let max = input[0];
  for (const number of input) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

function getLength(input: Array<number>): number {
  let length = 0;
  input.forEach(() => length++);
  return length;
}

export const arrayAnalyzer = {
  average: getAvergae,
  min: getMin,
  max: getMax,
  length: getLength,
};
