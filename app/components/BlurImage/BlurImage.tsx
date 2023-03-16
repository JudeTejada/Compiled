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
            ? 'scale-[1.02] blur-lg grayscale'
            : 'scale-100 blur-0 grayscale-0"'
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
