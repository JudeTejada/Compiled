import { Column, Page } from '@/lib/types';

export const filterItemsByCategory = (
  list: Column[],
  categoryName: string
): Column[] => {
  const filteredItems = list.filter(
    list =>
      list.properties.Category?.select.name.toLocaleLowerCase() ===
      categoryName.toLocaleLowerCase()
  );

  return filteredItems;
};

export const compareArraysEqual = (a: [], b: []) =>
  a.length === b.length && a.every((v, i) => v === b[i]);
