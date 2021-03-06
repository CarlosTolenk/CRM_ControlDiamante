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
import { PlaneComponent } from './plane.component';
import { AgregarPlanComponent } from './agregar-plan/agregar-plan.component';
import { EditarPlaneComponent } from './editar-planes/editar-planes.component';


//Modules
import { EventoModule } from '../evento/evento.module';

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
    NgbModule ,EventoModule
  ],
  declarations: [
    PlaneComponent,
    AgregarPlanComponent,
    EditarPlaneComponent
  ],
  exports: [
    PlaneComponent,
    AgregarPlanComponent,
    EditarPlaneComponent
  ]
})
export class PlaneModule { }
