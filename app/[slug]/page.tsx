import { getDatabase } from '@/lib/Notion';
import { Column, Page } from '@/lib/types';
import { decodeParam } from '@/lib/util';

import { Content } from './Content';

export default async function SlugPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const decodedSlug = decodeParam(slug);
  const resources: Column[] = await getDatabase(
    process.env.NOTION_DATABASE_ID!,
    {
      filter: {
        property: 'Category',
        select: {
          equals: decodedSlug
        }
      }
    }
  );

  const category: Page = await getDatabase(process.env.NOTION_DATABASE_PAGES!, {
    filter: {
      property: 'Page',
      rich_text: {
        equals: decodedSlug
      }
    }
  });

  return <Content category={category} list={resources} />;
}

export async function generateStaticParams() {
  const pages: Page[] = await getDatabase(process.env.NOTION_DATABASE_PAGES!);
  const paths = pages.map(page => ({
    params: { slug: page.properties.Page.title[0].plain_text }
  }));

  return paths;
}
