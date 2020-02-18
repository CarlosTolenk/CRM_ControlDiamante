import { Component, OnInit } from '@angular/core';
import { MessageSmsService } from '../../services/message-sms.service';
import { Router } from "@angular/router";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';





export interface History {
  number: string;
  client: string;
  plan: string;
  body: string; 
}

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  //Firebase Base
  private itemsCollection: AngularFirestoreCollection<any>;
  private itemsAnuncios: AngularFirestoreCollection<any>;
  public anuncios: Observable<any[]>; 
  public push: any;
  public pushId: any;

 public history = []
 public items = []

   // Table

   public filterQuery = "";
   public searchText = "";
   public userFilter: any = { data: '' };
   public rowsOnPage = 10;

   //Sort Pipe
   public path: string[] = ['company'];
   public order: number = 1; // 1 asc, -1 desc;
 
   //Sort
   public name:string;
   public description: string;
   public model:string;
   public color:string;
   public size:string;
   public type:string;
   public cost:string;
   public price:string;
   public available:string;
   public inventary:string;


   //Draggable
   movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];


   

  constructor(
    private _messageSMS: MessageSmsService, 
    private router: Router,
    private readonly db: AngularFirestore,
    private toastr: ToastrService) 
    { 
      this.itemsCollection = db.collection<any>('alerta');
      this.db.collection('alerta').snapshotChanges().subscribe(data => {
        this.push = data[0].payload.doc.data();
        this.pushId =  data[0].payload.doc.id;
        console.log(this.push);
        console.log(this.pushId);
      });

        this.itemsAnuncios = db.collection<any>('anuncios');
        this.anuncios = this.itemsAnuncios.snapshotChanges().pipe(
        map(actions => actions.map(a => {   
          const data = a.payload.doc.data() as any;      
          const id = a.payload.doc.id;      
          console.log(data);   
          return {id, ...data};
        }))
      );   
    }

    drop(event: CdkDragDrop<string[]>) {
      console.log(event);
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

  ngOnInit() {
    // this._messageSMS.getHistory()
    // .subscribe((data) => {   
    //   this.history = data;
    //   console.log(this.history)       
    // })
  }

  onSubmit(){
    let publicacion = new Date();
    this.push.updateTimestamp = publicacion;

    this.itemsCollection.doc(this.pushId).update(this.push);   
    console.log(this.push);
    console.log(this.pushId);
    
    this.toastr.success('Acción realizada correctamente', 'Completada!');       
  }

  enviarSMS(){
    // console.log(item);
    this.router.navigate(['/apps/mensaje/enviar-sms']);
  }




}
