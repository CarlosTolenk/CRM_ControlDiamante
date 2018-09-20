import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-loteria',
  templateUrl: './loteria.component.html',
  providers: [ToastrService],
  styleUrls: ['./loteria.component.css']
})

export class LoteriaComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<any>;
  public items: Observable<any[]>;  
  public loteryNormal: any[];
  public loteryLoto: any[];

  constructor(
    private readonly db: AngularFirestore,
    private toastr: ToastrService   
  ) {
    // this.itemsCollection = db.collection<any>('loteria');
    this.itemsCollection = db.collection<any>('loteria', ref => ref.orderBy('tipo', 'asc'));
    // this.items = db.collection('loteria').valueChanges();
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;        
        return {id, ...data};
      }))
    );  
  
   }

  ngOnInit() {
    // console.log(this.itemsCollection);
    
  }

  onSubmit(item){
    let publicacion = new Date();
    item.publicacion = publicacion;
    this.itemsCollection.doc(item.id).update(item);   
    this.toastr.success('Acción realizada correctamente', 'Completada!');       
  }

}
