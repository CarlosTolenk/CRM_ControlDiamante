import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(
    private firestore: AngularFirestore
  ) {
  }

  public createPlan(data, id: string) {
    return this.firestore.collection('planes').doc(id).set(data);
  }

  public getPlanes() {
    return this.firestore.collection('planes').snapshotChanges();
  }

  public getPlan(documentId: string) {
    return this.firestore.collection('planes').doc(documentId).snapshotChanges();
  }

  public updatePlan(documentId: string, data: any) {
    return this.firestore.collection('planes').doc(documentId).set(data);
  }

  public deletePlan(documentId: string) {
    return this.firestore.collection('planes').doc(documentId).delete();
  }
}
