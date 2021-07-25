import { useRouter } from 'next/router';

export const MainHero = () => {
  const router = useRouter();

  const { page } = router.query;
  return (
    <h1 className='my-12 text-6xl font-bold'>
      {page ? `A compiled resources on ${page}` : 'All Resources'}
    </h1>
  );
};
