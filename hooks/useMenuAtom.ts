import { useRecoilValue, useSetRecoilState } from 'recoil';
import { menuState } from '@/recoil/atom';

export const useMenuAtom = () => {
  const toggleMenu = useSetRecoilState(menuState);
  const isMenuOpen: boolean = useRecoilValue(menuState);

  return { toggleMenu, isMenuOpen };
};
