import fs from 'fs';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const app = express();

import Page from './page';

const server = async () => {
  let template;

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: 'custom',
  });

  app.use('*', () => {
    try {
      template = fs.readFileSync('index.html', 'utf-8');
      template.replace(`<!--ssr-outlet-->`, renderToString(<Page />));
    } catch (error) {
      console.log('error: ', error);
    }
  });
};

server();

app.listen(5173, () => {
  console.log('http://localhost:5173.');
});
