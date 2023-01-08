import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

import { Main, MainHero } from '@/components/index';

import { getDatabase, notion } from '@/lib/Notion';
import { Column, Page } from '@/lib/types';

interface Props {
  list: Column[];
  page: Page;
}

// @ts-ignore
export default function Home({ list, page }: Props) {
  const router = useRouter();
  const { page: queryPage } = router.query;

  const title = page[0]?.properties?.Page?.title[0]?.plain_text ?? '';
  // @ts-isgnore
  const description =
    // @ts-isgnore
    page[0]?.properties?.description?.rich_text[0]?.plain_text ?? '';

  return (
    <>
      <MainHero
        title={title}
        description={description || `A compiled resources of ${queryPage}`}
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
  const resourceCategory = params?.page as string;

  const resources: Column[] = await getDatabase(
    process.env.NOTION_DATABASE_ID!,
    {
      filter: {
        property: 'Category',
        select: {
          equals: resourceCategory
        }
      }
    }
  );

  const page: Page = await getDatabase(process.env.NOTION_DATABASE_PAGES!, {
    filter: {
      property: 'Page',
      rich_text: {
        equals: resourceCategory
      }
    }
  });

  return {
    props: {
      list: resources,
      // list: filteredItems,
      page
    },

    revalidate: 60
  };
};
