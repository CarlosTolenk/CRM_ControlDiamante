import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoService {


  constructor(
     private firestore: AngularFirestore   
    ) { }


    //Crea un nuevo plan
   public createEvento(data, id: string) {
    return this.firestore.collection('eventos_news').doc(id).set(data);
  }

  //Obtiene todos los planes
  public getEventos() {
    return this.firestore.collection('eventos_news').snapshotChanges();
  }

  //Obtiene un plan en específico
  public getEvento(documentId: string) {
    return this.firestore.collection('eventos_news').doc(documentId).snapshotChanges();
  }

  //Actualiza un plan
  public updateEvento(documentId: string, data: any) {
    return this.firestore.collection('eventos_news').doc(documentId).set(data);
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
  public deleteEvento(documentId: string){
    return this.firestore.collection('eventos_news').doc(documentId).delete();
  }
}
