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
    // this.route.queryParams.subscribe(params => {
    //   if (params && params.visit) {
    //     this.visit = JSON.parse(params.visit);
    //   }
    //   // console.log(this.visit);
    // });
  }

  answerTheQuestion(){
    this.router.navigateByUrl('/geolocation');
  }

  launchVR(idStation: number){
    console.log("launchVR: ${idStation}" + idStation);
    this.api.setNowHuntingStation(idStation);
    this.router.navigateByUrl('/show-vr');
  }

}
