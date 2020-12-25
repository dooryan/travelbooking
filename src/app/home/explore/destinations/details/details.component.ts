import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingsComponent } from 'src/app/home/bookings/bookings.component';
import { placeDetail, PlacesService } from 'src/app/services/places/places.service';
import { threadId } from 'worker_threads';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input() flag: number
  
 

   
  p = [ ]
  pl: any
  pList = []

  
  
  num: number
  

  constructor(private placesService: PlacesService,
              private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.flag);
    this.getPlacebyID();
  }


  
   
   


    getPlacebyID() {
      this.placesService.getAllPlaces().subscribe(
        places => {
          this.p=places;
        console.log(places);

        for(let i=0; i<places.length; i++) {
          if(this.flag==this.p[i].id) {
              this.pList=this.p[i];
              console.log(this.pList)
          }}})
    }

    
    async openBookings() {
      const modal = await this.modalController.create({
        component: BookingsComponent,
        cssClass: 'my-custom-css',
        swipeToClose: true,
       // presentingElement: this.routerOutlet.nativeEl,
        componentProps: { 
          flag: this.flag,  
        } });
       await modal.present();
    }

    
 



    closeModal(){
        this.modalController.dismiss();
      }


}