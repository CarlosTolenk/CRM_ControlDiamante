import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask'

import { PlaneComponent } from './plane.component';
import { AgregarPlanComponent } from './agregar-plan/agregar-plan.component';
import { EditarPlaneComponent } from './editar-planes/editar-planes.component';

@NgModule({
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxMaskModule
    
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
