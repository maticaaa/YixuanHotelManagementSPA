import { Component, OnInit } from '@angular/core';
import { RoomtypeService } from 'src/app/core/services/roomtype.service';
import { Roomtype } from 'src/app/shared/models/roomType';

@Component({
  selector: 'app-roomtype-available',
  templateUrl: './roomtype-available.component.html',
  styleUrls: ['./roomtype-available.component.css']
})
export class RoomtypeAvailableComponent implements OnInit {

  availableRoomTypes!: Roomtype[]
  constructor(private roomTypeService: RoomtypeService) { }

  ngOnInit(): void {
    this.roomTypeService.getAllAvailableRoomTypes().subscribe(art => {
      this.availableRoomTypes = art;
      console.table(this.availableRoomTypes);
    })
  }

}
