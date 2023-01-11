import { ChangeEvent, useMemo, useState } from 'react';

import { Column } from '@/lib/types';

import { ListCards, SearchBar } from '@/components/index';

interface Props {
  list: Column[];
}

export const Main = ({ list }: Props) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setKeyword(e.target.value);

  const filteredList = useMemo(
    () =>
      list.filter(list =>
        list.properties.Name.title[0].plain_text
          .toLowerCase()
          .includes(keyword.toLowerCase())
      ),
    [keyword, list]
  );

  return (
    <>
      <SearchBar value={keyword} onChange={handleOnChange} />

      {filteredList.length > 0 && <ListCards list={filteredList} />}
      {!filteredList.length && (
        <div className='flex items-center justify-center'>
          <p className='text-sm text-secondaryLight'>
            It appears there's no resource related to "{keyword}"
          </p>
        </div>
      )}
    </>
  );
};

export default Main;
