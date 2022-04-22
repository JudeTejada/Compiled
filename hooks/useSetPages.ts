import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { pagesState } from '@/recoil/atom';

import { Page } from '@/lib/types';

export const useSetPages = (pages: Page[]) => {
  const setPages = useSetRecoilState(pagesState);

  const setPageesRef = useRef(setPages);

  const handleSetPages = (pages: Page[]) => {
    setPageesRef.current(pages);
  };

  return { handleSetPages };
};
