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
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};
