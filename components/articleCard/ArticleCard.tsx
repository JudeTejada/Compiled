import NextImage from 'next/image';

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

  // console.log(Name.title[0]);

  renderContent(' ');
  return (
    <div className='p-6 rounded-md cursor-pointer group hover:bg-secondaryDark'>
      <div className='relative flex-shrink-0 pb-52'>
        <NextImage
          src={Image.rich_text[0].plain_text}
          alt='picture'
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
  );
};
