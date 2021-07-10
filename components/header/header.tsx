import { useMenuAtom } from '@/hooks/useMenuAtom';
import { MenuIcon } from '@heroicons/react/outline';

export const Header: React.FC = () => {
  const { setMenu, getMenu } = useMenuAtom();

  return (
    <div className='flex justify-between '>
      <div className='flex items-center justify-between '>
        <MenuIcon
          className='w-5 h-5 mr-6 text-secondaryLight'
          onClick={() => setMenu(!getMenu)}
        />
        <h1 className='text-lg font-semibold'>Compiled</h1>
      </div>
      <div>right content</div>
    </div>
  );
};

export default Header;
