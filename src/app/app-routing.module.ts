import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'visit', loadChildren: './visit/visit.module#VisitPageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'show-vr', loadChildren: './show-vr/show-vr.module#ShowVrPageModule' },
  { path: 'youtube', loadChildren: './youtube/youtube.module#YoutubePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
