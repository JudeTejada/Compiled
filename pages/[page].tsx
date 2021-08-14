import { GetStaticProps, GetStaticPropsContext } from 'next';

import { Main, MainHero } from '@/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column, Page } from '@/lib/types';
import { filterItemsByCategory } from '@/lib/util';

import { useSetPages } from '@/hooks/useSetPages';

interface Props {
  list: Column[];
  pages: Page[];
}

export default function Home({ list, pages }: Props) {
  useSetPages(pages);

  return (
    <>
      <MainHero />

      <Main list={list} />
    </>
  );
}

export async function getStaticPaths() {
  const pages: Page[] = await getDatabase(process.env.NOTION_DATABASE_PAGES!);

  // Get the paths we want to pre-render based on posts
  const paths = pages.map(page => ({
    params: { page: page.properties.Page.title[0].plain_text }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const resources: Column[] = await getDatabase(
    process.env.NOTION_DATABASE_ID!
  );
  const pages: Page[] = await getDatabase(process.env.NOTION_DATABASE_PAGES!);

  const page = params?.page as string;

  const filteredItems = filterItemsByCategory(resources, page);

  return {
    props: {
      list: filteredItems,
      pages
    },

    revalidate: 60
  };
};
