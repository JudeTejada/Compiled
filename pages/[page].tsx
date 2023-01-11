import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

import { Main, MainHero } from '@/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column, Page } from '@/lib/types';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface Props {
  list: Column[];
  page: Page;
}

export default function Home({ list, page }: Props) {
  const router = useRouter();
  const { page: queryPage } = router.query;

  // @ts-ignore
  const title = page[0]?.properties?.Page?.title[0]?.plain_text ?? '';
  const description =
    // @ts-ignore
    page[0]?.properties?.description?.rich_text[0]?.plain_text ?? '';

  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  return (
    <>
      <Head>
        <meta
          property='og:image'
          content={`${baseUrl}/api/og?title=${title}&description=${description}`}
          
        />
      </Head>
      <NextSeo title={`Compiled - ${title}`} description={description} />
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
      page
    },

    revalidate: 60
  };
};
