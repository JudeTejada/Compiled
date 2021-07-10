import { useRecoilValue, useSetRecoilState } from 'recoil';
import { menuState } from '@/recoil/atom';

export const useMenuAtom = () => {
  const setMenu = useSetRecoilState(menuState);
  const getMenu: boolean = useRecoilValue(menuState);

  return { setMenu, getMenu };
};
