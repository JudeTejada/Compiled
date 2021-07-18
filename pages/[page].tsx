import { GetStaticProps, GetStaticPropsContext } from 'next';

import { Main } from '@/components/main';

import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';
import { pages, filterItemsByCategory } from '@/lib/util';

interface Props {
  list: Column[];
}

export default function Home({ list }: Props) {
  return (
    <>
      <h1 className='my-12 font-bold text-7xl'>All Resources</h1>
      <Main list={list} />
    </>
  );
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = pages.map(page => ({
    params: { page }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const response = await getDatabase(process.env.NOTION_DATABASE_ID!);

  const filteredItems = filterItemsByCategory(response, params.page);

  return {
    props: {
      list: filteredItems
    },

    revalidate: 1
  };
};
