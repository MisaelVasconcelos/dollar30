import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  priceBeforeIva: any;
  priceWithIVA: any;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController
    ) {

  }
  calculatePrice(value){
    let dolar:number = 62.68
    let input:number = parseFloat(value)
    this.priceBeforeIva = (input * dolar).toFixed(2)
    let priceNoIva = input * dolar
    this.priceWithIVA = (priceNoIva + (30*priceNoIva)/100).toFixed(2)
    if(this.priceBeforeIva == 600) {
      this.weedToast();
    }
    console.log(input, value, this.priceBeforeIva, this.priceWithIVA)
  }

  weedToast() {
    const toast = this.toastCtrl.create({
      message: 'Te alcanza para el g rey!!',
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: '<3'
    });
    toast.present();
  }
}
