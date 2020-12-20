import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places/places.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input() flag: any
  placeDetail =[]
  pList = []

  constructor(private placesService: PlacesService,
              private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.flag);
    this.getDetail();
    console.log(this.placeDetail[0]);
    
  }


 /* 
  showDetail() {
    this.placeDetail = JSON.parse(localStorage.getItem('place'));
    console.log(this.placeDetail);
  } */


  getDetail() {
  
    this.placesService.getAllPlaces().subscribe(
      places => {
        this.pList= places;
      }
    ) 
      //let f = this.flag;
      for(let index = 0; index < this.pList.length; index++) {
           if(this.flag == this.pList[index].id){
                this.placeDetail.unshift(this.pList[index])

               //localStorage.setItem('place', JSON.stringify(this.placeDetail));
       
          }
    
    }
  }



    closeModal(){
        this.modalController.dismiss();
      }


}