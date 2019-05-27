import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [HomeComponent, AboutMeComponent]
})
export class StaticModule {}
