import { ArticleCard } from '@/components/index';

import { useMenuAtom } from '@/hooks/useMenuAtom';

import { Column } from '@/lib/types';

interface Props {
  list: Column[];
}

export const ListCards = ({ list }: Props) => {
  const { getMenu } = useMenuAtom();


  /*
   * change the grid column depending if sidenav is open or not
   * */
  const gridCols = getMenu ? 'grid-cols-4' : 'grid-cols-3';

  return (
    <section className={`grid  gap-6 ${gridCols}`}>
      {list.map(item => (
        <ArticleCard key={item.id} {...item} />
      ))}
    </section>
  );
};
