import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      isQuickSearchHidden: true,
    },
    loadComponent: () => import('./main/main.component').then((m) => m.ScMainComponent),
  },
];
