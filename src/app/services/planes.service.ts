import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {


  constructor( private firestore: AngularFirestore) { }

  //Obtiene todos los planes
  public getPlanes() {
    return this.firestore.collection('planes').snapshotChanges();
  }

    //Obtiene un plan en específico
    public getPlan(documentId: string) {
      return this.firestore.collection('planes').doc(documentId).snapshotChanges();
    }
}
