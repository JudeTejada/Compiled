import React from 'react';
import NextLink from 'next/link';

import { useMenuAtom } from '@/hooks/useMenuAtom';

export const Sidebar: React.FC = () => {
  const { getMenu } = useMenuAtom();

  return (
    <aside
      className={`bg-secondaryDark  ${
        getMenu ? `w-0` : `w-[18%]`
      } overflow-y-auto  max-h-screen py-6 transition-width duration-200 ease-in-out fixed`}
    >
      <ul className='grid gap-y-2'>
        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/' passHref>
            <a className='w-full px-12 text-base'>All</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>
        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>

        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/design' passHref>
            <a className='w-full px-12 text-base'>Design</a>
          </NextLink>
        </li>
      </ul>
    </aside>
  );
};
