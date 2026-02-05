import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then(m => m.App)
  },
  // Add more routes here as needed
  {
    path: '**',
    redirectTo: ''
  }
];
