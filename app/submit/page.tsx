import { getDatabase } from '@/lib/Notion';
import { Page } from '@/lib/types';
import { SubmitContent } from './Content';

export default async function SubmitPage() {
  const pages: Page[] = await getDatabase(process.env.NOTION_DATABASE_PAGES!);

  return <SubmitContent pages={pages} />;
}
