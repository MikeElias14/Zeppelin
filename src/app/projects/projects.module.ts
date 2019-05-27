import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';

import { VENUE_NAME, reducers } from './projects.state';
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
    StoreModule.forFeature(VENUE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/examples/`,
    '.json'
  );
}
