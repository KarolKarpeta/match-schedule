import 'zone.js/node';
import express from 'express';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  AngularNodeAppEngine,
  writeResponseToNodeResponse
} from '@angular/ssr/node';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distFolder = join(__dirname, '../browser');

// ⬇️ Dynamiczny import bootstrapa z dist/server/
const bootstrap = import('../dist/schedule/server/main.server.mjs');

// ⬇️ Przekazujemy bootstrap do SSR Engine
const AngularNodeAppEngineAny = AngularNodeAppEngine as any;
const angularApp = new AngularNodeAppEngineAny({ bootstrap });

const app = express();

app.use(express.static(distFolder, {
  maxAge: '1y',
}));

app.all('*', async (req, res, next) => {
  try {
    const response = await angularApp.handle(req);
    if (response) {
      writeResponseToNodeResponse(response, res);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
});

export default app;