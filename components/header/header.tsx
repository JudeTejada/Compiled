import NextLink from 'next/link';
import { useRouter } from 'next/router';
import shallow from 'zustand/shallow';
import { useMediaQuery } from 'react-responsive';

import { pages } from '@/constants/routes';

import { useIsMobile } from '@/hooks/index';
import { ButtonLink, NavLink, Icon } from '@/components';
import { useStore } from '@/store';

export const Header = () => {
  const router = useRouter();
  const { page: currentPage } = router.query;

  const [isMenuOpen, setIsMenuOpen] = useStore(
    (state) => [state.isMenuOpen, state.toggleMenu],
    shallow
  );

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  const isNavOpenStyles = isMenuOpen
    ? `transition-opacity`
    : `opacity-0 invisible`;

  return (
    <>
      <header className="relative flex justify-between">
        <div className="flex items-center justify-between ">
          <Icon
            role="menu"
            icon="menu"
            isClickable
            className="mr-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <NextLink passHref href="/">
            <h1 className="text-lg font-semibold cursor-pointer">Compiled</h1>
          </NextLink>
        </div>
        <ButtonLink href="/submit" type="primary">
          Submit a resource
        </ButtonLink>
      </header>
      <nav
        className={`fixed left-0 z-50 w-full bg-secondaryDark top-20 block md:hidden ${isNavOpenStyles} overflow-y-auto  max-h-screen focus:ring focus:ring-purpleLight `}
      >
        <ul className="grid w-full gap-y-2">
          <NavLink isActive={router.asPath === '/'} href="/">
            All
          </NavLink>
          {pages.map((page) => (
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
