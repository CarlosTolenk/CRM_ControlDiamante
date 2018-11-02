import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { forEach } from '@angular/router/src/utils/collection';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanesService } from '../../services/planes.service';


@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  providers: [ToastrService],
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {

   //Planes
   private itemsCollection: AngularFirestoreCollection<any>;
   public items = [];
   //Modal
   closeResult: string;
   //Objects
   detailPlan: Object;
   //
   seleccionIdDelete:string;

  constructor(
    private readonly db: AngularFirestore,
    private modalService: NgbModal,
    private modalService2: NgbModal,
    private _planesService: PlanesService,
    private router: Router   
    ) {
    // this.itemsCollection = db.collection<any>('planes');
    // this.items = this.itemsCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as any;      
    //     const id = a.payload.doc.id;        
    //     return {id, ...data};
    //   }))
    // );  
  }

  ngOnInit() {
    this._planesService.getPlanes().subscribe((catsSnapshot) => {
      this.items = [];
      catsSnapshot.forEach((planesData: any) => {   
        this.items.push({
          id: planesData.payload.doc.id,
          data: planesData.payload.doc.data()
        });
      })
    });
  }
  

  viewPlan(content, item) {
    console.log(item);
    this.detailPlan = {
      nombre_plan: item.nombre_plan,
      fecha: item.fecha_publicacion,
      precio: item.precio,
      duracion: item.duracion,
      efectividad: item.efectividad,
      likes: item.likes_recibidos,
      shared: item.total_shared,
      loteria: item.loterias,
      cantidad_mensaje: item.cantidad_mensaje,
      cantiada_numero: item.cantidad_numero,
      imagen: item.imagen_url,
      dias_entrega: item.dias_entreg,
      id: item.id
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

  ViewdeletePlan(content, item){
    this.seleccionIdDelete = item.id;
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


  editarPlan(item){
    // console.log(item);
    this.router.navigate(['/apps/plane/', item.id]);
  }

  addPlan(){
    this.router.navigate(['/apps/plane/add']);
  }

  deletePlan(){
    console.log(this.seleccionIdDelete);
    console.log("Eliminando");
    this._planesService.deletePlan(this.seleccionIdDelete);
  }



}
