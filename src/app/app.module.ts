import { NgModule, 
  // CUSTOM_ELEMENTS_SCHEMA 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    YoutubeVideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
