'use client';

import { usePathname } from 'next/navigation';

import { Main, MainHero } from 'app/components';
import { Column, Page } from '@/lib/types';
import { decodeParam } from '@/lib/util';

export function Content(props: { category: Page; list: Column[] }) {
  const pathname = usePathname();

  const formatted = decodeParam(pathname);
  const { category, list } = props;

  const title = category[0]?.properties?.Page?.title[0]?.plain_text ?? '';
  const description =
    // @ts-ignore
    category[0]?.properties?.description?.rich_text[0]?.plain_text ?? '';

  return (
    <>
      <MainHero
        title={title}
        description={description || `A compiled resources of ${formatted}`}
      />
      <Main list={list} />
    </>
  );
}

export function ContentList() {}
