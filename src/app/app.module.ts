import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule} from "@angular/common/http";
import { BcraProvider } from '../providers/bcra/bcra';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BcraProvider,
  ]
})
export class AppModule {}
