import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule} from '@angular/router';
import {PagesRoutes} from './pages.routing';
import {ComponentsModule} from '../components/componentes.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    ComponentsModule,
    SharedModule
  ],
  declarations: [HomepageComponent],
})
export class PagesModule {
}
