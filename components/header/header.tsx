import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { pages } from '@/constants/routes';

import { useIsMobile } from '@/hooks/index';
import { ButtonLink, NavLink, Icon } from '@/components/index';
import { menuState } from '@/recoil/atom';

export const Header: React.FC = () => {
  const router = useRouter();
  const { page: currentPage } = router.query;
  const toggleMenu = useSetRecoilState(menuState);
  const isMenuOpen: boolean = useRecoilValue(menuState);

  const isMobile = useIsMobile();

  const isNavOpenStyles = isMenuOpen
    ? `transition-opacity`
    : `opacity-0 invisible`;

  return (
    <>
      <header className='relative flex justify-between'>
        <div className='flex items-center justify-between '>
          <Icon
            icon='menu'
            isClickable
            className='mr-6'
            onClick={() => toggleMenu(!isMenuOpen)}
          />

          <NextLink passHref href='/'>
            <h1 className='text-lg font-semibold cursor-pointer'>Compiled</h1>
          </NextLink>
        </div>
        <ButtonLink href='/submit' type='primary'>
          Submit a resource
        </ButtonLink>
      </header>
      <nav
        className={`fixed left-0 z-50 w-full bg-secondaryDark top-20 block md:hidden ${isNavOpenStyles} overflow-y-auto  max-h-screen focus:ring focus:ring-purpleLight `}
      >
        <ul className='grid w-full gap-y-2'>
          <NavLink isActive={router.asPath === '/'} href='/'>
            All
          </NavLink>
          {pages.map(page => (
            <NavLink
              key={page}
              href={`/${page}`}
              isActive={page === currentPage}
            >
              {page}
            </NavLink>
          ))}
        </ul>
      </nav>
      <style jsx global>{`
        body {
          overflow-y: ${isMobile && isMenuOpen && 'hidden'};
        }
      `}</style>
    </>
  );
};

export default Header;
