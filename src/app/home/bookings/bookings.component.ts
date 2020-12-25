import { Component,Input, OnInit } from '@angular/core';
import { BookingsService, bookingDetails  } from 'src/app/services/bookings/bookings.service';
import { IonSlides, AlertController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';
//import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  @Input() flag: number

  booking: bookingDetails = 
    {
       
  user_id: 1,
  place_id: 0,
  phone_number: '',
  visit_arrival: '',
  visit_departure: '',
  adults: 0,
  chilren: 0,
  status: 'waiting'
    };

   

  constructor(private bookingsService: BookingsService,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private userService: UserService ,
             //private loginComponent: LoginComponent
              ) { }

  ngOnInit() {
    
    
  }

  
  
  async book() {
   // this.booking.user_id=this.loginComponent.credentials.id;
    this.booking.place_id=this.flag;
    this.bookingsService.processBookings(this.booking).subscribe();

    const alert = await this.alertCtrl.create({
      animated: true,
      backdropDismiss: true,
      keyboardClose: true,
      translucent: true,
      cssClass: 'my-custom',
      header: 'Booked!',
      message: 'Thank you for booking!',
      buttons: ['OK']
     
    });

    alert.present().then(() => {
       this.modalCtrl.dismiss();
     });
    console.log('Booking Successful');
  } 

  alert() {
    
  }

}
