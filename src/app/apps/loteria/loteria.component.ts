import { Component, OnInit, DoCheck } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { forEach } from '@angular/router/src/utils/collection';




@Component({
  selector: 'app-loteria',
  templateUrl: './loteria.component.html',
  providers: [ToastrService],
  styleUrls: ['./loteria.component.css']
})

export class LoteriaComponent implements OnInit {
  //Loteria
  private itemsCollection: AngularFirestoreCollection<any>;
  public items: Observable<any[]>; 
  //Números Diamantez
  private seleccionCollection: AngularFirestoreCollection<any>;
  public itemSeleccion: Observable<any[]>;
  public _idSeleccion: any;
  public diamantesNumbers: Array<any>[]; 
  //Lineas Directas
  private lineaCollection: AngularFirestoreCollection<any>;
  public itemLinea: Observable<any[]>;
  public _idLinea: any;
  public lineasNumbers: Array<number>[]; 

   





  constructor(  
    private readonly db: AngularFirestore,
    private toastr: ToastrService, 
 
  ) {  
    this.itemsCollection = db.collection<any>('loteria', ref => ref.orderBy('tipo', 'asc'));
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;      
        const id = a.payload.doc.id;        
        return {id, ...data};
      }))
    );  

    this.seleccionCollection = db.collection<any>('numeros_seleccion');
    this.itemSeleccion = this.seleccionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data().numeros    as any;
        const id = a.payload.doc.id;     
        this._idSeleccion = id;
        return data;
      }))
    );  

    this.lineaCollection = db.collection<any>('lineas_directas');
    this.itemLinea = this.lineaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data().numeros    as any;
        const id = a.payload.doc.id;     
        this._idLinea = id;
        return data;
      }))
    );  
   }

  ngOnInit() {
    console.log('Componente Listo');  

  }

  ngDoCheck(){   
    //Numeros Seleccion
    this.itemSeleccion.subscribe(seleccion => 
      {
        for(let i=0; i<=seleccion[0].length; i++){
          this.diamantesNumbers = seleccion[0];  
          // console.log(this.diamantesNumbers[0])          
        }
      }
    );

    // Linea Directa
    this.itemLinea.subscribe(seleccion => 
      {
        for(let i=0; i<=seleccion[0].length; i++){
          this.lineasNumbers = seleccion[0];  
          // console.log(this.lineasNumbers[0])          
        }
      }
    );
  } 

  onSubmit(item){
    let publicacion = new Date();
    item.publicacion = publicacion;
    console.log(item);
    this.itemsCollection.doc(item.id).update(item);   
    this.toastr.success('Acción realizada correctamente', 'Completada!');       
  }

  addSeleccionNumber(){
    console.log('Add Seleccion');
    let first:any;
    first = 0;
    this.diamantesNumbers.push(first);
    console.log(this.diamantesNumbers);
  
  }

  removeSeleccionNumber(item){   
    console.log(item);
    console.log(this.diamantesNumbers);
    this.diamantesNumbers = this.diamantesNumbers.filter((resul) => this.checkArray(resul, item));    
    console.log(this.diamantesNumbers);
 
  }

  checkArray(number, item){
    console.log(`El numero ${number} buscando ${item}`)
    return number != item
  }

  onChangeSeleccion(){
    console.log(this.diamantesNumbers);
    this.seleccionCollection.doc(this._idSeleccion).update({
      numeros: this.diamantesNumbers
    });
    console.log(this._idSeleccion);
    this.toastr.success('Acción realizada correctamente', 'Completada!');     
  }

  trackByFn(index: any, item: any) {
    return index;
 }

 addLineaNumber(){
  console.log('Add Seleccion');
  let first:any;
  first = 0;
  this.lineasNumbers.push(first);
  console.log(this.lineasNumbers);

}

removeLineaNumber(item){   
  console.log(item);
  console.log(this.lineasNumbers);
  this.lineasNumbers = this.lineasNumbers.filter((resul) => this.checkArray(resul, item));    
  console.log(this.lineasNumbers);

}

onChangeLinea(){
  console.log(this.lineasNumbers);
  this.lineaCollection.doc(this._idLinea).update({
    fecha: new Date(),
    numeros: this.lineasNumbers
  });
  console.log(`EL ID ES: ${this._idLinea}`);
  this.toastr.success('Acción realizada correctamente', 'Completada!');     
}

 

}
