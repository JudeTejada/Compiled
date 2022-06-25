import Image from 'next/image';
import { useRouter } from 'next/router';
import cls from 'classnames';
import { useRecoilValue } from 'recoil';

import Avatar from '../../public/images/avatar.png';

import { NavLink } from '@/components/index';

import { pages } from '@/constants/routes';
import { menuState } from '@/recoil/atom';

export const Sidebar: React.FC = () => {
  const isMenuOpen: boolean = useRecoilValue(menuState);

  const router = useRouter();

  const { page: currentPage } = router.query;

  return (
    <aside
      className={cls(
        'bg-secondaryDark max-h-screen py-6 transition-width duration-200 ease-in-out fixed h-screen  items-start justify-between flex-col hidden md:flex focus:ring focus:ring-purpleLight overflow-y-scroll',
        isMenuOpen ? 'w-0' : 'w-[18%]'
      )}
    >
      <ul className="grid w-full gap-y-2">
        <NavLink href="/" isActive={router.asPath === '/'}>
          All
        </NavLink>
        {pages.map((page) => (
          <NavLink key={page} href={`/${page}`} isActive={page === currentPage}>
            {page}
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center px-12 mt-4 gap-x-4">
        <Image
          src={Avatar}
          alt="Avatar of me"
          width="35px"
          height="35px"
          objectFit="cover"
        />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://judetejada.vercel.app/"
          className="cursor-pointer text-secondaryLight hover:underline"
        >
          Made by Jude
        </a>
      </div>
    </aside>
  );
};
