import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoService {


  constructor(
    private firestore: AngularFirestore
  ) {
  }


  public createEvento(data, id: string) {
    return this.firestore.collection('eventos_news').doc(id).set(data);
  }

  public getEventos() {
    return this.firestore.collection('eventos_news').snapshotChanges();
  }

  public getEvento(documentId: string) {
    return this.firestore.collection('eventos_news').doc(documentId).snapshotChanges();
  }

  public updateEvento(documentId: string, data: any) {
    return this.firestore.collection('eventos_news').doc(documentId).set(data);
  }

  public deleteEvento(documentId: string) {
    return this.firestore.collection('eventos_news').doc(documentId).delete();
  }
}
