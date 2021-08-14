import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { pagesState } from '@/recoil/atom';

import {  Page } from '@/lib/types';

export const useSetPages = (pages: Page[]) => {
  const setPages = useSetRecoilState(pagesState);

  const setPageesRef = useRef(setPages);

  useEffect(() => {
    setPageesRef.current(pages);
  }, [pages]);
};
