import { ChangeEvent, useState } from 'react';

import { Column } from '@/lib/types';

import { ListCards, SearchBar } from '@/components/index';

interface Props {
  list: Column[];
}

export const Main = ({ list }: Props) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setKeyword(e.target.value);

  const filteredList = list.filter(list =>
    list.properties.Name.title[0].plain_text
      .toLowerCase()
      .startsWith(keyword.toLowerCase())
  );

  console.log('filteredList', filteredList);

  return (
    <>
      <SearchBar value={keyword} onChange={handleOnChange} />

      <ListCards list={filteredList} />
    </>
  );
};

export default Main;
