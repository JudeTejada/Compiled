import { Main, MainHero } from '@/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column, Page } from '@/lib/types';
import { useSetPages } from '@/hooks/useSetPages';

interface Props {
  resources: Column[];
  pages: Page[];
}

export default function Home({ resources, pages }: Props) {
  useSetPages(pages);

  return (
    <>
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

  const pages: Page[] = await getDatabase(process.env.NOTION_DATABASE_PAGES!);

  return {
    props: {
      resources,
      pages
    },

    revalidate: 60
  };
};
