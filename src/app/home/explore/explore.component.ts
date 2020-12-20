import { Component, Input, OnInit } from '@angular/core';
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

  
  async pModal1() {
    const modal = await this.modalController.create({
      component: DestinationsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
     // presentingElement: this.routerOutlet.nativeEl,
      componentProps: { 
        tag: "beach",
        
      }
    });
     await modal.present();
  }
  
  
  async pModal2() {
    const modal = await this.modalController.create({
      component: DestinationsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
     // presentingElement: this.routerOutlet.nativeEl,
      componentProps: { 
        tag: "inland",
        
      }
    });
     await modal.present();
  }

   
  async pModal3() {
    const modal = await this.modalController.create({
      component: DestinationsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
     // presentingElement: this.routerOutlet.nativeEl,
      componentProps: { 
        tag: "botanical",
        
      }
    });
     await modal.present();
  }

  async pModal4() {
    const modal = await this.modalController.create({
      component: DestinationsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
     // presentingElement: this.routerOutlet.nativeEl,
      componentProps: { 
        tag: "cave",
        
      }
    });
     await modal.present();
  }
  async pModal5() {
    const modal = await this.modalController.create({
      component: DestinationsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      //presentingElement: this.routerOutlet.nativeEl,
      componentProps: { 
        tag: "zoo",
        
      }
    });
     await modal.present();
  }

  async pModal6() {
    const modal = await this.modalController.create({
      component: DestinationsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
     // presentingElement: this.routerOutlet.nativeEl,
      componentProps: { 
        tag: "mountain",
        
      }
    });
     await modal.present();
  }


}
