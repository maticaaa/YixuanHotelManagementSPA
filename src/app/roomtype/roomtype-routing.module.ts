import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from '../room/room-list/room-list.component';
import { RoomtypeAvailableComponent } from './roomtype-available/roomtype-available.component';
import { RoomtypeListComponent } from './roomtype-list/roomtype-list.component';
import { RoomtypeComponent } from './roomtype.component';

const routes: Routes = [
  { path: "", component: RoomtypeComponent, 
    children: [
      {path: 'available', component: RoomtypeAvailableComponent},
      {path: '', component: RoomtypeListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomtypeRoutingModule { }
