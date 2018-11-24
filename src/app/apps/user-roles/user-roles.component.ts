import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  providers: [ToastrService],
  styleUrls: ['./user-roles.component.css']
})

export class UserRolesComponent implements OnInit {

  private items: Observable<any[]>;
  public selectedValue:any;

   //Modal
   public addItem: any = [];
   public editItem: any = [];
   public closeResult: string;

   //Upload
   public porcentaje: number;
   public uploadPercent: Observable<number>;
   public downloadURL: Observable<string>;

  constructor(
    private modalService: NgbModal,
    private modalService2: NgbModal,
    private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.items = this.af.list('/users').valueChanges();
   
  }

  addUser(){
    console.log(this.addItem);
    this.authService.createWithEmail(
      this.addItem.email,
      this.addItem.password,
      this.addItem.photoURL,
      this.addItem.displayName,
      this.addItem.role
      );
  }

  editUser(){
    // console.log(this.editItem);
    this.authService.editUser(
      this.editItem.email,
      this.editItem.photoURL,
      this.editItem.displayName,
      this.editItem.role,
      this.editItem.uid,
    )
  }

  recoveryPassword(user){
    this.authService.recoveryPassword(user.email);    
  }

  deleteUser(user){
    console.log(user);
    this.authService.deleteUser(user.email, user.password, user.uid);
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

  ModalAddUser(content){ 
    this.addItem = {   
      displayName: '',
      password: '',
      email: '',  
      photoURL: 'https://png2.kisspng.com/20180508/ozq/kisspng-user-computer-icons-system-chinese-wind-title-column-5af1427fd3ab48.378455571525760639867.png',
      role: '',     
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

  ModalAddEdit(content, data){ 
    console.log(data);
    this.editItem = {   
      displayName: data.displayName,     
      email: data.email,  
      photoURL: data.photoURL,
      role: data.role,    
      uid: data.uid 
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

  uploadFile(event, user) {
    let fileName = user.displayName;
    const file = event.target.files[0];
    const filePath = `Planes/${fileName.toLowerCase()}`;
    console.log(filePath);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe((data) =>{
      this.porcentaje = data;
    })
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe((data) =>{
            // this.item.imagen_url= data;   
            console.log() 
                 
          })        
        })
     )
    .subscribe()
  }

}
