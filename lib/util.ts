import { Column } from '@/lib/types';

export const pages = ['React', 'UX'];

export const filterItemsByCategory = (list: any, categoryName: string) => {
  const filteredItems = list.filter(
    list =>
      list.properties.Category?.select.name.toLocaleLowerCase() ===
      categoryName.toLocaleLowerCase()
  );

  return filteredItems;
};
