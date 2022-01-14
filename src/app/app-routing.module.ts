import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "customers",
    loadChildren: () => import ("./customer/customer.module").then(mod => mod.CustomerModule)
  },
  { path: "rooms",
    loadChildren: () => import ("./room/room.module").then(mod => mod.RoomModule)
  },
  { path: "roomtypes",
    loadChildren: () => import ("./roomtype/roomtype.module").then(mod => mod.RoomtypeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
