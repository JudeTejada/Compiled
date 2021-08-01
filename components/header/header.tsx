import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { pages } from '@/lib/util';

import { useMenuAtom, useIsMobile } from '@/hooks/index';
import { MenuIcon } from '@heroicons/react/outline';

import { Button, NavLink } from '@/components/index';

export const Header: React.FC = () => {
  const router = useRouter();
  const { setMenu, getMenu } = useMenuAtom();

  const isMobile = useIsMobile();

  const { page: currentPage } = router.query;

  console.log(router.pathname);

  const isNavOpen = getMenu ? `transition-opacity` : `opacity-0 invisible`;

  return (
    <>
      <header className='relative flex justify-between'>
        <div className='flex items-center justify-between '>
          <MenuIcon
            tabIndex={0}
            className='w-5 h-5 mr-6 cursor-pointer text-secondaryLight focus-visible:text-primaryLight'
            onClick={() => setMenu(!getMenu)}
          />
          <h1 className='text-lg font-semibold'>Compiled</h1>
        </div>
        <div>
          <NextLink href='/submit' passHref>
            <Button type='primary'>Submit a resource</Button>
          </NextLink>
        </div>
      </header>
      <nav
        className={`fixed left-0 z-50 w-full bg-secondaryDark top-20 block md:hidden ${isNavOpen} overflow-y-auto  max-h-screen `}
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
          overflow-y: ${isMobile && getMenu && 'hidden'};
        }
      `}</style>
    </>
  );
};

export default Header;
