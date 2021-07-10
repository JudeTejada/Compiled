import { ChangeEvent, useState } from 'react';

import { useMenuAtom } from '@/hooks/useMenuAtom';

import { Header } from '@/components/header';
import { SearchBar } from '@/components/searchBar';
import { ArticleCard } from '@/components/articleCard';

export const Main: React.FC = () => {
  const { getMenu } = useMenuAtom();

  const [keyword, setKeyword] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setKeyword(e.target.value);

  {
    /*  */
  }

  /*
   * change the grid column depending if sidenav is open or not
   *
   * */

  const gridCols = getMenu ? 'grid-cols-4' : 'grid-cols-3';

  return (
    <section
      className={`w-full px-16 py-6 ${
        !getMenu && 'ml-[18%]'
      } transition-spacing duration-200`}
    >
      <Header />
      <SearchBar value={keyword} onChange={handleOnChange} />

      <div className={`grid  gap-6 ${gridCols}`}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
};

export default Main;
