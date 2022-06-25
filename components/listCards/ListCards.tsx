import { ArticleCard } from '@/components/index';

import { Column } from '@/lib/types';
import { menuState } from '@/recoil/atom';
import { useRecoilValue } from 'recoil';

interface Props {
  list: Column[];
}

export const ListCards = ({ list }: Props) => {
  const isMenuOpen: boolean = useRecoilValue(menuState);

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
