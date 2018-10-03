import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
   public oneTime: boolean;
   public new_image: any = '';
   public porcentaje: number;
   uploadPercent: Observable<number>;
   downloadURL: Observable<string>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _planesService: PlanesService,
    private location: Location,
    private storage: AngularFireStorage,
    private toastr: ToastrService, 
  )
  {
   this._idPlan =  this.route.snapshot.paramMap.get('id');   
  }

  ngOnInit() {
    this.oneTime = true;
    this._planesService.getPlan(this._idPlan).subscribe((planSnapshot) => {
      this.item = planSnapshot.payload.data();        
    });     
  }
  ngDoCheck(){
    // console.log(this.item);
    if(this.oneTime){
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

    
    // console.log(this.day);


  }

  goBack() { 
    this.location.back();
    console.log( 'goBack()...' );
  }

  onSubmit(){
    this.oneTime = false;
    this.item.dias_entreg = [];  
    let index = 0;
    for(let i=0; i<this.day.length; i++){   
      if(this.day[i].checked){       
        if(this.day[i].dia == "Miércoles"){
          this.item.dias_entreg[index] = this.day[i].dia.charAt(0) + this.day[i].dia.charAt(1);
          index++;
        }else{
          this.item.dias_entreg[index] = this.day[i].dia.charAt(0);
          index++;
        }
      }
    }

    this._planesService.updatePlan(this.item.id, this.item);  
    this.toastr.success('Plan editado correctamente', 'Completada!');      
  
  }

  uploadFile(event) {
    //Buscando el nombre
    let url_image = this.item.imagen_url;
    let url_image_array = url_image.split("F");
    let path_old_image_array = url_image_array[1].split("?");

    // let path_old_name_image = path_old_image_array[0].split(".");
    // let fileName = path_old_name_image[0];


    let fileName = path_old_image_array[0];
    const file = event.target.files[0];
    const filePath = `Planes/${fileName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe((data) =>{
      this.porcentaje = data;
    })
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe((data) =>{
            this.item.imagen_url= data;
            console.log(this.item);
          })
        
        })
     )
    .subscribe()
  }




}


// https://firebasestorage.googleapis.com/v0/b/control-diamante-1519145676088.appspot.com/o/Planes%2Fblanco_negro_opt.jpg?alt=media&token=0304f0c1-338c-4eba-8aee-63b4c067899c
//https://firebasestorage.googleapis.com/v0/b/control-diamante-1519145676088.appspot.com/o/Planes%2Ffive_start_opt.jpg?alt=media&token=3c9b4d6b-e856-4ec7-8b8f-0f91084173d5