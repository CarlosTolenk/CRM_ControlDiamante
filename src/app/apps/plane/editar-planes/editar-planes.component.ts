import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

//Services
import { ToastrService } from 'ngx-toastr';
import { PlanesService } from '../../../services/planes.service';



@Component({
  selector: 'app-edit-plan',
  templateUrl: './editar-planes.component.html',
  providers: [ToastrService],
  styleUrls: ['./editar-planes.component.css']
})
export class EditarPlaneComponent implements OnInit, DoCheck {

   //Plane
   public _idPlan: string;
   public item: any;
   public day = [
    {dia: 'Lunes', checked: true},
    {dia: 'Martes', checked: false},
    {dia: 'Miércoles', checked: false},
    {dia: 'Jueves', checked: false},
    {dia: 'Viernes', checked: false},
    {dia: 'Sábado', checked: false},
    {dia: 'Domingo', checked: false},    
  ];
   public showIsDay: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _planesService: PlanesService,
    private location: Location,
  )
  {
   this._idPlan =  this.route.snapshot.paramMap.get('id');   
  }

  ngOnInit() {
    this._planesService.getPlan(this._idPlan).subscribe((planSnapshot) => {
      this.item = planSnapshot.payload.data();        
    });     
  }
  ngDoCheck(){
    // console.log(this.item);
    if(this.item){
      for(let i=0; i<this.item.dias_entreg.length; i++){
        for(let j=0; j<this.day.length; j++){
          let value = this.day[j].dia.charAt(0) + this.day[j].dia.charAt(1);
          // console.log(value)
          if(this.item.dias_entreg[i] == this.day[j].dia.charAt(0)){
            this.day[j].checked = true;
            // console.log(this.day[j].dia);
          }else if(this.item.dias_entreg[i] == value) {
            this.day[j].checked = true;
            // console.log(this.day[j].dia);
          }
        }
      }
    }
  }

  goBack() { 
    this.location.back();
    console.log( 'goBack()...' );
  }

  onSubmit(){
    console.log(this.item);
  }


}
