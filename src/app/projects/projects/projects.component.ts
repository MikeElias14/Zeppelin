import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { routeAnimations } from '@app/core';

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

  ngOnInit(): void {}
}
