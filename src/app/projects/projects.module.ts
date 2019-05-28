import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { SmartDotsComponent } from './smartDots/smartDots.component';
import { ZeppelinComponent } from './zeppelin/zeppelin.component';
import { ArisComponent } from './aris/aris.component';
import { SnarkyComponent } from './snarky/snarky.component';
import { ProjectsEffects } from './projects.effects';

@NgModule({
  imports: [
    SharedModule,
    ProjectsRoutingModule,
    EffectsModule.forFeature([
      ProjectsEffects
    ])
  ],
  declarations: [
    ProjectsComponent,
    SmartDotsComponent,
    ZeppelinComponent,
    ArisComponent,
    SnarkyComponent
  ],
  providers: []
})
export class ProjectsModule {
  constructor() {}
}
