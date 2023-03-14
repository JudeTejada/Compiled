'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Avatar from '../../../public/images/avatar.png';

import { NavLink } from 'app/components/index';

import { useMenuAtom } from '@/hooks/useMenuAtom';

import { pages } from '@/constants/routes';

export const Sidebar: React.FC = () => {
  const { isMenuOpen } = useMenuAtom();

  const pathname = usePathname();

  return (
    <aside
      hidden={!isMenuOpen}
      className={`bg-secondaryDark   ${
        isMenuOpen ? `w-0` : `w-[18%]`
      } overflow-y-auto  max-h-screen py-6 transition-width duration-200 ease-in-out fixed h-screen  items-start justify-between flex-col hidden md:flex `}
      style={{
        zIndex: 10
      }}
    >
      <ul className='grid w-full gap-y-2'>
        <NavLink href='/' isActive={pathname === '/'}>
          All
        </NavLink>

        {pages.map(page => (
          <NavLink key={page} href={`/${page}`} isActive={page === pathname}>
            {page}
          </NavLink>
        ))}
      </ul>

      <div className='flex items-center justify-center flex-col md:flex-row  md:lg-6 lg:px-12   mt-4 gap-x-4'>
        <Image
          src={Avatar}
          alt='Avatar of me'
          width={35}
          height={35}
          style={{
            objectFit: 'cover'
          }}
        />
        <a
          rel='noreferrer'
          target='_blank'
          href='https://judetejada.vercel.app/'
          className='cursor-pointer text-secondaryLight hover:underline'
        >
          Made by Jude
        </a>
      </div>
    </aside>
  );
};
