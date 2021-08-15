import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export const getDatabase = async <TData>(databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId
  });
  return response.results as unknown as TData;
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50
  });
  return response.results;
};

interface EntriesProps {
  link: string;
  category: string;
}
