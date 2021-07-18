import { Sidebar } from '@/components/sidebar';
import { Main } from '@/components/main';

import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';

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

export const getStaticProps = async () => {
  const response = await getDatabase(process.env.NOTION_DATABASE_ID!);

  return {
    props: {
      list: response
    },

    revalidate: 1
  };
};
