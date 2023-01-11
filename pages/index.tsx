import { Main, MainHero } from '@/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';
import { NextSeo } from 'next-seo';
import { useMediaQuery } from 'react-responsive';

interface Props {
  resources: Column[];
}

export default function Home({ resources }: Props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)'
  });

  return (
    <>
      <NextSeo
        title='Compiled'
        description='A compiled of all resources for web developers'
      />
      

      <MainHero
        title='All Resources'
        description='A compiled of all resources for web developers'
      />
      <Main list={resources} />
    </>
  );
}

export const getStaticProps = async () => {
  const resources: Column[] = await getDatabase(
    process.env.NOTION_DATABASE_ID!
  );

  return {
    props: {
      resources
    },

    revalidate: 60
  };
};
