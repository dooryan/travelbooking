import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places/places.service';
import { NavParams } from '@ionic/angular';
//import { IonRouterOutlet } from '@ionic/angular';
import { DetailsComponent } from 'src/app/home/explore/destinations/details/details.component';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent implements OnInit {
 
  @Input() tag: string
 // public tag = this.navParams.get('tag');
  
  constructor(public modalCtrl: ModalController, 
              private placesService: PlacesService,
              private navParams: NavParams, 
              //private routerOutlet: IonRouterOutlet
              ) { }


  ngOnInit() {
    console.log(this.tag);
    this.getPlaces(this.tag);
    
  }

  
  placeList = []
   

  getPlaces(name){
      if (name=="beach") {
        this.placesService.getBeach().subscribe(
          beach => {
            this.placeList = beach;
          }
        )
      } else if (name=="inland") {
        this.placesService.getInland().subscribe(
          inland => {
            this.placeList= inland;
          }
        )
      }  else if (name=="cave") {
        this.placesService.getCave().subscribe(
          cave => {
            this.placeList= cave;
          }
        )
      }  else if (name=="zoo") {
      this.placesService.getZoo().subscribe(
        zoo => {
          this.placeList= zoo;
        }
      )
    }
  }

  
  closeModal(){
    this.modalCtrl.dismiss();
  }


  async openDetails(id) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
     // presentingElement: this.routerOutlet.nativeEl,
      componentProps: { 
        flag: id,

        
      }
    });
     await modal.present();
  }

}
