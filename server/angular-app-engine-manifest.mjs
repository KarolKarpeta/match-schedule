
export default {
  basePath: 'https://KarolKarpeta.github.io/match-schedule',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
