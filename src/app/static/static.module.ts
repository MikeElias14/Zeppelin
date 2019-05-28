import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';

import { ParticlesModule } from 'angular-particle';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [SharedModule, StaticRoutingModule, ParticlesModule, NgxExtendedPdfViewerModule],
  declarations: [HomeComponent, AboutMeComponent]
})
export class StaticModule {}
