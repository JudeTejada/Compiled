import NextLink from 'next/link';

import { useMenuAtom } from '@/hooks/useMenuAtom';

interface Props {
  className?: string;
  isActive?: boolean;
  href: string;
  onClick?: () => void;
}

export const NavLink = ({
  children,
  className = '',
  isActive,
  href,
  ...props
}: React.PropsWithChildren<Props>) => {
  const { toggleMenu } = useMenuAtom();

  return (
    <li
      onClick={() => toggleMenu(false)}
      className={`w-full px-3  lg:px-12 py-3   hover:bg-tertiaryDark ${
        isActive && 'bg-tertiaryDark'
      } ${className}`}
      {...props}
    >
      <NextLink
        href={href}
        passHref
        className='w-full text-sm cursor-pointer md:text-base'
        legacyBehavior>
        {children}
      </NextLink>
    </li>
  );
};
