import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlacesService } from '../places/places.service';


export interface bookingDetails{
  
  user_id: number
  place_id: number
  phone_number: string
  visit_arrival: string
  visit_departure: string
  adults: number
  chilren: number
  status: string

}
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  bookingDetails: bookingDetails[] = []
  placeList = [] 
  bookList = []

  constructor(private http : HttpClient,
              private placeService: PlacesService) { }



    processBookings(book: bookingDetails): Observable<any>{
      return this.http.post('http://localhost:8000/api/processBookings', book, {
        headers: {'Content-Type': 'application/json'}})
            }


}
