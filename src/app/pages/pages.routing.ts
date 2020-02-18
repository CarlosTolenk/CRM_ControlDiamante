import {Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        component: HomepageComponent
      }
    ]
  }
];
