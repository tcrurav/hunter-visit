import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GeolocationLeafletPage } from './geolocation-leaflet.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocationLeafletPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeolocationLeafletPage]
})
export class GeolocationLeafletPageModule {}
