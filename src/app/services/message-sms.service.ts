import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export interface History {
  number: string;
  client: string;
  plan: string;
  body: string; 
  send_message: Date;
}

@Injectable({
  providedIn: 'root'
})
export class MessageSmsService {

  apiUrl = "https://api-crm-control-diamante.herokuapp.com/api/" 

  constructor(private http: HttpClient) { }

   getHistory(): Observable<History[]>  {
    console.log(this.apiUrl + 'get-sms')
   return this.http.get<History[]>(this.apiUrl + 'get-sms');   
  }

  postOnlySMS(makeSMS: any){
    console.log(makeSMS); 
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpHeaders();
    body = body.set('number', makeSMS.number);
    body = body.set('password', makeSMS.client);
    body = body.set('plan', makeSMS.plan);
    body = body.set('body', makeSMS.body);
    return this.http.post(this.apiUrl + 'send-sms-only', body, {headers: myheader});
  }

  postBCSMS(makeSMS: any, file:File){
    console.log(makeSMS);
    console.log(file);
  }
}
