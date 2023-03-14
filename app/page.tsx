import { Main, MainHero } from 'app/components';

import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <MainHero
        title='All Resources'
        description='A compiled of all resources for web developers'
      />
      <Suspense fallback={<h1>Loading</h1>}>
        {/* @ts-expect-error Server Component */}
        <ListData />
      </Suspense>
    </>
  );
}

async function ListData() {
  const list = (await getDatabase(process.env.NOTION_DATABASE_ID!)) as Column[];
  return <Main list={list} />;
}

// export const getStaticProps = async () => {
//   const resources: Column[] = await getDatabase(
//     process.env.NOTION_DATABASE_ID!
//   );

//   return {
//     props: {
//       resources
//     },

//     revalidate: 60
//   };
// };
