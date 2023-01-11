import { Main, MainHero } from '@/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';

interface Props {
  resources: Column[];
}

export default function Home({ resources }: Props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)'
  });

  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  return (
    <>
      <Head>
        <meta property='og:image' content={`${baseUrl}/api/og`} />
      </Head>
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
