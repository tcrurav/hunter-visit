import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapsAnimation, MyLocation, Marker, BaseArrayClass, ILatLng, Environment } from '@ionic-native/google-maps/ngx';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { Visit } from '../models/visit';
import { ApiService } from '../services/api.service';
import { ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  visit: Visit;
  map: GoogleMap;
  loading: any;
  userAnswers: Array<UserAnswer>;
  countNotHunts: number;
  countHunts: number;


  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    private api: ApiService,
    private elementRef: ElementRef) { }

  async ngOnInit() {
    this.visit = this.api.getNowHuntingVisit();
    this.userAnswers = new Array(this.visit.stations.length);

    // The first question is always answered as station 0 is the start point.
    this.userAnswers[0] = { value: this.visit.stations[0].answer, icon: "checkmark" }; 
    this.countHunts = 1;
    this.countNotHunts = this.userAnswers.length - 1;

    for (let i = 1; i < this.userAnswers.length; i++) {
      this.userAnswers[i] = { value: "", icon: "close" };
    }

    await this.platform.ready();
    await this.loadMapSetOfPoints();
  }

  // loadMapAFixedPosition() {
  //   // Environment.setEnv({
  //   //   'API_KEY_FOR_BROWSER_RELEASE': '',
  //   //   'API_KEY_FOR_BROWSER_DEBUG': ''
  //   // });

  //   this.map = GoogleMaps.create('map-canvas', {
  //     camera: {
  //       target: {
  //         lat: 43.0741704,
  //         lng: -89.3809802
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   });
  // }

  reallyLoadMapSetOfPoints() {
    let myPoints: BaseArrayClass<any> = new BaseArrayClass<any>([]);

    let existsAnyPointToMark = false;

    for (let i = 0; i < this.visit.stations.length; i++) {
      if (this.userAnswers[i].icon == "checkmark") {
        existsAnyPointToMark = true;

        myPoints.push({
          position: { lat: this.visit.stations[i].geolocation.lat, lng: this.visit.stations[i].geolocation.lng },
          title: "Station " + i
        });
      }
    }

    if (!existsAnyPointToMark) return;

    let bounds: ILatLng[] = myPoints.map((data: any, idx: number) => {
      console.log(data);
      return data.position;
    });

    if (!this.map) {
      this.map = GoogleMaps.create('map-canvas', {
        camera: {
          target: bounds
        }
      });
    }

    myPoints.forEach((data: any) => {
      // data.disableAutoPan = true;
      let marker: Marker = this.map.addMarkerSync(data);
      marker.showInfoWindow();
      // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      // marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);
    });


  }

  async loadMapSetOfPoints() {

    // The Environment only for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': environment.API_KEY_FOR_BROWSER_RELEASE,
      'API_KEY_FOR_BROWSER_DEBUG': environment.API_KEY_FOR_BROWSER_RELEASE
    });

    if (this.map) {
      this.map.clear().then(() => {
        this.reallyLoadMapSetOfPoints();
      });
    } else {
      this.reallyLoadMapSetOfPoints();
    }
  }

  // onMarkerClick(params: any) {
  //   let marker: Marker = <Marker>params[1];
  //   let iconData: any = marker.get('iconData');
  //   marker.setIcon(iconData);
  // }

  checkAnswers() {
    let localCountNotHunts = 0, localCountHunts = 0;
    for (let i = 0; i < this.userAnswers.length; i++) {
      if (this.userAnswers[i].value.toLowerCase() == this.visit.stations[i].answer.toLowerCase()) {
        this.userAnswers[i].icon = "checkmark";
        localCountHunts++;
      } else {
        this.userAnswers[i].icon = "close";
        localCountNotHunts++;
      }
    }

    this.countNotHunts = localCountNotHunts;
    this.countHunts = localCountHunts;
    console.log(this.countNotHunts);

    this.loadMapSetOfPoints();
  }



  // async onButtonClick() {
  //   this.map.clear();

  //   this.loading = await this.loadingCtrl.create({
  //     message: 'Please wait...'
  //   });
  //   await this.loading.present();

  //   // Get the location of you
  //   this.map.getMyLocation().then((location: MyLocation) => {
  //     this.loading.dismiss();
  //     console.log(JSON.stringify(location, null, 2));

  //     // Move the map camera to the location with animation
  //     this.map.animateCamera({
  //       target: location.latLng,
  //       zoom: 17,
  //       tilt: 30
  //     });

  //     // add a marker
  //     let marker: Marker = this.map.addMarkerSync({
  //       title: '@ionic-native/google-maps plugin!',
  //       snippet: 'This plugin is awesome!',
  //       position: location.latLng,
  //       animation: GoogleMapsAnimation.BOUNCE
  //     });

  //     // show the infoWindow
  //     marker.showInfoWindow();

  //     // If clicked it, display the alert
  //     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //       this.showToast('clicked!');
  //     });

  //   })
  //     .catch(err => {
  //       this.loading.dismiss();
  //       this.showToast(err.error_message);
  //     });
  // }

  // async showToast(message: string) {
  //   let toast = await this.toastCtrl.create({
  //     message: message,
  //     duration: 2000,
  //     position: 'middle'
  //   });

  //   toast.present();
  // }
}
