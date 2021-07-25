import { Column } from '@/lib/types';
export const pages = [
  'React',
  'UI & UX',
  'Icons',
  'Fonts',
  'Illustrations',
  'Color Palette',
  'Accessibility',
  'Mockups',
  'Stock Photos'
];

interface Props {
  list: Column[];
}

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
