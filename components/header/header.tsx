import NextLink from 'next/link';

import { useMenuAtom } from '@/hooks/useMenuAtom';
import { MenuIcon } from '@heroicons/react/outline';

import { Button } from '@/components/index';

export const Header: React.FC = () => {
  const { setMenu, getMenu } = useMenuAtom();

  return (
    <div className='flex justify-between '>
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
    </div>
  );
};

export default Header;
