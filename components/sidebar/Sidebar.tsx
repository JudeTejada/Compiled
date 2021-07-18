import React from 'react';
import NextLink from 'next/link';

import { useMenuAtom } from '@/hooks/useMenuAtom';

import { pages } from '@/lib/util';

export const Sidebar: React.FC = () => {
  const { getMenu } = useMenuAtom();

  return (
    <aside
      className={`bg-secondaryDark  ${
        getMenu ? `w-0` : `w-[18%]`
      } overflow-y-auto  min-h-screen py-6 transition-width duration-200 ease-in-out fixed`}
    >
      <ul className='grid gap-y-2'>
        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/' passHref>
            <a className='w-full px-12 text-base'>All</a>
          </NextLink>
        </li>

        {pages.map(page => (
          <li className='py-3 hover:bg-tertiaryDark'>
            <NextLink href={`/${page}`} passHref>
              <a className='w-full px-12 text-base'>{page}</a>
            </NextLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
