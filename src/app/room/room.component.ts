import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../core/services/room.service';
import { Room } from '../shared/models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms!: Room[]
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(r => {
      this.rooms = r;
    });
  }

}
