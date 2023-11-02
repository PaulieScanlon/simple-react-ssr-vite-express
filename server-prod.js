import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();
const client = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist/client');

app.use(express.static(client, { index: false }));

app.use('*', async (_, res) => {
  try {
    const template = fs.readFileSync('./dist/client/index.html', 'utf-8');
    const { render } = await import('./dist/server/entry-server.js');

    const html = template.replace(`<!--ssr-outlet-->`, render);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    res.status(500).end(error);
  }
});

app.listen(5173, () => {
  console.log('http://localhost:5173.');
});
