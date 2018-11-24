import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { forEach } from '@angular/router/src/utils/collection';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventoService } from '../../services/evento.services';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  providers: [ToastrService],
  styleUrls: ['./evento.component.css']
})

export class EventoComponent implements OnInit {


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
    private _eventoService: EventoService,
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
    this._eventoService.getEventos().subscribe((catsSnapshot) => {
      this.items = [];
      catsSnapshot.forEach((planesData: any) => {   
        this.items.push({
          id: planesData.payload.doc.id,
          data: planesData.payload.doc.data()
        });
      })
    });
  }
  

  viewEvento(content, item) {
    console.log(item);
    this.detailPlan = {
      nombre_evento: item.nombre_evento,
      fecha: item.fecha_evento,
      precio: item.precio,
      ciudad: item.ciudad,
      lugar: item.lugar,
      descripcion: item.descripcion,
      hora: item.hora,     
      imagen: item.image_url,   
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

  ViewdeleteEvento(content, item){
    this.seleccionIdDelete = item.id;
    console.log(item.id);
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


  editarEvento(item){
    // console.log(item);
    this.router.navigate(['/apps/evento/', item.id]);
  }

  addEvento(){
    this.router.navigate(['/apps/evento/add']);
  }

  deleteEvento(){
    console.log(this.seleccionIdDelete);
    console.log("Eliminando");
    this._eventoService.deleteEvento(this.seleccionIdDelete);
  }



}
