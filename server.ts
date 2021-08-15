const express = require('express');

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: 'secret_z4NGj1rP11tR4dgx8aONbjmsPq4gDob7piT7OgoG9MA'
});

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.post('/api/submit', (req, res) => {
    const { link, category } = req.body;

    const database_id = '8b64e3b9f3734474a2581330714172ce';

    try {
      const response = notion.pages.create({
        parent: {
          database_id
        },
        properties: {
          Link: {
            type: 'title',
            title: [
              {
                type: 'text',
                text: {
                  content: link
                }
              }
            ]
          },
          category: {
            select: {
              name: category
            },
            type: 'select'
          }
        }
      });
      res.status(200).json({ message: 'SUCCESS' });
    } catch (error) {
      res.status(400).json({ message: 'something went wrong' });
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('Ready on http://localhost:5000');
  });
});
