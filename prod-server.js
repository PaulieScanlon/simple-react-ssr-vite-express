import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();

const server = async () => {
  let template, page;

  app.use(
    express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist/client'), {
      index: false,
    })
  );

  app.use('*', async (req, res) => {
    try {
      template = fs.readFileSync('./dist/client/index.html', 'utf-8');
      page = (await import('./dist/server/entry-server.js')).render;

      const html = template.replace(`<!--ssr-outlet-->`, page);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      console.log(error);
    }
  });
};

server();

app.listen(5173, () => {
  console.log('http://localhost:5173.');
});
