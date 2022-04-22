import NextLink from 'next/link';

import { useMenuAtom } from '@/hooks/useMenuAtom';

interface Props {
  className?: string;
  isActive?: boolean;
  href: string;
}

export const NavLink = ({
  children,
  className = '',
  isActive,
  href
}: React.PropsWithChildren<Props>) => {
  const { setMenu } = useMenuAtom();

  return (
    <li
      onClick={() => setMenu(false)}
      className={`w-full px-6  md:px-12 py-3   hover:bg-tertiaryDark ${
        isActive && 'bg-tertiaryDark'
      } ${className}`}
    >
      <NextLink href={href} passHref>
        <a className='w-full text-sm cursor-pointer md:text-base'>{children}</a>
      </NextLink>
    </li>
  );
};
