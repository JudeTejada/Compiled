import { ChangeEvent, useState } from 'react';

import { useMenuAtom } from '@/hooks/useMenuAtom';
import { Column } from '@/lib/types';

import { ListCards, SearchBar, Header } from '@/components/index';

interface Props {
  list: Column[];
}

export const Main = ({ list }: Props) => {
  const { getMenu } = useMenuAtom();

  const [keyword, setKeyword] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setKeyword(e.target.value);

  const filteredList = list.filter(list =>
    list.properties.Name.title[0].plain_text
      .toLowerCase()
      .includes(keyword.toLowerCase())
  );

  return (
    <section
      className={`w-full px-16 py-6 ${
        !getMenu && 'ml-[18%]'
      } transition-spacing duration-200 ease-in-out`}
    >
      <Header />
      <SearchBar value={keyword} onChange={handleOnChange} />

      <ListCards list={filteredList} />
    </section>
  );
};

export default Main;
