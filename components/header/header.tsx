import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { MenuIcon } from '@heroicons/react/outline';

import { pagesState } from '@/recoil/atom';

import { useMenuAtom, useIsMobile } from '@/hooks/index';
import { ButtonLink, NavLink } from '@/components/index';

export const Header: React.FC = () => {
  const router = useRouter();
  const { setMenu, getMenu } = useMenuAtom();
  const getPages = useRecoilValue(pagesState);

  const isMobile = useIsMobile();

  const { page: currentPage } = router.query;

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
          <NextLink passHref href='/'>
            <h1 className='text-lg font-semibold cursor-pointer'>Compiled</h1>
          </NextLink>
        </div>
        <div>
          <ButtonLink href='/submit' type='primary'>
            Submit a resource
          </ButtonLink>
        </div>
      </header>
      <nav
        className={`fixed left-0 z-50 w-full bg-secondaryDark top-20 block md:hidden ${isNavOpen} overflow-y-auto  max-h-screen `}
      >
        <ul className='grid w-full gap-y-2'>
          <NavLink isActive={router.asPath === '/'} href='/'>
            All
          </NavLink>

          {getPages.map(page => {
            const navPage = page.properties.Page.title[0].plain_text;
            return (
              <NavLink
                key={navPage}
                href={`/${navPage}`}
                isActive={navPage === currentPage}
              >
                {navPage}
              </NavLink>
            );
          })}
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
