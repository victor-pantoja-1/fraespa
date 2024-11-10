import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.routes').then((c) => c.storeRoutes)
  }
];
