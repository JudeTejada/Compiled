'use client'
import React, { useEffect, useRef, useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
    if (e.key === 's') {
      setHasPress(true);
    }
  };

  return (
    <div className='w-full my-12'>
      <div className='flex items-center'>
        <MagnifyingGlassIcon className='w-5 h-5 mr-6 text-secondaryLight ' />
        <input
          ref={inputRef}
          type='text'
          className='w-full font-light tracking-wide bg-transparent outline-none text-secondaryLight'
          placeholder='Search by name (Press S to focus)'
          {...inputProps}
        />
      </div>
    </div>
  );
};
