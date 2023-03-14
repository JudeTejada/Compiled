import { Main, MainHero } from 'app/components';

import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';

export default async function Home() {
  return (
    <>
      <MainHero
        title='All Resources'
        description='A compiled of all resources for web developers'
      />
      {/* @ts-expect-error Server Component */}
      <ListData />
    </>
  );
}

async function ListData() {
  const list = (await getDatabase(process.env.NOTION_DATABASE_ID!)) as Column[];
  return <Main list={list} />;
}
