import { Routes } from '@angular/router';

import { EmailComponent } from './email/email.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoteriaComponent } from './loteria/loteria.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { EnviarSMSMasivoComponent } from './mensaje/enviar-sms-masivo/enviar-sms-masivo.component';
import { PlaneComponent } from './plane/plane.component';
import { EditarPlaneComponent } from './plane/editar-planes/editar-planes.component';
import { AgregarPlanComponent } from './plane/agregar-plan/agregar-plan.component';
import { AgregarEventoComponent } from './evento/agregar-evento/agregar-evento.component';
import { EditarEventoComponent } from './evento/editar-evento/editar-evento.component';

import { UserRolesComponent } from './user-roles/user-roles.component';
import { ChatComponent } from './chat/chat.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cliente',
        component: ClienteComponent,
        data: {
          title: 'Manejador de Clientes',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Clientes' }]
        }
      },
      {
        path: 'loteria',
        component: LoteriaComponent,
        data: {
          title: 'Administrador de Loteria y Líneas Directas',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Loteria' }]
        }
      },
      {
        path: 'mensaje',
        component: MensajeComponent,
        data: {
          title: 'Controlador de Mensajaeria',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Mensajes' }]
        }
      },
      {
        path: 'mensaje/enviar-sms',
        component: EnviarSMSMasivoComponent,
        data: {
          title: 'Controlador de Mensajaeria/Enviar',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Mensajes' }]
        }
      },
      {
        path: 'plane',
        component: PlaneComponent,
        data: {
          title: 'Controlador de Planes y Eventos',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Planes' }]
        }
      },
      {
        path: 'plane/add',
        component: AgregarPlanComponent,
        data: {
          title: 'Controlador de Planes',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Crear Nuevo Plan' }]
        }
      },
      {
        path: 'plane/:id',
        component: EditarPlaneComponent,
        data: {
          title: 'Editar Plan',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Editar Plan' }]
        }
      },
      {
        path: 'evento/add',
        component: AgregarEventoComponent,
        data: {
          title: 'Controlador de Eventos',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Crear Nuevo Evento' }]
        }
      },
      {
        path: 'evento/:id',
        component: EditarEventoComponent,
        data: {
          title: 'Editar Evento',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Editar Evento' }]
        }
      },
      {
        path: 'chat',
        component: ChatComponent,
        data: {
          title: 'Sistema de Chat',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Chat' }]
        },        
      },
      {
        path: 'usuarios',
        component: UserRolesComponent,
        data: {
          title: 'Sistema de Usuarios y Roles',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Usuarios' }]
        },        
      }
    ]
  }
];
