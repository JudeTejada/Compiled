import { ChangeEvent, useState } from 'react';

import { Header } from '@/components/header';
import { SearchBar } from '@/components/searchBar';

export const Main: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setKeyword(e.target.value);
  return (
    <section className='w-full px-16 py-6'>
      <Header />
      <SearchBar value={keyword} onChange={handleOnChange} />
    </section>
  );
};

export default Main;
