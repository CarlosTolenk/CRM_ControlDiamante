import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export interface Payment {
  number: string;
  suscription: string;
  cedula: string;
  movil: string; 
  sku: Date;
  isActive: boolean;
  _id: string,
  amount: number;
  identificacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class PayPalPaymentsService {

  apiUrl = "https://api-controldiamante.xyz/api/" 
  token = 'dsd dsd eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOnsidXNlcm5hbWUiOiJDYXJsb3MgVG9sZW50aW5vIiwicm9sZSI6IlNoaWZ0In0sImlhdCI6MTU0NzMzNjQ3NCwiZXhwIjoxNTQ3NDIyODc0fQ.6AdJeWgpYtnYu7dXiTjKtNlu8pT54tzC5EiEnC8tpbw';

  constructor(private http: HttpClient) { }

   getPaymentHistory(): Observable<Payment[]>  { 
    let myheader = new HttpHeaders;
    myheader.set('Authorization', this.token)
    return this.http.get<Payment[]>(this.apiUrl + 'get-payment-paypal', {headers: myheader});   
  }

  getPaymentWhere(day: any): Observable<Payment[]>  {  
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams(); 
    body = body.set('day', day); 
    return this.http.post<Payment[]>(this.apiUrl + 'get-payment-paypal-where', body, {headers: myheader});   
  }

  putPaymentStatus(status: any, id: string): Observable<Payment[]>  {  
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams(); 
    body = body.set('isActive', status); 
    return this.http.put<Payment[]>(this.apiUrl + `put-payment-paypal/${id}`, body, {headers: myheader});   
  }


  //put-payment-paypal/:id



//   postOnlySMS(makeSMS: any){
//     console.log(makeSMS); 
//     const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
//     let body = new HttpHeaders();
//     body = body.set('number', makeSMS.number);
//     body = body.set('password', makeSMS.client);
//     body = body.set('plan', makeSMS.plan);
//     body = body.set('body', makeSMS.body);
//     return this.http.post(this.apiUrl + 'send-sms-only', body, {headers: myheader});
//   }

//   postBCSMS(makeSMS: any, file:File){
//     console.log(makeSMS);
//     console.log(file);
//   }
}
