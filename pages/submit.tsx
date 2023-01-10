import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

import { Button } from '@/components/index';
import { getDatabase } from '@/lib/Notion';
import { Page } from '@/lib/types';

export const isUrl = (string: string): boolean => {
  try {
    return Boolean(new URL(string));
  } catch (e) {
    return false;
  }
};

enum Categories {
  Icons = 'Icons',
  Fonts = 'Fonts',
  Illustrations = 'Illustrations',
  ColorPalette = 'Color Palette',
  Accessibility = 'Accessibility',
  Mockups = 'Mockups',
  StockPhotos = 'Stock Photos',
  DesignSystem = 'Design System',
  CSSLibraries = 'CSS Libraries',
  Performance = 'Performance',
  React = 'React',
  CSSTools = 'CSS Tools'
}

interface IFormInput {
  link: string;
  category: Categories;
}

const SubmitPage = ({ pages }: { pages: Page[] }) => {
  const [submitEntry, setSubmitEntry] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    try {
      setSubmitEntry({ ...submitEntry, isLoading: true, isError: false });

      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error();

      setSubmitEntry({ ...submitEntry, isLoading: false, isSuccess: true });
    } catch (error) {
      setSubmitEntry({
        ...submitEntry,
        isLoading: false,
        isSuccess: false,
        isError: true
      });
    }
  };

  const { isLoading, isError, isSuccess } = submitEntry;

  return (
    <div className='grid h-full place-items-center'>
      <form
        className='flex flex-col items-center gap-8 p-6 rounded-md md:p-12 md:w-3/5 bg-tertiaryDark '
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col items-center w-full'>
          <h1 className='my-6 text-2xl font-bold md:text-4xl'>
            Wants yours featured?{' '}
          </h1>
          <p className='text-base text-secondaryLight'>
            Have a resource, guide that you want to feature or add up, add the
            details below in the input and I'll make sure to add it up right
            away.
          </p>
        </div>
        <div className='w-full'>
          <label className='block mb-4 text-base'>Link</label>
          <input
            {...register('link', {
              required: true,
              minLength: 1,
              validate: value => isUrl(value)
            })}
            type='text'
            className='w-full p-2 px-4 bg-transparent border rounded-md border-borderLight text-secondaryLight focus-within:border-secondaryLight'
          />
          {errors?.link?.type === 'required' && (
            <span className='block mt-3 text-red-500'>Url is required</span>
          )}

          {errors?.link?.type === 'validate' && (
            <span className='block mt-3 text-red-500'>Enter a valid url</span>
          )}
        </div>
        <div className='w-full'>
          <label className='block mb-4 text-base'>Category</label>
          <div className='relative inline-block w-full '>
            <select
              {...register('category')}
              className='w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-md appearance-none bg-tertiaryDark border-borderLight text-secondaryLight focus:shadow-outline focus-within:border-secondaryLight'
              placeholder='Category'
            >
              {pages.map(page => {
                const text = page.properties.Page.title[0].plain_text;
                return <option key={text}>{text}</option>;
              })}
              <option>Other</option>
            </select>
            <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
              <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                <path
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                  fillRule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <Button type='primary' className='w-full mt-6' disabled={isLoading}>
          {isLoading ? (
            <svg
              className='w-5 h-5 m-auto text-center text-white animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          ) : isSuccess ? (
            'Entry successfully sent 🎉'
          ) : (
            'Submit'
          )}
        </Button>
        {isError && (
          <span className='block text-red-500'>
            Sorry something went wrong, please try again
          </span>
        )}
      </form>
    </div>
  );
};

export default SubmitPage;

export const getStaticProps = async () => {
  const pages: Page[] = await getDatabase(process.env.NOTION_DATABASE_PAGES!);

  return {
    props: {
      pages
    },

    revalidate: 60
  };
};
