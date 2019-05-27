import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  AppState,
  LocalStorageService
} from '@app/core';
import { environment as env } from '@env/environment';

import {
  selectEffectiveTheme,
  selectSettingsStickyHeader
} from './settings';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo.png');
  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'aboutMe', label: 'About Me' },
    { link: 'projects', label: 'Projects' },
    { link: 'projects', label: 'Resume' } //TODO: rEEEEE sume
  ];
  navigationSideMenu = [
    ...this.navigation
  ];

  stickyHeader$: Observable<boolean>;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.theme$ = this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }
}
