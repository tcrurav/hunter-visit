import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-vr',
  templateUrl: './show-vr.page.html',
  styleUrls: ['./show-vr.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowVrPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
