import { Component, OnInit } from '@angular/core';
import { RoomtypeService } from 'src/app/core/services/roomtype.service';
import { Roomtype } from 'src/app/shared/models/roomType';

@Component({
  selector: 'app-roomtype-list',
  templateUrl: './roomtype-list.component.html',
  styleUrls: ['./roomtype-list.component.css']
})
export class RoomtypeListComponent implements OnInit {

  roomTypes!: Roomtype[]
  constructor(private roomTypeService: RoomtypeService) { }

  ngOnInit(): void {
    this.roomTypeService.getAllRoomTypes().subscribe(rt => {
      this.roomTypes = rt;
      console.table(this.roomTypes);
    })
  }

}
