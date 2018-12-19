import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask'
import { ProgressBarModule} from "angular-progress-bar";
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { CurrencyMaskModule } from "ng2-currency-mask";

//Components
import { EventoComponent } from './evento.component';
import { AgregarEventoComponent } from './agregar-evento/agregar-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxMaskModule,
    ProgressBarModule,
    DragulaModule,
    CurrencyMaskModule,
    NgbModule 
  ],
  declarations: [
    EditarEventoComponent,
    AgregarEventoComponent,
    EventoComponent
  ],
  exports: [
    EditarEventoComponent,
    AgregarEventoComponent,
    EventoComponent
  ]
})
export class EventoModule { }
