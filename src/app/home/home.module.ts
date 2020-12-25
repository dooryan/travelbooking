import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http'; 
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';
import { ExploreComponent } from './explore/explore.component';
import { DestinationsComponent } from './explore/destinations/destinations.component';
import { HomePageRoutingModule } from './home-routing.module';
import { DetailsComponent } from './explore/destinations/details/details.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
  //  AppRoutingModule
  ],
  declarations: [HomePage, AccountComponent, 
                MainComponent, ExploreComponent, 
                DestinationsComponent, DetailsComponent, BookingsComponent ]
})
export class HomePageModule {}
