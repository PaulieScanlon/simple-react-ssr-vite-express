import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';

const app = express();

const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
});

const server = async () => {
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      const template = await vite.transformIndexHtml(url, fs.readFileSync('index.html', 'utf-8'));
      const app = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;

      const html = template.replace(`<!--ssr-outlet-->`, app);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      res.status(500).end(error);
    }
  });
};

server();

app.listen(4173, () => {
  console.log('http://localhost:4173.');
});
