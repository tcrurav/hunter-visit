import { Component, OnInit } from '@angular/core';
import { Visit } from '../models/visit';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  visits: Array<Visit>;
  language: string = "en";
  stars: number = 0;

  constructor(private api: ApiService, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.api.getAllVisits().subscribe(visits => {
      this.visits = visits;
      this.api.setVisits(this.visits); //This should be refactored!!!
    });

    this.storage.get('stars').then((val) => {
      console.log('stars', val);
      this.stars = val;
    }).catch(error => {
      console.log("error: ", error);
    });
  }

  startHunting(idVisit: number) {
    console.log(idVisit);

    this.api.setNowHuntingVisit(idVisit);

    this.router.navigateByUrl('/visit');
  }

  addStar() {
    // console.log("add");
    if (this.stars < 5) {
      this.stars++;
      this.storage.set('stars', this.stars);
    }
    // console.log(this.stars);
  }

  removeStar() {
    // console.log("remove");
    if (this.stars > 0) {
      this.stars--;
      this.storage.set('stars', this.stars);
    }
    // console.log(this.stars);
  }

}
