export const compareArraysEqual = (a: [], b: []) =>
  a.length === b.length && a.every((v, i) => v === b[i]);
