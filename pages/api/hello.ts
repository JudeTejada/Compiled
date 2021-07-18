import type { NextApiRequest, NextApiResponse } from 'next';

import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const database_id: string = process.env.NOTION_DATABASE_ID!;

  const response = await notion.databases.query({
    database_id
  });
  res.status(200).json({ response });
}
