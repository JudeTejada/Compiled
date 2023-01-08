import { Main, MainHero } from '@/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column, Page } from '@/lib/types';

interface Props {
  resources: Column[];
}

export default function Home({ resources }: Props) {
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

  return {
    props: {
      resources
    },

    revalidate: 60
  };
};
