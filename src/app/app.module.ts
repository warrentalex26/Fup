import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { PictureUtils } from '../services/pictureUtils.service';
import { Camera } from '@ionic-native/camera';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyA1rpmuyXyjG5awRH0IQjV1OO9ijWUPmy4",
  authDomain: "subirimagenesionic3.firebaseapp.com",
  databaseURL: "https://subirimagenesionic3.firebaseio.com",

  storageBucket: "subirimagenesionic3.appspot.com",
  messagingSenderId: "1020599272499"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    PictureUtils,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
