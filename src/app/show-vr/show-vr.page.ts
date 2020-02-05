import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-show-vr',
  templateUrl: './show-vr.page.html',
  styleUrls: ['./show-vr.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowVrPage implements OnInit {
  @ViewChild('mySky', { static: true }) mysky: ElementRef;
  @ViewChild('myText', { static: true }) mytext: ElementRef;

  constructor(private modalCtrl: ModalController, private api: ApiService,
    public loading: LoadingService) { }

  ngOnInit() {
    let myVr = this.api.getNowHuntingStation().vrs[0];
    this.mysky.nativeElement.setAttribute('src', "/assets/vr/img/" + myVr.url);
    this.mytext.nativeElement.setAttribute('value', myVr.text);
    console.log(myVr);

    //this.detectWhenAFrameLoaded();
  }

  // async detectWhenAFrameLoaded() {

  //   this.loading.present();

  //   // var self = this;

  //   document.getElementById('myscene').addEventListener('loaded', function () {
  //     console.log('I was loaded!');
  //     this.setAttribute('color', 'yellow');
  //     this.loading.dismiss();
  //   });
  //   console.log('under loaded!');
  // }

  // presentLoadingDefault() {
  //   this.loadingCtrl.create({
  //     message: 'loading...'
  //   }).then( a => {
  //     this.loading = a;
  //     a.present();
  //   });

    

  //   // setTimeout(() => {
  //   //   this.loading.dismiss();
  //   // }, 5000);
  // }

  // detectWhenAFrameLoaded() {
  //   AFRAME.registerComponent('log', {
  //     schema: {type: 'string'},
  //     init: function () {
  //       var stringToLog = this.data;
  //       console.log(stringToLog);
  //     }
  //   });
  // }

  // close(){
  //   this.modalCtrl.dismiss();
  // }
}
