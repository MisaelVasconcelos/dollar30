import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BcraProvider } from '../../providers/bcra/bcra';
import { Storage } from '@ionic/storage';
import { Constants } from '../../app/app.constants';
import { ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {

  priceBeforeIva: any;
  priceWithIVA: any;
  priceARS: string;
  dolar: any
  hidden: boolean = false
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public bcraProvider: BcraProvider,
    public storage: Storage,
  ) {
    this.getDolarValue()
  }
  async getDolarValue() {
    let dolar = await this.storage.get(Constants.DOLARVALUE)
    this.dolar = dolar.value.USD_ARS
  }
  hideorshow() {
    if (this.hidden == false) {
      this.hidden = true
    } else if (this.hidden == true) {
      this.hidden = false
    }
  }
  calculatePrice(value) {
    let input: number = parseFloat(value)
    if (isNaN(input)) {
      this.priceWithIVA = null
      this.priceBeforeIva = null
    } else {
      let add30 = input * this.dolar
      this.priceBeforeIva = (input * this.dolar).toFixed(2)
      this.priceWithIVA = (add30 + (30 * add30) / 100).toFixed(2)
      this.priceARS = (input + (30 * input) / 100).toFixed(2)
      console.log(input, value, this.priceBeforeIva, this.priceWithIVA)
    }
  }

  weedToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: '<3'
    });
    toast.present();
  }

  // report(){
  //   this.weedToast("Aguante el porro ")
  // }
  // setDolarValue(){

  // }
  openModal(){
   this.weedToast("El valor del dolar es de: "+this.dolar) 
  }
}
