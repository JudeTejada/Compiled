import React, { useRef, useEffect, useState } from 'react';

import { SearchIcon } from '@heroicons/react/outline';

export const SearchBar = ({ ...inputProps }) => {
  const [hasPress, setHasPress] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (hasPress && inputRef.current) {
      inputRef.current.focus();
    }
  }, [hasPress]);

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === '/') {
      setHasPress(true);
    }
  };

  return (
    <div className='w-full my-12'>
      <div className='flex items-center'>
        <SearchIcon className='w-5 h-5 mr-6 text-secondaryLight' />
        <input
          ref={inputRef}
          type='text'
          className='w-full font-light tracking-wide bg-transparent outline-none text-secondaryLight'
          placeholder='Search by name (Press / to focus)'
          {...inputProps}
        />
      </div>
    </div>
  );
};
