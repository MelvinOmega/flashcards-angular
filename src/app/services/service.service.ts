import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }
  url = 'https://flash-cards-rest-api.herokuapp.com/api/';
  
  getSubjects() {
    return this.http.get(this.url + 'subjects/');
  }


  
}
