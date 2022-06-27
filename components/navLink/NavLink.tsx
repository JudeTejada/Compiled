import NextLink from 'next/link';

import { useStore } from '@/store';

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
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <NextLink href={href} passHref>
      <li
        onClick={() => toggleMenu(false)}
        className={`w-full px-6  md:px-12 py-3     hover:bg-tertiaryDark ${
          isActive && 'bg-tertiaryDark'
        } ${className}`}
      >
        <a className="w-full text-sm cursor-pointer md:text-base focus-visible:ring-purpleLight">
          {children}
        </a>
      </li>
    </NextLink>
  );
};
