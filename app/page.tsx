import { Main, MainHero } from 'app/components';

import { Metadata } from 'next';
import { getResources } from './server/notion';

export const metadata: Metadata = {
  title: 'Compiled',
  description: 'A compiled of all resources for web developers',
  openGraph: {
    description: 'A compiled of all resources for web developers',
    url: process.env.NEXT_PUBLIC_HOST,
    siteName: 'Compiled',

    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOST}/images/banner.png`,
        width: 800,
        height: 600
      }
    ]
  }
};

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
  const list = await getResources();
  return <Main list={list} />;
}
