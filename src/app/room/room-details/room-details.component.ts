import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';
import { Room } from 'src/app/shared/models/room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: number = 0;
  room!: Room;
  constructor(private activeRoute: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(p =>{
      this.id = Number(p.get('id'));
        console.log('movieId= ' + this.id);
        this.roomService.getRoomDetails(this.id).subscribe(
          r => {
            this.room = r;
          }
        )
    });
  }

}
