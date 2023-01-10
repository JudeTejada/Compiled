import { useState } from 'react';
import Image from 'next/image';

export const BlurImage = ({ alt, ...props }: { src: string; alt: string }) => {
  const [isLoading, setLoading] = useState(true);

  console.log(props.src, 'src');
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
