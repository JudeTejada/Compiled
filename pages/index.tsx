import { Sidebar } from '@/components/sidebar';
import { Main, MainHero } from '@/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';

interface Props {
  list: Column[];
}

export default function Home({ list }: Props) {
  return (
    <>
      <MainHero />
      <Main list={list} />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await getDatabase(process.env.NOTION_DATABASE_ID!);

  return {
    props: {
      list: response
    },

    revalidate: 60
  };
};
