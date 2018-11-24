import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { QuillModule } from 'ngx-quill';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";


import { AppsRoutes } from './apps.routing';
import { EmailComponent } from './email/email.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoteriaComponent } from './loteria/loteria.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { PlaneComponent } from './plane/plane.component';
import { EventoComponent } from './evento/evento.component';

import { ChatComponent } from './chat/chat.component';
import { AgregarPlanComponent } from './plane/agregar-plan/agregar-plan.component';
import { EditarPlaneComponent } from './plane/editar-planes/editar-planes.component';
import { ProgressBarModule} from "angular-progress-bar";
import { AgregarEventoComponent } from './evento/agregar-evento/agregar-evento.component';
import { EditarEventoComponent } from './evento/editar-evento/editar-evento.component';
import { UserRolesComponent } from './user-roles/user-roles.component'


@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    ToastrModule.forRoot(),
    QuillModule,
    ProgressBarModule,
    DragulaModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(AppsRoutes)
  ],
  declarations: [
    EmailComponent,
    TaskboardComponent,
    FullcalendarComponent,
    ClienteComponent,
    LoteriaComponent,
    MensajeComponent,
    PlaneComponent,
    EventoComponent,
    ChatComponent,
    EditarPlaneComponent,
    EditarEventoComponent,
    AgregarPlanComponent,
    AgregarEventoComponent,
    UserRolesComponent,

  ]
})
export class AppsModule {}
