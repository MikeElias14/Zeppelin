import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    loadChildren: 'app/projects/projects.module#ProjectsModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: 'resume',
    redirectTo: 'assets/Michael-Elias-resume.pdf'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
