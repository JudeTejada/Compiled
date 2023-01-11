import { Column } from '@/lib/types';
import { BlurImage } from '@/components/.';

interface ArticleCardProps extends Column {
  index: number;
}

export const ArticleCard = (props: ArticleCardProps) => {
  const { properties, index } = props;
  // means content is over three lines
  const renderContent = (content: string): string =>
    content.length > 92 ? content.slice(0, 92).concat('...') : content;

  const { Description, Link, Image, Name } = properties;

  return (
    <a href={Link.rich_text[0].plain_text} target='_blank' rel='noreferrer'>
      <div
        tabIndex={0}
        className={
          'p-6 rounded-md cursor-pointer group hover:bg-secondaryDark transform hover:-translate-y-1  focus-visible:-translate-y-1  duration-200 ease-in-out'
        }
      >
        <BlurImage
          alt={Name?.title[0]?.plain_text}
          src={Image?.rich_text[0]?.plain_text}
          // loads first three images
          priority={index <= 2}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
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
