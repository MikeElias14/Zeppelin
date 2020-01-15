import { Component, OnInit } from '@angular/core';

import {
  routeAnimations
} from '@app/core';
import { environment as env } from '@env/environment';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  logo = require('../assets/logo.png');

  // For internal Nav
  navigation = [
    { link: 'home', label: 'Home' }
    // { link: 'aboutMe', label: 'About Me' }
  ];
  navigationSideMenu = [
    ...this.navigation
  ];

  theme$: string;

  ngOnInit(): void {
    this.theme$ = "black-theme";
  }
}
