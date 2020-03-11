import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  priceBeforeIva: any;
  priceWithIVA: any;
  priceARS: string;
  constructor(
    public navCtrl: NavController,
    ) {

  }
  calculatePrice(value){
    let dolar:number = 62.68
    let input:number = parseFloat(value)
    this.priceBeforeIva = (input * dolar).toFixed(2)
    let priceNoIva = input * dolar
    this.priceWithIVA = (priceNoIva + (30*priceNoIva)/100).toFixed(2)
    console.log(input, value, this.priceBeforeIva, this.priceWithIVA)
  }
  calculatePriceARS(input){
    let value = parseFloat(input)
    this.priceARS = (value + (30*value)/100).toFixed(2)
  }
}
