import { useStore } from '@/store';

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

export const Container = ({ children }: Props) => {
  const isMenuOpen = useStore((state) => state.isMenuOpen);

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
