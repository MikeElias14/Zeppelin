import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'anms-aris',
  templateUrl: './aris.component.html',
  styleUrls: ['./aris.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArisComponent implements OnInit {
  themeSrc: string = require('!raw-loader!./aris.component.scss-theme.scss');
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
