import { useState } from 'react';
import Image from 'next/image';

export const BlurImage = ({ alt, ...props }: { src: string; alt: string }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className='relative flex-shrink-0 pb-52 '>
      <Image
        {...props}
        alt={alt}
        fill
        className={` rounded-md object-cover  ${
          isLoading ? 'scale-110 blur-xl ' : 'scale-100 blur-0'
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};
