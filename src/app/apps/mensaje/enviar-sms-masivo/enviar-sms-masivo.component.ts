import { Component, OnInit } from '@angular/core';
import { MessageSmsService } from '../../../services/message-sms.service';
import {FormControl, FormGroup} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-mensaje',
  templateUrl: './enviar-sms-masivo.component.html',
  styleUrls: ['./enviar-sms-masivo.component.css']
})
export class EnviarSMSMasivoComponent implements OnInit {

  form = new FormGroup({
    sms: new FormControl('MASIVO'),
  });

  public porcentaje: number;
  public csvOK: boolean = false;
  public csv: File;
  uploadPercent: number;


  public makeSMS = {
    client: '',
    number: '',
    plan: '',
    body: '',
  };

  public makeSMSBC = {  
    plan: '',
    body: '',
  };



  constructor(private _messageSMS: MessageSmsService, private router: Router, private location: Location,) { }

  ngOnInit() {

       
    
  }

  goBack() { 
    this.location.back();
    console.log( 'goBack()...' );
  }

  onSubmitOnly(){
    this.formatedSMS()
    .then((number:string) =>{
      this.makeSMS.number = number;
      this._messageSMS.postOnlySMS(this.makeSMS)  
      .subscribe((resolve) =>{
        console.log(resolve);
      })
    })   
  }

  formatedSMS(){
    return new Promise((resolve, reject) =>{
      let number = `+1${this.makeSMS.number}`
      resolve(number)
    })   
  }

  onSubmitBC(){
    console.log(this.makeSMSBC)
    this._messageSMS.postBCSMS(this.makeSMSBC, this.csv)
  }

  uploadFile(event) {   
    const file = event.target.files[0];
    console.log(file); 
    this.porcentaje = 0;
    this.csvOK = true;
    this.csv = file;

  }






}
