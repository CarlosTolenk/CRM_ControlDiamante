import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { QuillModule } from 'ngx-quill';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ProgressBarModule} from "angular-progress-bar";
import {DragDropModule} from '@angular/cdk/drag-drop';

//Routes
import { AppsRoutes } from './apps.routing';

//Components
import { EmailComponent } from './email/email.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoteriaComponent } from './loteria/loteria.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { EnviarSMSMasivoComponent } from './mensaje/enviar-sms-masivo/enviar-sms-masivo.component';
import { ChatComponent } from './chat/chat.component';
import { UserRolesComponent } from './user-roles/user-roles.component'

//Module
import { PlaneModule } from  './plane/plane.module';
import { EventoModule } from './evento/evento.module';
import { ComponentsModule } from '../components/componentes.module';


@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    ToastrModule.forRoot(),
    QuillModule,
    DragulaModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(AppsRoutes),
    ProgressBarModule,
    PlaneModule,
    EventoModule,
    ComponentsModule,
    DragDropModule

  ],
  declarations: [
    EmailComponent,
    TaskboardComponent,
    FullcalendarComponent,
    ClienteComponent,
    LoteriaComponent,
    MensajeComponent,
    ChatComponent,
    EnviarSMSMasivoComponent,
    UserRolesComponent

  ],
  exports: [
    PlaneModule 
  ]
})
export class AppsModule {}
