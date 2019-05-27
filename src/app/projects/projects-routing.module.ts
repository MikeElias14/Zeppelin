import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ZeppelinComponent } from './zeppelin/zeppelin.component';
import { SmartDotsComponent } from './smartDots/smartDots.component';
import { ArisComponent } from './aris/aris.component';
import { SnarkyComponent } from './snarky/snarky.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        redirectTo: 'zeppelin',
        pathMatch: 'full'
      },
      {
        path: 'zeppelin',
        component: ZeppelinComponent,
        data: { title: 'Zeppelin' }
      },
      {
        path: 'smartDots',
        component: SmartDotsComponent,
        data: { title: 'SmartDots' }
      },
      {
        path: 'aris',
        component: ArisComponent,
        data: { title: 'Aris' }
      },
      {
        path: 'snarky',
        component: SnarkyComponent,
        data: { title: 'Snarky' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
