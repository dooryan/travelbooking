import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';
import { IonRouterOutlet } from '@ionic/angular';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {

  constructor(private router: Router,
              private modalController: ModalController,
            
              private routerOutlet: IonRouterOutlet
              ) { }

  ngOnInit() {}


  

  async presentModal() {
    const modal = await this.modalController.create({
      component: DestinationsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
     await modal.present();
  
  } 


}
