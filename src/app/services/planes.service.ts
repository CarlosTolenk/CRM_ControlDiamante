import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {


  constructor(
     private firestore: AngularFirestore   
    ) { }


    //Crea un nuevo plan
   public createPlan(data, id: string) {
    return this.firestore.collection('planes').doc(id).set(data);
  }

  //Obtiene todos los planes
  public getPlanes() {
    return this.firestore.collection('planes').snapshotChanges();
  }

  //Obtiene un plan en específico
  public getPlan(documentId: string) {
    return this.firestore.collection('planes').doc(documentId).snapshotChanges();
  }

  //Actualiza un plan
  public updatePlan(documentId: string, data: any) {
    return this.firestore.collection('planes').doc(documentId).set(data);
  }

  //Eliminar un Plan
  // public deleteCat(documentId) {
  //   this.firestoreService.deleteCat(documentId).then(() => {
  //     console.log('Documento eliminado!');
  //   }, (error) => {
  //     console.error(error);
  //   });
  // }

  //Eliminar plan existente
  public deletePlan(documentId: string){
    return this.firestore.collection('planes').doc(documentId).delete();
  }
}
