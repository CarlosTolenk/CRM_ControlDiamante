import { Component, OnInit } from '@angular/core';
import { MessageSmsService } from '../../services/message-sms.service';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




export interface History {
  number: string;
  client: string;
  plan: string;
  body: string; 
}

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

 public history = []
 public items = []

   // Table

   public filterQuery = "";
   public searchText = "";
   public userFilter: any = { data: '' };
   public rowsOnPage = 10;
   //Sort Pipe
   public path: string[] = ['company'];
   public order: number = 1; // 1 asc, -1 desc;
 
   //Sort
   public name:string;
   public description: string;
   public model:string;
   public color:string;
   public size:string;
   public type:string;
   public cost:string;
   public price:string;
   public available:string;
   public inventary:string;
   

  constructor(private _messageSMS: MessageSmsService,  private router: Router) { }

  ngOnInit() {
    this._messageSMS.getHistory()
    .subscribe((data) => {
   
      this.history = data;
      console.log(this.history)
       
    })
  }

  enviarSMS(){
    // console.log(item);
    this.router.navigate(['/apps/mensaje/enviar-sms']);
  }




}
