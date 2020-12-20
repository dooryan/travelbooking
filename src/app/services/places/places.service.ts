import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http : HttpClient) { }



  
  public getAllPlaces() : Observable<any>{
    return this.http.get('http://localhost:8000/api/getAllPlaces',{
      headers: { 'Content-Type': 'application/json'}
    })
  }

public getBeach() : Observable<any>{
    return this.http.get('http://localhost:8000/api/getAllPlacesbyCategory/1',{
      headers: { 'Content-Type': 'application/json'}
    })
  }

  public getInland() : Observable<any>{
    return this.http.get('http://localhost:8000/api/getAllPlacesbyCategory/2',{
  headers: { 'Content-Type': 'application/json'}
})
}

public getBotanical() : Observable<any>{
  return this.http.get('http://localhost:8000/api/getAllPlacesbyCategory/3',{
headers: { 'Content-Type': 'application/json'}
})
}


public getCave() : Observable<any>{
  return this.http.get('http://localhost:8000/api/getAllPlacesbyCategory/4',{
headers: { 'Content-Type': 'application/json'}
})
}

public getZoo() : Observable<any>{
  return this.http.get('http://localhost:8000/api/getAllPlacesbyCategory/5',{
headers: { 'Content-Type': 'application/json'}
})
}

public getMountain() : Observable<any>{
  return this.http.get('http://localhost:8000/api/getAllPlacesbyCategory/6',{
headers: { 'Content-Type': 'application/json'}
})
}




  }



    




