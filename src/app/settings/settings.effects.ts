import { ActivationEnd, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { interval, merge, of } from 'rxjs';
import {
  tap,
  withLatestFrom,
  map,
  distinctUntilChanged,
  mapTo,
  filter
} from 'rxjs/operators';

import {
  LocalStorageService,
  AnimationsService,
  TitleService
} from '@app/core';

import {
  SettingsActionTypes,
  SettingsActions
} from './settings.actions';
import {
  selectSettingsState
} from './settings.selectors';
import { State } from './settings.model';

export const SETTINGS_KEY = 'SETTINGS';

const INIT = of('anms-init-effect-trigger');

@Injectable()
export class SettingsEffects {
  constructor(
    private store: Store<State>,
    private router: Router,
    private overlayContainer: OverlayContainer,
    private localStorageService: LocalStorageService,
    private titleService: TitleService,
    private animationsService: AnimationsService,
    private translateService: TranslateService
  ) {}


  @Effect({ dispatch: false })
  setTitle = merge(
    this.router.events.pipe(filter(event => event instanceof ActivationEnd))
  ).pipe(
    tap(() => {
      this.titleService.setTitle(
        this.router.routerState.snapshot.root,
        this.translateService
      );
    })
  );
}
