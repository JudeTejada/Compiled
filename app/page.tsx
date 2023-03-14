import { Main, MainHero } from 'app/components/index';

import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';

interface Props {
  resources: Column[];
}

export default async function Home({ resources }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  const list = await getDatabase(process.env.NOTION_DATABASE_ID!);

  return (
    <>
      <h1>Hello world</h1>
      <MainHero
        title='All Resources'
        description='A compiled of all resources for web developers'
      />
      <Main list={resources} />
    </>
  );
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
