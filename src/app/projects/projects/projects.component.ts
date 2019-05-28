import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { routeAnimations } from '@app/core';

import { State as BaseProjectsState } from '../projects.state';

interface State extends BaseSettingsState, BaseProjectsState {}

@Component({
  selector: 'anms-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  projects = [
    { link: 'zeppelin', label: 'Zeppelin' },
    { link: 'smartDots', label: 'SmartDots' },
    { link: 'aris', label: 'ARIS' },
    { link: 'snarky', label: 'Snarky' }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {

  }
}
