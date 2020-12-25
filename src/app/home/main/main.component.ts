import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.getAllTop();
    this.getTopBeach();
    this.getTopInland();
    this.getTopBotanical();
  }

top = []
il = []
bot= []
bc= []


  getAllTop() {
    this.placesService.getAllTop().subscribe(
      top => {
        this.top = top;
      }
    )
  }


  getTopBeach() {
    this.placesService.getTopBeach().subscribe(
      beach => {
        this.bc = beach;
      }
    )
  }

  getTopInland() {
    this.placesService.getTopInland().subscribe(
      il => {
        this.il = il;
      }
    )
  }

  getTopBotanical() {
    this.placesService.getTopBotanical().subscribe(
      bot => {
        this.bot = bot;
      }
    )
  }
  
}
