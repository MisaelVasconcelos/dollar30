import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[]
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
    if(isNaN(input)){
      this.priceWithIVA = null
      this.priceBeforeIva = null
      console.log("input NaN")
    } else {
      let add30 = input * dolar
      this.priceBeforeIva = (input * dolar).toFixed(2)
      this.priceWithIVA = (add30 + (30*add30)/100).toFixed(2)
    }
    console.log(input, value, this.priceBeforeIva, this.priceWithIVA)

  }
  calculatePriceARS(input){
    let value = parseFloat(input)
    if(isNaN(value)){
      this.priceARS = null
    } else {
      this.priceARS = (value + (30*value)/100).toFixed(2)
    }
  }
}
