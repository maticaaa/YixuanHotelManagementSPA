import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roomtype } from 'src/app/shared/models/roomType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomtypeService {

  constructor(private http: HttpClient) { }

  getAllRoomTypes(): Observable<Roomtype[]>{
    return this.http.get<Roomtype[]>(environment.apiBaseUrl + 'RoomTypes');
  }

  getAllAvailableRoomTypes(): Observable<Roomtype[]>{
    return this.http.get<Roomtype[]>(environment.apiBaseUrl + 'RoomTypes/Available');
  }
}
