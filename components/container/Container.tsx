import { menuState } from '@/recoil/atom';
import { useRecoilValue } from 'recoil';

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

export const Container = ({ children }: Props) => {
  const isMenuOpen: boolean = useRecoilValue(menuState);

  return (
    <section
      className={`w-full  px-5 md:px-16 py-6 ${
        !isMenuOpen && 'md:ml-[18%]'
      } transition-spacing duration-200 ease-in-out`}
    >
      {children}
    </section>
  );
};
