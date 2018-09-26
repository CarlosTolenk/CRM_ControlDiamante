import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { forEach } from '@angular/router/src/utils/collection';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  providers: [ToastrService],
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {

   //Planes
   private itemsCollection: AngularFirestoreCollection<any>;
   public items: Observable<any[]>; 
   //Modal
   closeResult: string;
   //Objects
   detailPlan: Object;

  constructor(
    private readonly db: AngularFirestore,
    private modalService: NgbModal,
    private modalService2: NgbModal     
    ) {
    this.itemsCollection = db.collection<any>('planes');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;      
        const id = a.payload.doc.id;        
        return {id, ...data};
      }))
    );  
   }

  ngOnInit() {

  }

  viewPlan(content, item) {
    console.log(item);
    this.detailPlan = {
      title: item.nombre_plan
    };

    this.modalService.open(content).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    ); 
  
  }
  open(content) {
    this.modalService2.open(content, { windowClass: 'dark-modal' });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
