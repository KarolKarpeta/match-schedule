
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://KarolKarpeta.github.io/match-schedule',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z4ACSF2C.js"
    ],
    "route": "/match-schedule"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5148, hash: '43d4e72b120e6835bc4b9eb8d01b0f5d41ca1cda27ed79cf194a86e7f2e28e14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1124, hash: '02e0e8600fc7074a46de4391f72a7483004c7b2252fabc4ae48dd832f5775e8e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10184, hash: '957c5d7bba9e4d425edf47b98f2210da180d4946099d970ecc6599e993ab2b38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
