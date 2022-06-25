import React, { useRef, useEffect } from 'react';

import { SearchIcon } from '@heroicons/react/outline';

export const SearchBar = (
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('keypress', handleKeyDown);

    return () => {
      document.removeEventListener('keypress', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent): void => {
    e.preventDefault();
    if (e.key === '/' && inputRef.current) inputRef.current.focus();
  };

  return (
    <div className='w-full my-12'>
      <div className='flex items-center'>
        <SearchIcon className='w-5 h-5 mr-6 text-secondaryLight' />
        <input
          ref={inputRef}
          type='text'
          className='w-full font-light tracking-wide bg-transparent outline-none text-secondaryLight focus:ring focus:ring-purpleLight'
          placeholder='Search by name (Press / to focus)'
          {...inputProps}
        />
      </div>
    </div>
  );
};
