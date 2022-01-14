import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/core/services/room.service';
import { Room } from 'src/app/shared/models/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms!: Room[]
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(rt => {
      this.rooms = rt;
    })
  }

  

}
