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

const app = express();
const angularApp = new AngularNodeAppEngine();

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