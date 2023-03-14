'use client';
import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export const BlurImage = ({ alt, ...props }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='relative flex-shrink-0 pb-52 '>
      <Image
        {...props}
        alt={alt}
        fill
        className={` rounded-md object-cover
        ${
          isLoading
            ? 'grayscale blur-2xl scale-110 '
            : 'grayscale-0 blur-0 scale-100'
        }`}
        sizes='(max-width: 640px) 100vw,
    (max-width: 1280px) 50vw,
    (max-width: 1536px) 33vw,
    25vw'
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};
