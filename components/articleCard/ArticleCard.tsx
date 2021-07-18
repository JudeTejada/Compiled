import NextImage from 'next/image';
import NextLink from 'next/link';

import { Column } from '@/lib/types';

export const ArticleCard = ({ properties }: Column) => {
  const renderContent = (content: string): string => {
    // means content is over three lines
    if (content.length > 92) {
      const newContent = content.slice(0, 92).concat('...');

      return newContent;
    }

    return content;
  };

  const { Description, Link, Image, Name, Category } = properties;

  return (
    <a href={Link.rich_text[0].plain_text} target='_blank' rel='noreferrer'>
      <div className='p-6 rounded-md cursor-pointer group hover:bg-secondaryDark'>
        <div className='relative flex-shrink-0 pb-52'>
          <NextImage
            src={Image.rich_text[0].plain_text}
            layout='fill'
            className='object-cover rounded-md'
          />
        </div>
        <div className='flex flex-col gap-4 mt-6'>
          <h2 className='text-lg'>{Name.title[0].plain_text}</h2>
          <p className='leading-relaxed text-secondaryLight'>
            {renderContent(Description.rich_text[0].plain_text)}
          </p>
        </div>
      </div>
    </a>
  );
};
