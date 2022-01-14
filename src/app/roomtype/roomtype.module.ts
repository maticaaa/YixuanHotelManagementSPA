import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomtypeRoutingModule } from './roomtype-routing.module';
import { RoomtypeComponent } from './roomtype.component';
import { RoomtypeListComponent } from './roomtype-list/roomtype-list.component';


@NgModule({
  declarations: [
    RoomtypeComponent,
    RoomtypeListComponent,
  ],
  imports: [
    CommonModule,
    RoomtypeRoutingModule,
  ]
})
export class RoomtypeModule { }
