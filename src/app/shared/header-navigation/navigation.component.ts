import { Component, AfterViewInit, EventEmitter, Output, OnInit, DoCheck } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


declare var $: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  providers: [AuthService],
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements  OnInit, DoCheck, AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  constructor(
    private modalService: NgbModal,
    public authService: AuthService, 
    private router: Router, 
    private storage: AngularFireStorage,
    ) {
    }

  public showSearch = false;
  public user;

   //Upload
   public porcentaje: number;
   public uploadPercent: Observable<number>;
   public downloadURL: Observable<string>;
 
  ngOnInit(){
    // this.user = JSON.parse(localStorage.getItem('user'));
    // console.log(this.user);
  }

  ngDoCheck(){
    this.user = JSON.parse(localStorage.getItem('user'));
  
  } 

  ngAfterViewInit() {
  
  }

  onSignOut(){
    console.log("Cerrar Sesión");
    this.authService.signOut();
    // this.toastr.success('Ha cerrado sesión correctamente', 'Completada!');  
    this.router.navigate(['authentication/login']);
  }

  uploadFile(event) {
    let fileName = `${this.user.uid}-${this.user.displayName}`;
    const file = event.target.files[0];
    const filePath = `Usuarios/${fileName.toLowerCase()}`;
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
           this.user.photoURL = data;        
            this.authService.editUser(
              this.user.email,
              this.user.photoURL,
              this.user.displayName,
              this.user.role,
              this.user.uid,
            )
            console.log(data + 'Lo tenemos toh');
            localStorage.setItem('user', JSON.stringify(this.user));

                 
          })        
        })
     )
    .subscribe()
  }



}