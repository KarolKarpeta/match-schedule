import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import axios from 'axios';
import cors from 'cors';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
app.use(cors());
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

function getLigaUrl(liga: any) {
  switch (liga) {
    case '4':
      return 'http://www.90minut.pl/liga/1/liga13566.html';
    case '5':
      return 'http://www.90minut.pl/liga/1/liga13840.html';
    case 'a1':
      return 'http://www.90minut.pl/liga/1/liga13952.html';
    case 'a2':
      return 'http://www.90minut.pl/liga/1/liga13953.html';
    case 'b1':
      return 'http://www.90minut.pl/liga/1/liga13980.html';
    case 'b2':
      return 'http://www.90minut.pl/liga/1/liga13981.html';
  }
  return '';
}

app.get('/api/getLeagueData', async (req, res) => {
  const league = req.query['league'];
  try {
    const data = await axios.get(getLigaUrl(league));
    return res.json(data.data);
  } catch (error) {
    res.status(500).json({ error: 'Błąd przy pobieraniu danych' });
  }
  return res.json(axios.get(getLigaUrl(league)));
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
