import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ai-cloud',
    pathMatch: 'full',
  },
  {
    path: 'ai-cloud',
    loadChildren: () =>
      import('./core/routes/ai_cloud.routes').then((m) => m.AI_Cloud_ROUTES),
  },
  // {
  //   path: 'clean-tech',
  //   loadChildren: () =>
  //     import('./core/routes/clean_tech.routes').then(
  //       (m) => m.Clean_Tech_Routes
  //     ),
  // },
  // Wildcard route for 404 pages
  {
    path: '404',
    loadComponent: () =>
      import('./presentation/pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
