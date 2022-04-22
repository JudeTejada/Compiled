import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

import { Main, MainHero } from '@/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column, Page } from '@/lib/types';
import { filterItemsByCategory } from '@/lib/util';

import { useSetPages } from '@/hooks/useSetPages';
import { useEffect, useMemo } from 'react';

interface Props {
  list: Column[];
  pages: Page[];
}

export default function Home({ list, pages }: Props) {
  const router = useRouter();
  const { page } = router.query;

  const { handleSetPages } = useSetPages(pages);

  useEffect(() => {
    handleSetPages(pages);
  }, [handleSetPages, pages]);

  const { title, description } = useMemo(() => {
    const selectedPage = pages.find(
      navPage => navPage.properties.Page.title[0].plain_text === page
    );

    return {
      title: selectedPage?.properties.Page.title[0].plain_text,
      description: selectedPage?.properties.description.rich_text[0].plain_text
    };
  }, [page, pages]);

  return (
    <>
      <MainHero
        title={title || (page as string)}
        description={description || `A compiled resources of ${page}`}
      />

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
