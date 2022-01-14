import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from 'src/app/shared/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    // call our API, using HttpClient (XMLHttpRequest) to make GET request
    // HttpClient class comes from HttpClientModule (Angular Team created for us to use)
    // import HttpClientModule inside AppModule

    return this.http.get<Room[]>(environment.apiBaseUrl + 'rooms');
  }


  getRoomDetails(id: number) : Observable<Room> {
    return this.http.get<Room>(environment.apiBaseUrl + 'rooms/' + id);
  }
}
