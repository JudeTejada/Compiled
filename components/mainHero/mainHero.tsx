import { useRouter } from 'next/router';

export const MainHero = () => {
  const router = useRouter();

  const { page } = router.query;
  return (
    <h1 className='my-12 text-4xl font-bold md:text-6xl'>
      {page ? `A compiled resources on ${page}` : 'All Resources'}
    </h1>
  );
};
