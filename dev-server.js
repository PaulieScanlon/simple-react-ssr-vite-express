import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';

const app = express();

const server = async () => {
  let template, page;

  const vite = await createServer({
    server: {
      middlewareMode: true,
    },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      template = fs.readFileSync('index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      page = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;

      const html = template.replace(`<!--ssr-outlet-->`, page);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      console.log(error);
    }
  });
};

server();

app.listen(4173, () => {
  console.log('http://localhost:4173.');
});
