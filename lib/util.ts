export const compareArraysEqual = (a: [], b: []) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

export const decodeParam = (param: string) => {
  const formatted = decodeURIComponent(param).replace('/', '');

  return formatted;
  // remove "/"
};
