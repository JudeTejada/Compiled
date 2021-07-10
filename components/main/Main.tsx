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
  return (
    <section className='w-full px-16 py-6'>
      <Header />
      <SearchBar value={keyword} onChange={handleOnChange} />

      {/*  change the grid column depending if sidenav is open or not */}
      <div className={`grid grid-cols-${getMenu ? '4' : '3'} gap-6`}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
};

export default Main;
