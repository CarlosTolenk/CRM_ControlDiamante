import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AuthService,
  AuthenticationGuard,
  EventoService,
  MessageSmsService,
  PlanesService
} from './index';

@NgModule({
  imports: [
    CommonModule
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
export class ServicesModule { }
