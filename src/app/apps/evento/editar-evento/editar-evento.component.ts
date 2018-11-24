import { Component, OnInit, ViewEncapsulation,  } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

//Services
import { ToastrService } from 'ngx-toastr';
import { EventoService } from '../../../services/evento.services';



@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  providers: [ToastrService, EventoService],
  styleUrls: ['./editar-evento.component.css'],
})


export class EditarEventoComponent implements OnInit {

  public _idEvento: string;
  public item: any;

  public showIsDay: any;
  public oneTime: boolean;
  public new_image: any = '';
  public porcentaje: number;
  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;


  public customPatterns = {'0': { pattern: new RegExp('\[a-zA-Z\]')}};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _eventoService: EventoService,
    private location: Location,
    private storage: AngularFireStorage,
    private toastr: ToastrService,   

    

  ) {   this._idEvento =  this.route.snapshot.paramMap.get('id');   }

  ngOnInit() {
  
    // this.oneTime = true;
    this._eventoService.getEvento(this._idEvento).subscribe((planSnapshot) => {
      this.item = planSnapshot.payload.data();     
    });   
  }   

  goBack() { 
    this.location.back();
    console.log( 'goBack()...' );
  }

  onSubmit(){
    console.log("Actualizar");
    this._eventoService.updateEvento(this.item.id, this.item);  
    this.toastr.success('Plan editado correctamente', 'Completada!');      
   
  
  }

  formatingData(){  
    // this.addDate();
    this.formatingDate()

    this.formattingPrecio();
    // this.diasEntrega();
    // console.log(this.item );
  }

  formatingDate(){
    console.log("Nueva Fecha" + this.item.fecha_evento);
    let new_date = new Date(this.item.fecha_evento)
    let day = new_date.getDate() + 1;
    let month = this.getMonth(new_date.getMonth());
    this.item.fecha_evento = `${day} ${month}`;

  }

  // addDate(){   
  //   let date = new Date();
  //   let day = this.getDay(date.getDay());
  //   let month = this.getMonth(date.getMonth());
  //   let time = day +" "+ month;
  //    this.item.fecha_publicacion = time;
  // }

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


  uploadFile(event) {

    let fileName = this.item.nombre_evento.replace(/ /g, "_");
    const file = event.target.files[0];
    const filePath = `Eventos/${fileName.toLowerCase()}`;
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
            this.item.image_url= data;          
          })        
        })
     )
    .subscribe()
  }

}
