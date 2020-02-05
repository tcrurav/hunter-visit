import { Injectable } from '@angular/core';
import { Visit } from '../models/visit';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  visits: Array<Visit>;
  nowHuntingVisit: number = 0;
  nowHuntingStation: number = 0;

  constructor() { }

  setVisits(visits: Array<Visit>) {
    this.visits = visits;
  }

  getNowHuntingVisit() {
    return this.visits[this.nowHuntingVisit];
  }

  setNowHuntingVisit(idVisit: number) {
    this.nowHuntingVisit = idVisit;
  }

  getNowHuntingStation() {
    return this.visits[this.nowHuntingVisit].stations[this.nowHuntingStation];
  }

  setNowHuntingStation(idStation: number) {
    this.nowHuntingStation = idStation;
  }

  getAllVisits(): Observable<Array<Visit>> {

    // In the next version it should be a call to firebase or whatever other Api implementation
    return of(
      [
        {
          "name": "Arucas",
          "description": "The municipality is located in the north of the island of Gran Canaria, at a distance of 17 kilometers from the island capital. It borders the municipalities of Moya, Firgas, Teror, and Las Palmas de Gran Canaria.",
          "stations": [
            {
              "question": "The church of Arucas was built imitating an architectural style prior to the time of its construction. What architectural style are we talking about?",
              "answer": "Neo-gothic",
              "geolocation": { "lat": 28.118692299999992, "lng": -15.523169999999936 },
              "photos": [
                {
                  "url": "arucas_1.jpg",
                  "description": "Arucas Cathedral"
                },
                {
                  "url": "arucas_2.jpg",
                  "description": "Portico"
                }
              ],
              "vrs": []
            },
            {
              "question": "The beginnings of this factory date back to 1883. The sugar machinery came from Glasgow (Scotland). What's the name of the famous rum brand?",
              "answer": "Arehucas",
              "geolocation": { "lat": 28.12, "lng": -15.53 },
              "photos": [
                {
                  "url": "arucas_5.jpg",
                  "description": "Rum destillery"
                }
              ],
              "vrs": []
            },
            {
              "question": "The construction of the church has several accesses from its four sides. How many steps are there in total in all accesses?",
              "answer": "23",
              "geolocation": { "lat": 28.118692299999991, "lng": -15.52317 },
              "photos": [
                {
                  "url": "arucas_3.jpg",
                  "description": "Steps of the central door"
                },
                {
                  "url": "arucas_4.jpg",
                  "description": "Side Door Steps"
                }
              ],
              "vrs": []
            }
          ]
        },
        {
          "name": "Telde",
          "description": "The City of Telde is located in the southeast of the Island of Gran Canaria. Its more than six hundred and fifty years of existence gives it such a cluster of milestones that far exceeds any other. In 1351, after the promulgation of the pontifical bull 'Coelestis Rex Regum', the first diocese of the Fortunate was created on its site and sent to it with the title of City.",
          "stations": [
            {
              "question": "The Church of San Juan stands out for its Main Chapel, a work composed of two altarpieces, one Gothic-Flemish and another baroque from the 18th century that frames the previous one. In it is the crucified Christ, imported from America. What food is the Christ of Telde made of?",
              "answer": "corn",
              "geolocation": { "lat": 28.002991, "lng": -15.4164969 },
              "photos": [
                {
                  "url": "telde_1.jpg",
                  "description": "Church of San Juan"
                }
              ],
              "vrs": [
                {
                  "url": "telde_sanjuan_360.jpg",
                  "text": "San Juan Bautista, Telde" 
                }
              ],
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=9aEzzDMMTFE",
                  "text": "¡TOUR VIRTUAL POR TELDE! BASÍLICA DE SAN JUAN BAUTISTA." 
                }
              ]
            },
            {
              "question": "The Mountain of the Four Doors is a group of caves that were inhabited by the aborigines. According to historians they would have served as accommodation and workplace for embalmers. What's the generic name of a king in the prehispanic period in Gran Canaria?",
              "answer": "Guanarteme",
              "geolocation": { "lat": 27.9589757, "lng": -15.4205491 },
              "photos": [
                {
                  "url": "telde_2.jpg",
                  "description": "Cuatro Puertas"
                }
              ],
              "vrs": []
            },
            {
              "question": "The San Francisco neighborhood is characterized by low houses with gable roofs and long whitewashed walls that communicate with each other through streets that are paved in a particular way. In this neighborhood it is possible to visit the Temple of San Francisco, in which the stony altarpieces of Santa Rita de Casia, Santo Domingo de Guzmán and Santa Lucía stand out. How many towers has the temple of San Francisco?",
              "answer": "1",
              "geolocation": { "lat": 27.9996032, "lng": -15.420325 },
              "photos": [
                {
                  "url": "telde_3.jpg",
                  "description": "The temple of San Francisco"
                }
              ],
              "vrs": []
            }
          ]
        }
      ]
    )
  }
}
