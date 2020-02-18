import {Routes} from '@angular/router';

import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';

import {AuthenticationGuard} from './services/authentication.guard';

export const Approutes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {path: '', redirectTo: '/authentication/login', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './dashboards/dashboard.module#DashboardModule'},
      {path: 'apps', loadChildren: './apps/apps.module#AppsModule'}

    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];
