import { Component, OnInit } from '@angular/core';
import { Visit } from '../models/visit';
import { ApiService } from '../services/api.service';
import { Map, tileLayer, marker, LatLng } from 'leaflet';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-geolocation-leaflet',
  templateUrl: './geolocation-leaflet.page.html',
  styleUrls: ['./geolocation-leaflet.page.scss'],
})
export class GeolocationLeafletPage implements OnInit {

  visit: Visit;
  map: Map;
  newMarker: any;
  loading: any;
  userAnswers: Array<UserAnswer>;
  countNotHunts: number;
  countHunts: number;

  constructor(
    private platform: Platform,
    private api: ApiService) { }

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

    // await this.platform.ready();
    // await this.loadMapSetOfPoints();
  }

  ionViewDidEnter() {
    this.loadMapSetOfPoints();
  }

  // locatePosition() {
  //   this.map.locate({ setView: true }).on("locationfound", (e: any) => {
  //     let newMarker = marker([e.latitude, e.longitude], {
  //       draggable:
  //         false
  //     }).addTo(this.map);
  //     newMarker.bindPopup("You are located here!").openPopup();
  //   });
  // }

  locatePosition() {
    this.map.locate({ setView: true, watch: true, maxZoom: 16 }).on("locationfound", (e: any) => {
      console.log(this.newMarker);
      if(this.newMarker != undefined){
        this.newMarker.setLatLng(e.latlng);
      } else {
        this.newMarker = marker([e.latitude, e.longitude], {
          draggable:
            false
        }).addTo(this.map);
      }
      this.newMarker.bindPopup("You are located here!").openPopup();
    });
  }

  reallyLoadMapSetOfPoints() {

    if (this.map) {
      console.log("borrar mapa")
      this.map.remove();
    }

    this.map = new Map("map-canvas");
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ""
    }).addTo(this.map); // This line is added to add the Tile Layer to our map

    // set location at the first station
    this.map.setView([
      this.visit.stations[0].geolocation.lat,
      this.visit.stations[0].geolocation.lng], 13);

    for (let i = 0; i < this.visit.stations.length; i++) {
      if (this.userAnswers[i].icon == "checkmark") {
        marker([
          this.visit.stations[i].geolocation.lat,
          this.visit.stations[i].geolocation.lng],
          { draggable: false }
        )
          .addTo(this.map)
          .bindPopup("Station " + i).openPopup();
      }
    }
  }

  moveToLatLong(station_id) {
    if (this.userAnswers[station_id].icon == 'checkmark') {
      this.moveTo(this.visit.stations[station_id].geolocation.lat,
        this.visit.stations[station_id].geolocation.lng);
    }
  }

  moveTo(lat, lng) {
    this.map.panTo(new LatLng(lat, lng));
  }

  async loadMapSetOfPoints() {
    this.reallyLoadMapSetOfPoints();
  }

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
}
