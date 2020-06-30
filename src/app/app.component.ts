import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { BcraProvider } from '../providers/bcra/bcra';
import { Constants } from './app.constants';
import * as moment from 'moment'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, bcra: BcraProvider, public storage: Storage) {
    platform.ready().then(async () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let value = await this.storage.get(Constants.DOLARVALUE)
      console.log(value, "VALUE FROM LOCALSTORAGE.GET")
      if (!value) {
        let dolar =
        {
          value: await bcra.getvalues(),
          updateDate: moment().format()
        }
        await this.storage.set(Constants.DOLARVALUE, dolar)
        statusBar.styleDefault();
        splashScreen.hide();
      } else if (value) {
        if (moment().diff(moment(value.updateDate), "days") >= 1) {
          let dolar = 
          {value: await bcra.getvalues(),
          updateDate: moment().format()}
          await this.storage.set(Constants.DOLARVALUE, dolar)
          statusBar.styleDefault();
          splashScreen.hide();
        }else{
          statusBar.styleDefault();
          splashScreen.hide();
        }
      }
    });
  }
}

