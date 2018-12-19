import { Component, OnInit, DoCheck } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { UUID } from 'angular2-uuid';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';




//Services
import { ToastrService } from 'ngx-toastr';
import { PlanesService } from '../../../services/index';



@Component({
  selector: 'app-agregar-plan',
  templateUrl: './agregar-plan.component.html',
  providers: [ToastrService, PlanesService],
  styleUrls: ['./agregar-plan.component.css'],
  animations: [
    trigger('visibility', [
      state('inactive', style({      
        transform: 'scale(0.1)',
        display: 'none'
      })),
      state('active',   style({    
        transform: 'scale(1)',
        display: 'block',
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class AgregarPlanComponent implements OnInit, DoCheck {

  public _idPlan: string;
  public item: any;
  public day = [
   {dia: 'Lunes', checked: false},
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
  public statusTitle: string = 'inactive';
  public statusImage: string = 'active';


  public customPatterns = {'0': { pattern: new RegExp('\[a-zA-Z\]')}};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _planesService: PlanesService,
    private location: Location,
    private storage: AngularFireStorage,
    private toastr: ToastrService,   

  ) { }

  ngOnInit() {
    this.statusTitle =  'active'; 
    this.item = {
      cantidad_mensaje: '',
      cantidad_numero: '',
      dias_entreg: [],
      duracion: '',
      imagen_url: '',
      key: '',
      id: '',
      likes_recibidos: 0,
      loterias: [],
      nombre_plan: '',
      precio: '',
      total_shared: 0  , 
      fecha_publicacion: ''
    };
  }   

  ngDoCheck(){
    if(this.item.nombre_plan === ''){
      this.statusTitle =  'active';
      this.statusImage = 'inactive';
    }else{
      this.statusTitle =  'inactive'
      this.statusImage = 'active';
    }
  }

  goBack() { 
    this.location.back();
    console.log( 'goBack()...' );
  }

  onSubmit(){
    this.formatingData();    
    this._planesService.createPlan(this.item, this.item.id);
    this.toastr.success('Plan se ha creado correctamente', 'Completada!');      
    this.router.navigate(['/apps/plane']);
  }

  formatingData(){  
    this.item.cantidad_mensaje +=  ' Mensajes';
    this.item.duracion += ' días';
    this.item.loterias += ' Loterias';   
    this.addDate();
    this.uuidName(); 
    this.formattingPrecio();
    this.diasEntrega();
    console.log(this.item );
  }

  addDate(){   
    let date = new Date();
    let day = this.getDay(date.getDay());
    let month = this.getMonth(date.getMonth());
    let time = day +" "+ month;
     this.item.fecha_publicacion = time;
  }

  getDay(day){
    if(day < 10){
      return `0${day}`
    }else{
      return day
    }
  }

  getMonth(month){
    switch(month){
      case 0: return 'Ene';
      case 1: return 'Feb';
      case 2: return 'Mar';
      case 3: return 'Abr';
      case 4: return 'May';
      case 5: return 'Jun';
      case 6: return 'Jul';
      case 7: return 'Ago';
      case 8: return 'Sep';
      case 9: return 'Oct';
      case 10: return 'Nov';
      case 11: return 'Dic';
    }
  }

  uuidName(){
    let uuid = UUID.UUID();
    let name = this.item.nombre_plan.split(" ").join('_');
    this.item.id =  name.toLowerCase() + uuid.slice(0,7);    
    this.item.key = name.toLowerCase() + uuid.slice(0,7);
  }

  formattingPrecio(){
    if(this.item.precio < 10000 && this.item.precio >= 1000){
      let resul = this.item.precio.toString();   
      let first = resul.slice(0,1);
      this.item.precio =  `RD$${first},${resul.slice(1, resul.length)}.00`
    }

    else if(this.item.precio < 1000){
      let resul = this.item.precio.toString();   
      this.item.precio =  `RD$${resul}.00`
    }

    else if(this.item.precio >= 10000){
      let resul = this.item.precio.toString();   
      let first = resul.slice(0,2);
      this.item.precio =  `RD$${first},${resul.slice(2, resul.length)}.00`
    }
  }  

  diasEntrega(){
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
  }

  uploadFile(event) {
    let fileName = this.item.nombre_plan.replace(/ /g, "_");
    const file = event.target.files[0];
    const filePath = `Planes/${fileName.toLowerCase()}`;
    console.log(filePath);
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
          })        
        })
     )
    .subscribe()
  }

}
