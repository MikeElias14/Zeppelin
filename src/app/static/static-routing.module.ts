import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { AboutMeComponent } from './aboutMe/aboutMe.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' }
  }
  // {
  //   path: 'aboutMe',
  //   component: AboutMeComponent,
  //   data: { title: 'aboutMe' }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
