import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'anms-snarky',
  templateUrl: './snarky.component.html',
  styleUrls: ['./snarky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnarkyComponent implements OnInit {
  themeSrc: string = require('!raw-loader!./snarky.component.scss-theme.scss');
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
