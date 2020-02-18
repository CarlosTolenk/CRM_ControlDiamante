import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AuthService,
  AuthenticationGuard,
  EventoService,
  MessageSmsService,
  PlanesService
} from './index';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthService,
    AuthenticationGuard,
    EventoService,
    MessageSmsService,
    PlanesService
  ]
})
export class ServicesModule {
}
