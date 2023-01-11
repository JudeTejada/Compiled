import { ArticleCard } from '@/components/index';

import { useMenuAtom } from '@/hooks/useMenuAtom';

import { Column } from '@/lib/types';

interface Props {
  list: Column[];
}

export const ListCards = ({ list }: Props) => {
  const { isMenuOpen } = useMenuAtom();

  /*
   * change the grid column depending if sidenav is open or not
   * */
  const gridCols = isMenuOpen ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  return (
    <section className={`grid  gap-6 ${gridCols}  grid-cols-1 sm:grid-cols-2 `}>
      {list.map((item, i) => (
        <ArticleCard key={item.id} {...item} index={i} />
      ))}
    </section>
  );
};
