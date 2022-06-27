import { ArticleCard } from '@/components';

import { Column } from '@/lib/types';
import { useStore } from '@/store';

interface Props {
  list: Column[];
}

export const ListCards = ({ list }: Props) => {
  const isMenuOpen = useStore((state) => state.isMenuOpen);

  /*
   * change the grid column depending if sidenav is open or not
   * */
  const gridCols = isMenuOpen ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  return (
    <section
      className={`grid  gap-6 ${gridCols} md:grid-cols-2 sm:grid-cols-1`}
    >
      {list.map((item) => (
        <ArticleCard key={item.id} {...item} />
      ))}
    </section>
  );
};
