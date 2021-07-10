import Image from 'next/image';

export const ArticleCard: React.FC = () => {
  const renderContent = (content: string): string => {
    // means content is over three lines
    if (content.length > 92) {
      const newContent = content.slice(0, 92).concat('...');

      return newContent;
    }


    return content;
  };

  renderContent(
    ' '
  );
  return (
    <div className='p-6 rounded-md group hover:bg-secondaryDark'>
      <div className='relative flex-shrink-0 pb-52'>
        <Image
          src='/tetrisly.png'
          alt='picture'
          layout='fill'
          className='object-cover rounded-md'
        />
      </div>
      <div className='flex flex-col gap-4 mt-6'>
        <h2 className='text-lg'>Clocksy App</h2>
        <p className='leading-relaxed text-secondaryLight'>
          {renderContent(
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quisquam officia, suscipit.`
          )}
        </p>
      </div>
    </div>
  );
};
