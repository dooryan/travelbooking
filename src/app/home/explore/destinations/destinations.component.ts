import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}


  closeModal(){
    this.modalCtrl.dismiss();
  }
}
