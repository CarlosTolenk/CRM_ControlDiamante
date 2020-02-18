import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map, mergeMap, tap} from 'rxjs/operators';
import {LotteryBase} from '../models/loterry';

const LOTTERY = 'loteria';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  private LotteryCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
  }

  public getLottery(): Observable<LotteryBase[]> {
    return this.firestore.collection(LOTTERY).snapshotChanges()
      .pipe(
        map(
          changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as any;
              data.id = a.payload.doc.id;
              return data;
            });
          }
        ));
  }


}
