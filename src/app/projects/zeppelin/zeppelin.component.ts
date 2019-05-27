import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'anms-zeppelin',
  templateUrl: './zeppelin.component.html',
  styleUrls: ['./zeppelin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZeppelinComponent implements OnInit {
  themeSrc: string = require('!raw-loader!./zeppelin.component.scss-theme.scss');
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
