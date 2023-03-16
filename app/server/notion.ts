import { getDatabase } from '@/lib/Notion';
import { Column } from '@/lib/types';

export async function getResources(): Promise<Column[]> {
  const list: Column[] = await getDatabase(process.env.NOTION_DATABASE_ID!);

  return list;
}
