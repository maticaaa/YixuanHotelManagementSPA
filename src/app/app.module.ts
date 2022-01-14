import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCardComponent } from './shared/components/customer-card/customer-card.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { RoomComponent } from './room/room.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { RoomModule } from './room/room.module';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { RoomtypeAvailableComponent } from './roomtype/roomtype-available/roomtype-available.component';
// import { HeaderComponent } from './core/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    CustomerCardComponent,
    CustomerDetailsComponent,
    RoomComponent,
    RoomDetailsComponent,
    ServiceComponent,
    ServiceDetailsComponent,
    HeaderComponent,
    RoomtypeAvailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
