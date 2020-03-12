import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[]
})
export class HomePage {
  priceBeforeIva: any;
  priceWithIVA: any;
  priceARS: string;
  dolar:any = 62.58
  hidden: boolean;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController
    ) {
  }
  hideorshow(){
    if(this.hidden == false){
      this.hidden = true
    } else if (this.hidden ==  true){
      this.hidden = false
    } 
  }
  calculatePrice(value){
    let input:number = parseFloat(value)
    if(isNaN(input)){
      this.priceWithIVA = null
      this.priceBeforeIva = null
      console.log("input NaN")
    } else {
      let add30 = input * this.dolar
      this.priceBeforeIva = (input * this.dolar).toFixed(2)
      this.priceWithIVA = (add30 + (30*add30)/100).toFixed(2)
      this.priceARS = (input + (30*input)/100).toFixed(2)
      if(this.priceBeforeIva == 600) {
      this.weedToast("Bien piola para el g rey ");
      }
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

  report(){
    this.weedToast("Aguante el porro ")
  }
  calculatePriceARS(input){

  }
  setDolarValue(){

  }

  }
