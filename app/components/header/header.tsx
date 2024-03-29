'use-client';
import { Bars3Icon } from '@heroicons/react/24/outline';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { pages } from '@/constants/routes';

import { useMenuAtom } from '@/hooks/index';
import { decodeParam } from '@/lib/util';
import { ButtonLink, NavLink } from 'app/components/index';
import { useMediaQuery } from 'react-responsive';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const currentPage = decodeParam(pathname!);

  const { toggleMenu, isMenuOpen } = useMenuAtom();

  const isMobile = useMediaQuery({
    query: '(max-width: 500px)'
  });


  const isNavOpen = isMenuOpen ? `transition-opacity` : `opacity-0 invisible`;

  return (
    <>
      <header
        className={`flex justify-between ${isMobile && 'fixed inset-x-0  bg-secondaryDark z-50 px-6 top-0 py-4'
          }`}
      >
        <div className='flex items-center justify-between '>
          <Bars3Icon
            tabIndex={0}
            className='w-5 h-5 mr-6 cursor-pointer text-secondaryLight focus-visible:text-primaryLight'
            onClick={() => toggleMenu(!isMenuOpen)}
          />
          <h1 className='text-lg font-semibold cursor-pointer'>
            <NextLink passHref href='/' legacyBehavior>
              Compiled
            </NextLink>
          </h1>
        </div>
        <div>
          <ButtonLink href='/submit' type='primary'>
            Submit a resource
          </ButtonLink>
        </div>
      </header>
      <nav
        className={`fixed left-0 z-50 w-full bg-secondaryDark top-20 block md:hidden ${isNavOpen} overflow-y-auto  `}
        style={{ height: 'calc(100vh - 48px' }}
      >
        <ul className='grid w-full gap-y-2'>
          <NavLink isActive={pathname === '/'} href='/'>
            All
          </NavLink>

          {pages.map(page => (
            <NavLink
              key={page}
              href={`/${page}`}
              isActive={page === currentPage}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                toggleMenu(false);
              }}
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
