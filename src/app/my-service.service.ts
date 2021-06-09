import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }


  url='http://www.omdbapi.com/?apikey=2a127d67&s=';
  url1='http://www.omdbapi.com/?apikey=2a127d67&i=';

dbId:any='';
details:any=[];
  getMovie(name: any): Observable<any>{
      return this.http.get(this.url + name);
  }

  getDetails(id: any): Observable<any>{
     return this.http.get(this.url1 + id);
  }
}
