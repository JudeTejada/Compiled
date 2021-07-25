import Image from 'next/image';
import NextLink from 'next/link';

import Avatar from '../../public/images/avatar.png';

import { useMenuAtom } from '@/hooks/useMenuAtom';

import { pages } from '@/lib/util';

export const Sidebar: React.FC = () => {
  const { getMenu } = useMenuAtom();

  return (
    <aside
      className={`bg-secondaryDark  ${
        getMenu ? `w-0` : `w-[18%]`
      } overflow-y-auto  max-h-screen py-6 transition-width duration-200 ease-in-out fixed h-screen  items-start justify-between flex-col hidden md:flex`}
    >
      <ul className='grid gap-y-2'>
        <li className='py-3 hover:bg-tertiaryDark'>
          <NextLink href='/' passHref>
            <a className='w-full px-12 text-base'>All</a>
          </NextLink>
        </li>
        {pages.map(page => (
          <li className='py-3 hover:bg-tertiaryDark' key={page}>
            <NextLink href={`/${page}`} passHref>
              <a className='w-full px-12 text-base'>{page}</a>
            </NextLink>
          </li>
        ))}
      </ul>

      <div className='flex items-center px-12 mt-4 gap-x-4'>
        <Image
          src={Avatar}
          alt='Avatar of me'
          width='35px'
          height='35px'
          objectFit='cover'
        />
        <h3 className='cursor-pointer text-secondaryLight hover:underline'>
          Made by Jude
        </h3>
      </div>
    </aside>
  );
};
