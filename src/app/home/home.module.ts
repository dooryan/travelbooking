import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';
import { ExploreComponent } from './explore/explore.component';
import { DestinationsComponent } from './explore/destinations/destinations.component';
import { HomePageRoutingModule } from './home-routing.module';
import { DetailsComponent } from './explore/destinations/details/details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AccountComponent, 
                MainComponent, ExploreComponent, 
                DestinationsComponent, DetailsComponent]
})
export class HomePageModule {}
