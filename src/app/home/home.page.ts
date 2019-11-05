import { Component, OnInit } from '@angular/core';
import { Visit } from '../models/visit';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  visits: Array<Visit>;
  language: string = "en";

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(){
    this.api.getAllVisits().subscribe(visits => {
      this.visits = visits;
      this.api.setVisits(this.visits); //This should be refactored!!!
    });
  }

  startHunting(idVisit: number){
    console.log(idVisit);

    this.api.setNowHuntingVisit(idVisit);

    this.router.navigateByUrl('/visit');
  }

}
