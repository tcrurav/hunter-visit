import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visit } from '../models/visit';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.page.html',
  styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  visit: Visit;

  constructor(
    private router: Router,
    private api: ApiService) { }

  ngOnInit() {
    this.visit = this.api.getNowHuntingVisit();
    console.log(this.visit);
  }

  answerTheQuestion(){
    // UNCOMMENT this to use Google maps instead of Leaflet
    // this.router.navigateByUrl('/geolocation'); //Google maps version
    
    this.router.navigateByUrl('/geolocation-leaflet'); //Leaflet version
  }

  launchVR(idStation: number){
    console.log("launchVR: ${idStation}" + idStation);
    this.api.setNowHuntingStation(idStation);
    this.router.navigateByUrl('/show-vr');
  }

}
