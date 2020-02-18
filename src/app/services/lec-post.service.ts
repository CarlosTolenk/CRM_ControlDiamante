import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'https://lec.events/wp-json/wp/v2';

@Injectable({
  providedIn: 'root'
})
export class LecEventsService {


  constructor(private http: HttpClient) {
  }

  public getAllEvents(): Observable<any> {
    return this.http.get(`${BASE_URL}/posts`);
  }

  getImageById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/media/${id}`);
  }
}
