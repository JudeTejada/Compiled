import { notion } from '@/lib/Notion';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { link, category } = req.body;

    const submitRes = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ENTRIES!
      },
      properties: {
        Link: {
          title: [
            // @ts-ignore
            {
              text: {
                content: link
              }
            }
          ]
        },
        // @ts-ignore
        category: {
          select: {
            name: category
          }
        }
      }
    });

    res.status(200).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}
