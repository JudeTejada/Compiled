import { Button } from '@/components/index';

const SubmitPage = () => {
  return (
    <div className='grid h-4/5 place-items-center'>
      <form className='flex flex-col items-center w-3/5 gap-6 p-12 rounded-md bg-tertiaryDark'>
        <div className='flex flex-col items-center w-full'>
          <h1 className='my-6 text-4xl font-bold'>Wants your featured?</h1>
          <p className='text-base text-secondaryLight'>
            If you want your website to be featured or have a resource that you
            want to be featured, write down the details provide in the form and
            I'll add it up.
          </p>
        </div>
        <div className='w-full'>
          <label>Website Link</label>
          <input type='text' className='w-full' />


        </div>
        <div className='relative inline-block w-full text-gray-700'>
          <select
            className='w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline'
            placeholder='Regular input'
          >
            <option>A regular sized select input</option>
            <option>Another option</option>
            <option>And one more</option>
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

        <Button type='primary' className='w-full mt-6'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SubmitPage;
