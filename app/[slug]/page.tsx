import { getDatabase } from '@/lib/Notion';
import { Column, Page } from '@/lib/types';
import { decodeParam } from '@/lib/util';
import type { Metadata } from 'next';

import { Content } from './Content';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  const { slug } = params;
  const decodedSlug = decodeParam(slug);

  const category: Page = await getDatabase(process.env.NOTION_DATABASE_PAGES!, {
    filter: {
      property: 'Page',
      rich_text: {
        equals: decodedSlug
      }
    }
  });

  // @ts-ignore
  const title = category[0]?.properties?.Page?.title[0]?.plain_text ?? '';
  const description =
    // @ts-ignore
    category[0]?.properties?.description?.rich_text[0]?.plain_text ?? '';

  return {
    title: `Compiled - ${title}`,
    description: description,
    openGraph: {
      description: description,
      url: baseUrl,
      siteName: 'Compiled'
    }
  };
}

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
