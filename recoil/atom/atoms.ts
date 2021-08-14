import { atom } from 'recoil';

import { Page } from '@/lib/types';

export const menuState = atom({
  key: 'menuState',
  default: false
});

export const pagesState = atom({
  key: 'pagesState',
  default: [] as Page[]
});
