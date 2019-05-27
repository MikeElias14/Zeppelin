import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'anms-smartDots',
  templateUrl: './smartDots.component.html',
  styleUrls: ['./smartDots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartDotsComponent implements OnInit {
  themeSrc: string = require('!raw-loader!./smartDots.component.scss-theme.scss');
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
